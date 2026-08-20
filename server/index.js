// Сервер Surf Landing: статика из dist/ + API контента и авторизации админки.
// Запуск: npm run server (читает server/.env через --env-file).
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { get as getBlob, put as putBlob } from '@vercel/blob'
import express from 'express'
import { seedPosts, seedEvents } from './seed.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DIST_DIR = path.join(ROOT, 'dist')
const DATA_DIR = path.join(__dirname, 'data')
const DATA_FILE = path.join(DATA_DIR, 'content.json')
const BLOB_CONTENT_PATH = 'surf/content.json'
const USE_BLOB_STORAGE = Boolean(
  process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN
)

if (process.env.VERCEL === '1' && !USE_BLOB_STORAGE) {
  console.warn(
    'Vercel Blob не подключён — контент доступен только для чтения из сидов.'
  )
}

const PORT = Number(process.env.PORT) || 3000
const SESSION_COOKIE = 'surf_session'
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 дней
const LOGIN_LIMIT = 5 // попыток
const LOGIN_WINDOW_MS = 60 * 1000 // в минуту

const PASSWORD_HASH = (process.env.ADMIN_PASSWORD_HASH || '').toLowerCase()
if (!/^[0-9a-f]{64}$/.test(PASSWORD_HASH)) {
  console.error(
    'Ошибка: задайте ADMIN_PASSWORD_HASH (SHA-256 пароля, 64 hex-символа) в server/.env\n' +
      "Посчитать хэш: printf 'ваш-пароль' | sha256sum"
  )
  process.exit(1)
}

const PROXYAPI_KEY = process.env.PROXYAPI_KEY || ''
if (!PROXYAPI_KEY) {
  console.warn(
    'Внимание: PROXYAPI_KEY не задан в server/.env — AI-ассистент в админке не будет работать.'
  )
}

// ---------- AI-ассистент (ProxyAPI, OpenAI-совместимый API) ----------

const AI_MODEL = process.env.AI_MODEL || 'gpt-4o'
const PROXYAPI_URL = 'https://api.proxyapi.ru/openai/v1/chat/completions'
const AI_TIMEOUT_MS = 90_000

/** ip -> number[] (timestamps запросов к AI) */
const aiRequests = new Map()
const AI_LIMIT = 10 // запросов
const AI_WINDOW_MS = 60 * 1000 // в минуту

function isAiRateLimited(ip) {
  const now = Date.now()
  const requests = (aiRequests.get(ip) || []).filter(
    (t) => now - t < AI_WINDOW_MS
  )
  requests.push(now)
  aiRequests.set(ip, requests)
  return requests.length > AI_LIMIT
}

const AI_SYSTEM_PROMPT_POST = `You are the blog editor for Surf — a privacy-focused messaging app. The admin gives you raw source material (news text, release notes, screenshots, scattered facts) and you write a blog post draft for the company blog.

Return ONLY a JSON object, no markdown fences, no commentary:
- {"type":"draft","title":"...","excerpt":"...","tag":"...","content":"...","date":"yyyy-mm-dd"} — a ready draft
- {"type":"question","question":"..."} — if critical information is missing, ask ONE short clarifying question instead

Rules for the draft:
- title: catchy, up to 80 chars, no clickbait
- excerpt: 1–2 sentences summarizing the post (shown on the blog cards)
- tag: one of "Product", "Guides", "News" (or a single short word if none fits)
- content: markdown, 4–7 paragraphs separated by blank lines. You may use ## subheadings, - bullet lists, **bold**, *italic* and [links](url)
- date: include this field ONLY when the admin explicitly gives or asks to change the publication date; otherwise omit it
- tone: friendly, honest, no marketing fluff — like a team member writing to users
- language: write the post (title, excerpt, tag, content) in English, but ALWAYS talk to the admin in Russian (the "question" field and any clarifications)
- if the request includes "Current form content", treat it as the draft being edited (the admin may have written or changed it manually): refine, format and structure it as asked, and return the full updated draft
- when the admin asks to refine a previous draft, return the FULL updated draft (same JSON format)`

const AI_SYSTEM_PROMPT_EVENT = `You are the events editor for Surf — a privacy-focused messaging app. The admin gives you raw source material (announcement text, screenshots, scattered facts) and you write an event draft for the events page.

Return ONLY a JSON object, no markdown fences, no commentary:
- {"type":"draft","title":"...","date":"yyyy-mm-dd","time":"HH:MM","format":"...","location":"...","description":"...","upcoming":true} — a ready draft
- {"type":"question","question":"..."} — if critical information is missing (e.g. no date at all), ask ONE short clarifying question instead

Rules for the draft:
- title: short and clear, e.g. "Surf Community Meetup: Novosibirsk"
- date: the event date in ISO format yyyy-mm-dd
- time: 24-hour format HH:MM
- format: "Offline" or "Online"
- location: e.g. "Novosibirsk, Technopark" or "Stream on YouTube"
- description: markdown, 1–3 short paragraphs about the event; may use **bold**, *italic*, - lists, [links](url)
- upcoming: true if the event is in the future, false if it already happened
- language: write the event (title, location, description) in English, but ALWAYS talk to the admin in Russian (the "question" field and any clarifications)
- if the request includes "Current form content", treat it as the draft being edited (the admin may have written or changed it manually): refine, format and structure it as asked, and return the full updated draft
- when the admin asks to refine a previous draft (change the date, time, place, description — anything), return the FULL updated draft (same JSON format)`

const DOC_GROUPS = ['start', 'communication', 'features', 'settings', 'help']

/**
 * Промпт для дополнения пользовательской документации. Возвращает двуязычную
 * главу (ru/en) с одним и тем же id и группой. Существующие id передаются
 * отдельно, чтобы AI не дублировал разделы.
 */
function docsSystemPrompt(existingIds) {
  const ids = existingIds.length
    ? existingIds.join(', ')
    : '(none yet)'
  return `You are the documentation editor for Surf — a privacy-focused messaging app with an AI assistant called Opus. The admin asks you to write or extend a chapter of the public user documentation (help center).

Existing chapter ids (do NOT reuse them): ${ids}
The documentation has exactly 5 groups: start, communication, features, settings, help.

Return ONLY a JSON object, no markdown fences, no commentary:
- {"type":"draft","id":"...","group":"...","ru":{...},"en":{...}} — a ready bilingual chapter
- {"type":"question","question":"..."} — if critical information is missing, ask ONE short clarifying question in Russian instead

Draft rules:
- id: short lowercase slug using only latin letters, digits and hyphens, unique, must not collide with existing ids
- group: one of "start", "communication", "features", "settings", "help"
- ru and en are localized versions with the same meaning and structure. Use ONLY these fields and omit any that are empty:
  - "title": required, short and clear
  - "summary": required, one sentence describing what the chapter covers
  - "access": optional, one of "Free", "Free + Pro", "Pro"
  - "purpose": optional, one sentence on what the feature is for
  - "desktop": optional, ordered step-by-step instructions for desktop
  - "mobile": optional, ordered step-by-step instructions for mobile
  - "details": optional, array of {"title", "paragraphs": [...], "bullets": [...]} (paragraphs/bullets optional)
  - "problems": optional, array of {"issue", "solution"}
- write "ru" in Russian and "en" in English
- match the tone of the existing docs: concrete, step-by-step, honest, no marketing fluff
- if the admin asks to modify a chapter you produced earlier, return the FULL updated bilingual chapter (same id)`
}

// ---------- Хранилище контента ----------

function isValidContent(content) {
  return Array.isArray(content?.posts) && Array.isArray(content?.events)
}

function emptyDocs() {
  return { ru: [], en: [] }
}

function normalizeDocs(docs) {
  if (!docs || typeof docs !== 'object') return emptyDocs()
  return {
    ru: Array.isArray(docs.ru) ? docs.ru : [],
    en: Array.isArray(docs.en) ? docs.en : [],
  }
}

function withDocs(content) {
  return { ...content, docs: normalizeDocs(content.docs) }
}

async function loadContent() {
  if (USE_BLOB_STORAGE) {
    try {
      const result = await getBlob(BLOB_CONTENT_PATH, {
        access: 'private',
        useCache: false,
      })
      if (!result) {
        return { posts: seedPosts, events: seedEvents, docs: emptyDocs() }
      }

      const parsed = await new Response(result.stream).json()
      return isValidContent(parsed)
        ? withDocs(parsed)
        : { posts: seedPosts, events: seedEvents, docs: emptyDocs() }
    } catch (error) {
      console.error('Не удалось прочитать контент из Vercel Blob:', error)
      throw error
    }
  }

  if (!fs.existsSync(DATA_FILE)) {
    const initial = { posts: seedPosts, events: seedEvents, docs: emptyDocs() }
    await saveContent(initial)
    return initial
  }
  try {
    const parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
    if (isValidContent(parsed)) return withDocs(parsed)
  } catch {
    // повреждённый файл — отдаём сиды, файл не трогаем
  }
  return { posts: seedPosts, events: seedEvents, docs: emptyDocs() }
}

async function saveContent(content) {
  if (USE_BLOB_STORAGE) {
    await putBlob(BLOB_CONTENT_PATH, JSON.stringify(content), {
      access: 'private',
      allowOverwrite: true,
      contentType: 'application/json; charset=utf-8',
    })
    return
  }

  if (process.env.VERCEL === '1') {
    const error = new Error('Vercel Blob is not configured')
    error.statusCode = 503
    error.publicMessage = 'Content storage is not configured'
    throw error
  }

  fs.mkdirSync(DATA_DIR, { recursive: true })
  const tmp = DATA_FILE + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(content, null, 2))
  fs.renameSync(tmp, DATA_FILE)
}

// ---------- Сессии и rate limit ----------

// Подписанная cookie не зависит от памяти конкретного serverless-инстанса.
const SESSION_SECRET = process.env.SESSION_SECRET || PASSWORD_HASH
/** ip -> number[] (timestamps неудачных попыток) */
const loginAttempts = new Map()

function createSession() {
  const payload = `${Date.now() + SESSION_TTL_MS}.${crypto.randomBytes(16).toString('hex')}`
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('hex')
  return `${payload}.${signature}`
}

function getSession(token) {
  if (typeof token !== 'string') return false
  const [expiresAt, nonce, signature] = token.split('.')
  if (!expiresAt || !nonce || !signature || !/^\d+$/.test(expiresAt)) return false

  const payload = `${expiresAt}.${nonce}`
  const expected = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest()
  const received = Buffer.from(signature, 'hex')

  return (
    received.length === expected.length &&
    crypto.timingSafeEqual(received, expected) &&
    Number(expiresAt) > Date.now()
  )
}

function isRateLimited(ip) {
  const now = Date.now()
  const attempts = (loginAttempts.get(ip) || []).filter(
    (t) => now - t < LOGIN_WINDOW_MS
  )
  loginAttempts.set(ip, attempts)
  return attempts.length >= LOGIN_LIMIT
}

function recordFailedAttempt(ip) {
  const attempts = loginAttempts.get(ip) || []
  attempts.push(Date.now())
  loginAttempts.set(ip, attempts)
}

function parseCookies(req) {
  const header = req.headers.cookie || ''
  const cookies = {}
  for (const part of header.split(';')) {
    const idx = part.indexOf('=')
    if (idx > 0) {
      cookies[part.slice(0, idx).trim()] = decodeURIComponent(
        part.slice(idx + 1).trim()
      )
    }
  }
  return cookies
}

function sessionToken(req) {
  return parseCookies(req)[SESSION_COOKIE]
}

function requireAuth(req, res, next) {
  if (getSession(sessionToken(req))) {
    next()
  } else {
    res.status(401).json({ error: 'unauthorized' })
  }
}

function setSessionCookie(res, token) {
  const parts = [
    `${SESSION_COOKIE}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
  ]
  if (process.env.COOKIE_SECURE === '1' || process.env.VERCEL === '1') {
    parts.push('Secure')
  }
  res.setHeader('Set-Cookie', parts.join('; '))
}

function clearSessionCookie(res) {
  res.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
  )
}

// ---------- Валидация ----------

function isNonEmptyString(v, maxLen = 10000) {
  return typeof v === 'string' && v.trim().length > 0 && v.length <= maxLen
}

function validatePost(p) {
  return (
    p &&
    isNonEmptyString(p.slug, 200) &&
    isNonEmptyString(p.title, 500) &&
    isNonEmptyString(p.excerpt, 2000) &&
    isNonEmptyString(p.date, 50) &&
    isNonEmptyString(p.tag, 100) &&
    isNonEmptyString(p.cover, 3 * 1024 * 1024) && // base64-обложка или путь
    Array.isArray(p.content) &&
    p.content.length > 0 &&
    p.content.every((c) => isNonEmptyString(c, 20000))
  )
}

function validateEvent(e) {
  return (
    e &&
    isNonEmptyString(e.id, 200) &&
    isNonEmptyString(e.title, 500) &&
    isNonEmptyString(e.day, 10) &&
    isNonEmptyString(e.month, 20) &&
    isNonEmptyString(e.time, 20) &&
    isNonEmptyString(e.format, 50) &&
    isNonEmptyString(e.location, 300) &&
    isNonEmptyString(e.description, 5000) &&
    typeof e.upcoming === 'boolean'
  )
}

function isDocSlug(v) {
  return typeof v === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v) && v.length <= 100
}

function isOptionalStringArray(v, maxItem = 1000) {
  return (
    v === undefined ||
    (Array.isArray(v) &&
      v.length <= 40 &&
      v.every((s) => isNonEmptyString(s, maxItem)))
  )
}

function isOptionalDetails(v) {
  return (
    v === undefined ||
    (Array.isArray(v) &&
      v.length <= 20 &&
      v.every((d) => {
        if (!d || !isNonEmptyString(d.title, 300)) return false
        if (d.paragraphs !== undefined && !isOptionalStringArray(d.paragraphs, 2000)) {
          return false
        }
        if (d.bullets !== undefined && !isOptionalStringArray(d.bullets, 1000)) {
          return false
        }
        return true
      }))
  )
}

function isOptionalProblems(v) {
  return (
    v === undefined ||
    (Array.isArray(v) &&
      v.length <= 20 &&
      v.every(
        (p) =>
          p &&
          isNonEmptyString(p.issue, 500) &&
          isNonEmptyString(p.solution, 2000)
      ))
  )
}

function validateDocChapter(ch) {
  if (!ch || typeof ch !== 'object') return false
  if (!isDocSlug(ch.id)) return false
  if (!DOC_GROUPS.includes(ch.group)) return false
  if (!isNonEmptyString(ch.title, 300)) return false
  if (!isNonEmptyString(ch.summary, 1000)) return false
  if (ch.access !== undefined && !['Free', 'Free + Pro', 'Pro'].includes(ch.access)) {
    return false
  }
  if (ch.purpose !== undefined && !isNonEmptyString(ch.purpose, 3000)) return false
  if (!isOptionalStringArray(ch.desktop)) return false
  if (!isOptionalStringArray(ch.mobile)) return false
  if (!isOptionalDetails(ch.details)) return false
  if (!isOptionalProblems(ch.problems)) return false
  return true
}

// ---------- Приложение ----------

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '8mb' }))

const asyncRoute = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next)
}

// Авторизация
app.post('/api/admin/login', (req, res) => {
  const ip = req.ip || 'unknown'
  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: 'Too many attempts. Try again in a minute.' })
  }

  const password = req.body?.password
  if (typeof password !== 'string') {
    return res.status(400).json({ error: 'bad request' })
  }

  const hash = crypto.createHash('sha256').update(password).digest()
  const expected = Buffer.from(PASSWORD_HASH, 'hex')
  if (hash.length !== expected.length || !crypto.timingSafeEqual(hash, expected)) {
    recordFailedAttempt(ip)
    return res.status(401).json({ error: 'Wrong password' })
  }

  loginAttempts.delete(ip)
  setSessionCookie(res, createSession())
  res.json({ ok: true })
})

app.post('/api/admin/logout', (req, res) => {
  clearSessionCookie(res)
  res.json({ ok: true })
})

app.get('/api/admin/me', requireAuth, (req, res) => {
  res.json({ ok: true })
})

// Публичный контент
app.get('/api/content', asyncRoute(async (req, res) => {
  res.json(await loadContent())
}))

// Админские ручки постов
app.post('/api/admin/posts', requireAuth, asyncRoute(async (req, res) => {
  const post = req.body
  if (!validatePost(post)) return res.status(400).json({ error: 'invalid post' })
  const content = await loadContent()
  if (content.posts.some((p) => p.slug === post.slug)) {
    return res.status(409).json({ error: 'slug already exists' })
  }
  content.posts.unshift(post)
  await saveContent(content)
  res.status(201).json(post)
}))

app.put('/api/admin/posts/:slug', requireAuth, asyncRoute(async (req, res) => {
  const post = req.body
  if (!validatePost(post)) return res.status(400).json({ error: 'invalid post' })
  const content = await loadContent()
  const idx = content.posts.findIndex((p) => p.slug === req.params.slug)
  if (idx === -1) return res.status(404).json({ error: 'not found' })
  content.posts[idx] = post
  await saveContent(content)
  res.json(post)
}))

app.delete('/api/admin/posts/:slug', requireAuth, asyncRoute(async (req, res) => {
  const content = await loadContent()
  const before = content.posts.length
  content.posts = content.posts.filter((p) => p.slug !== req.params.slug)
  if (content.posts.length === before) {
    return res.status(404).json({ error: 'not found' })
  }
  await saveContent(content)
  res.json({ ok: true })
}))

// Админские ручки ивентов
app.post('/api/admin/events', requireAuth, asyncRoute(async (req, res) => {
  const event = req.body
  if (!validateEvent(event)) {
    return res.status(400).json({ error: 'invalid event' })
  }
  const content = await loadContent()
  if (content.events.some((e) => e.id === event.id)) {
    return res.status(409).json({ error: 'id already exists' })
  }
  content.events.unshift(event)
  await saveContent(content)
  res.status(201).json(event)
}))

app.put('/api/admin/events/:id', requireAuth, asyncRoute(async (req, res) => {
  const event = req.body
  if (!validateEvent(event)) {
    return res.status(400).json({ error: 'invalid event' })
  }
  const content = await loadContent()
  const idx = content.events.findIndex((e) => e.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'not found' })
  content.events[idx] = event
  await saveContent(content)
  res.json(event)
}))

app.delete('/api/admin/events/:id', requireAuth, asyncRoute(async (req, res) => {
  const content = await loadContent()
  const before = content.events.length
  content.events = content.events.filter((e) => e.id !== req.params.id)
  if (content.events.length === before) {
    return res.status(404).json({ error: 'not found' })
  }
  await saveContent(content)
  res.json({ ok: true })
}))

// Админские ручки дополнений документации (bilingual: ru + en)
app.post('/api/admin/docs', requireAuth, asyncRoute(async (req, res) => {
  const { ru, en } = req.body || {}
  if (!validateDocChapter(ru) || !validateDocChapter(en)) {
    return res.status(400).json({ error: 'invalid chapter' })
  }
  if (ru.id !== en.id) {
    return res.status(400).json({ error: 'ru and en ids must match' })
  }

  const content = await loadContent()
  if (
    content.docs.ru.some((c) => c.id === ru.id) ||
    content.docs.en.some((c) => c.id === en.id)
  ) {
    return res.status(409).json({ error: 'id already exists' })
  }

  content.docs.ru.push(ru)
  content.docs.en.push(en)
  await saveContent(content)
  res.status(201).json({ ru, en })
}))

app.put('/api/admin/docs/:id', requireAuth, asyncRoute(async (req, res) => {
  const { ru, en } = req.body || {}
  if (!validateDocChapter(ru) || !validateDocChapter(en)) {
    return res.status(400).json({ error: 'invalid chapter' })
  }
  if (ru.id !== req.params.id || en.id !== req.params.id) {
    return res.status(400).json({ error: 'id mismatch' })
  }

  const content = await loadContent()
  const ruIdx = content.docs.ru.findIndex((c) => c.id === req.params.id)
  const enIdx = content.docs.en.findIndex((c) => c.id === req.params.id)
  if (ruIdx === -1 && enIdx === -1) {
    return res.status(404).json({ error: 'not found' })
  }
  if (ruIdx !== -1) content.docs.ru[ruIdx] = ru
  if (enIdx !== -1) content.docs.en[enIdx] = en
  await saveContent(content)
  res.json({ ru, en })
}))

app.delete('/api/admin/docs/:id', requireAuth, asyncRoute(async (req, res) => {
  const content = await loadContent()
  const before = content.docs.ru.length + content.docs.en.length
  content.docs.ru = content.docs.ru.filter((c) => c.id !== req.params.id)
  content.docs.en = content.docs.en.filter((c) => c.id !== req.params.id)
  if (content.docs.ru.length + content.docs.en.length === before) {
    return res.status(404).json({ error: 'not found' })
  }
  await saveContent(content)
  res.json({ ok: true })
}))

// ---------- AI-ассистент ----------

function validateAiMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30) {
    return false
  }
  return messages.every((m) => {
    if (!m || (m.role !== 'user' && m.role !== 'assistant')) return false
    if (typeof m.text !== 'string' || m.text.length > 20000) return false
    if (m.images !== undefined) {
      if (!Array.isArray(m.images) || m.images.length > 3) return false
      if (
        !m.images.every(
          (img) =>
            typeof img === 'string' &&
            img.startsWith('data:image/') &&
            img.length <= 1_500_000
        )
      ) {
        return false
      }
    }
    return true
  })
}

function toOpenAiContent(msg) {
  const parts = []
  if (msg.text) parts.push({ type: 'text', text: msg.text })
  for (const img of msg.images || []) {
    parts.push({ type: 'image_url', image_url: { url: img } })
  }
  return parts.length === 1 && parts[0].type === 'text' ? msg.text : parts
}

function validatePostDraft(parsed) {
  return (
    parsed.type === 'draft' &&
    isNonEmptyString(parsed.title, 500) &&
    isNonEmptyString(parsed.excerpt, 2000) &&
    isNonEmptyString(parsed.tag, 100) &&
    isNonEmptyString(parsed.content, 100_000) &&
    (parsed.date === undefined || /^\d{4}-\d{2}-\d{2}$/.test(parsed.date))
  )
}

function validateEventDraft(parsed) {
  return (
    parsed.type === 'draft' &&
    isNonEmptyString(parsed.title, 500) &&
    /^\d{4}-\d{2}-\d{2}$/.test(parsed.date || '') &&
    /^([01]\d|2[0-3]):[0-5]\d$/.test(parsed.time || '') &&
    isNonEmptyString(parsed.format, 50) &&
    isNonEmptyString(parsed.location, 300) &&
    isNonEmptyString(parsed.description, 20_000) &&
    typeof parsed.upcoming === 'boolean'
  )
}

app.post('/api/admin/ai/post', requireAuth, async (req, res) => {
  if (!PROXYAPI_KEY) {
    return res.status(503).json({
      error: 'AI is not configured: add PROXYAPI_KEY to server/.env',
    })
  }
  if (isAiRateLimited(req.ip || 'unknown')) {
    return res
      .status(429)
      .json({ error: 'Too many AI requests. Try again in a minute.' })
  }

  const kind = req.body?.kind === 'event' ? 'event' : 'post'
  const messages = req.body?.messages
  if (!validateAiMessages(messages)) {
    return res.status(400).json({ error: 'invalid messages' })
  }

  const context = req.body?.context
  if (context !== undefined && typeof context !== 'string') {
    return res.status(400).json({ error: 'invalid context' })
  }

  const openAiMessages = [
    {
      role: 'system',
      content: kind === 'event' ? AI_SYSTEM_PROMPT_EVENT : AI_SYSTEM_PROMPT_POST,
    },
    ...(context && context.trim()
      ? [
          {
            role: 'user',
            content: `Current form content (the admin may have edited it manually between messages):\n\n${context.slice(0, 30000)}`,
          },
        ]
      : []),
    ...messages.map((m) => ({
      role: m.role,
      content: m.role === 'user' ? toOpenAiContent(m) : m.text,
    })),
  ]

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), AI_TIMEOUT_MS)
  try {
    const aiRes = await fetch(PROXYAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PROXYAPI_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: openAiMessages,
        temperature: 0.7,
        max_tokens: 3000,
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    })

    if (!aiRes.ok) {
      console.error('ProxyAPI error:', aiRes.status, await aiRes.text())
      return res
        .status(502)
        .json({ error: `AI service error (${aiRes.status})` })
    }

    const data = await aiRes.json()
    const raw = data.choices?.[0]?.message?.content || ''

    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch {
      return res
        .status(502)
        .json({ error: 'AI returned an unreadable response. Try again.' })
    }

    if (kind === 'post' && validatePostDraft(parsed)) {
      const draft = {
        title: parsed.title,
        excerpt: parsed.excerpt,
        tag: parsed.tag,
        content: parsed.content,
      }
      if (parsed.date !== undefined) draft.date = parsed.date
      return res.json({ type: 'draft', draft, raw })
    }
    if (kind === 'event' && validateEventDraft(parsed)) {
      return res.json({
        type: 'draft',
        draft: {
          title: parsed.title,
          date: parsed.date,
          time: parsed.time,
          format: parsed.format,
          location: parsed.location,
          description: parsed.description,
          upcoming: parsed.upcoming,
        },
        raw,
      })
    }
    if (parsed.type === 'question' && isNonEmptyString(parsed.question, 2000)) {
      return res.json({ type: 'question', question: parsed.question, raw })
    }
    return res
      .status(502)
      .json({ error: 'AI returned an unexpected format. Try again.' })
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      return res.status(504).json({ error: 'AI timed out. Try again.' })
    }
    return res.status(502).json({ error: 'AI service is unavailable.' })
  } finally {
    clearTimeout(timeout)
  }
})

// ---------- AI: дополнение документации ----------

app.post('/api/admin/ai/docs', requireAuth, async (req, res) => {
  if (!PROXYAPI_KEY) {
    return res.status(503).json({
      error: 'AI is not configured: add PROXYAPI_KEY to server/.env',
    })
  }
  if (isAiRateLimited(req.ip || 'unknown')) {
    return res
      .status(429)
      .json({ error: 'Too many AI requests. Try again in a minute.' })
  }

  const messages = req.body?.messages
  if (!validateAiMessages(messages)) {
    return res.status(400).json({ error: 'invalid messages' })
  }

  const existingIds = req.body?.existingIds
  if (
    existingIds !== undefined &&
    !(
      Array.isArray(existingIds) &&
      existingIds.length <= 200 &&
      existingIds.every((id) => typeof id === 'string' && id.length <= 100)
    )
  ) {
    return res.status(400).json({ error: 'invalid existingIds' })
  }

  const openAiMessages = [
    { role: 'system', content: docsSystemPrompt(existingIds ?? []) },
    ...messages.map((m) => ({
      role: m.role,
      content: m.role === 'user' ? toOpenAiContent(m) : m.text,
    })),
  ]

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), AI_TIMEOUT_MS)
  try {
    const aiRes = await fetch(PROXYAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PROXYAPI_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: openAiMessages,
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    })

    if (!aiRes.ok) {
      console.error('ProxyAPI error:', aiRes.status, await aiRes.text())
      return res
        .status(502)
        .json({ error: `AI service error (${aiRes.status})` })
    }

    const data = await aiRes.json()
    const raw = data.choices?.[0]?.message?.content || ''

    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch {
      return res
        .status(502)
        .json({ error: 'AI returned an unreadable response. Try again.' })
    }

    if (parsed.type === 'draft' && isDocSlug(parsed.id) && parsed.ru && parsed.en) {
      const ru = { id: parsed.id, group: parsed.group, ...parsed.ru }
      const en = { id: parsed.id, group: parsed.group, ...parsed.en }
      if (validateDocChapter(ru) && validateDocChapter(en)) {
        return res.json({ type: 'draft', draft: { ru, en }, raw })
      }
    }
    if (parsed.type === 'question' && isNonEmptyString(parsed.question, 2000)) {
      return res.json({ type: 'question', question: parsed.question, raw })
    }
    return res
      .status(502)
      .json({ error: 'AI returned an unexpected format. Try again.' })
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      return res.status(504).json({ error: 'AI timed out. Try again.' })
    }
    return res.status(502).json({ error: 'AI service is unavailable.' })
  } finally {
    clearTimeout(timeout)
  }
})

app.use((error, req, res, next) => {
  console.error('Server error:', error)
  if (res.headersSent) return next(error)
  const statusCode = Number.isInteger(error.statusCode)
    ? error.statusCode
    : 500
  res.status(statusCode).json({
    error: error.publicMessage || 'Internal server error',
  })
})

// Статика + SPA fallback
app.use(express.static(DIST_DIR))
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) return next()
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

export default app

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Surf Landing: http://localhost:${PORT}`)
  })
}
