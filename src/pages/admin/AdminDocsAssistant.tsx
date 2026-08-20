import { useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContent, AuthError } from '../../context/ContentContext'
import type { BilingualDoc } from '../../context/ContentContext'
import type { DocChapter } from '../../data/docs'
import { docsChapters } from '../../data/docs'
import { IconArrowUp, IconCheck, IconX } from '../../components/icons'

interface ApiMessage {
  role: 'user' | 'assistant'
  text: string
}

type LogEntry =
  | { kind: 'user'; text: string }
  | { kind: 'question'; text: string }
  | { kind: 'added'; text: string }
  | { kind: 'error'; text: string }

const SUGGESTIONS = [
  'Add a chapter about two-step verification',
  'Write a guide for the Saved Messages chat',
  'Document how to create and manage polls',
]

function StepList({ title, steps }: { title: string; steps: string[] }) {
  if (!steps.length) return null
  return (
    <div className="docs-preview-block">
      <strong>{title}</strong>
      <ol>
        {steps.map((step) => <li key={step}>{step}</li>)}
      </ol>
    </div>
  )
}

function ChapterPreview({ chapter, label }: { chapter: DocChapter; label: string }) {
  return (
    <div className="docs-preview-lang">
      <h4>{label}</h4>
      <p className="docs-preview-title">{chapter.title}</p>
      <p className="docs-preview-summary">{chapter.summary}</p>
      {chapter.access && (
        <span className="docs-preview-access">{chapter.access}</span>
      )}
      {chapter.purpose && <p>{chapter.purpose}</p>}
      <StepList title="Desktop" steps={chapter.desktop ?? []} />
      <StepList title="Mobile" steps={chapter.mobile ?? []} />
      {chapter.details?.map((detail) => (
        <div key={detail.title} className="docs-preview-block">
          <strong>{detail.title}</strong>
          {detail.paragraphs?.map((p) => <p key={p}>{p}</p>)}
          {detail.bullets && (
            <ul>
              {detail.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
      {chapter.problems && (
        <div className="docs-preview-block">
          <strong>Problems &amp; solutions</strong>
          {chapter.problems.map((p) => (
            <details key={p.issue}>
              <summary>{p.issue}</summary>
              <p>{p.solution}</p>
            </details>
          ))}
        </div>
      )}
    </div>
  )
}

/** Чат с AI, который предлагает дополнение документации. Предложение
 *  показывается для подтверждения и сохраняется только по явному нажатию. */
export function AdminDocsAssistant() {
  const navigate = useNavigate()
  const { docs, addDocs } = useContent()

  const [log, setLog] = useState<LogEntry[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [pending, setPending] = useState<BilingualDoc | null>(null)

  const messagesRef = useRef<ApiMessage[]>([])
  const logRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const started = log.length > 0 || pending !== null

  const existingIds = useMemo(
    () =>
      Array.from(
        new Set([...docsChapters.map((c) => c.id), ...docs.ru.map((c) => c.id)])
      ),
    [docs.ru]
  )

  const pushLog = (entry: LogEntry) => {
    setLog((prev) => [...prev, entry])
    requestAnimationFrame(() => {
      logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
    })
  }

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    messagesRef.current.push({ role: 'user', text })
    pushLog({ kind: 'user', text })
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/ai/docs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messagesRef.current,
          existingIds,
        }),
      })
      if (res.status === 401) throw new AuthError('unauthorized')
      const data = await res.json()

      if (!res.ok) {
        pushLog({ kind: 'error', text: data.error || 'AI request failed' })
      } else if (data.type === 'draft') {
        messagesRef.current.push({ role: 'assistant', text: data.raw })
        setPending(data.draft)
      } else {
        messagesRef.current.push({ role: 'assistant', text: data.raw })
        pushLog({ kind: 'question', text: data.question })
      }
    } catch (err) {
      if (err instanceof AuthError) {
        window.location.reload() // AdminGate покажет форму входа
        return
      }
      pushLog({ kind: 'error', text: 'Network error. Is the server running?' })
    } finally {
      setLoading(false)
    }
  }

  const confirm = async () => {
    if (!pending || saving) return
    setSaving(true)
    try {
      await addDocs(pending)
      pushLog({ kind: 'added', text: pending.ru.title })
      setPending(null)
    } catch (err) {
      if (err instanceof AuthError) {
        window.location.reload()
        return
      }
      pushLog({ kind: 'error', text: err instanceof Error ? err.message : 'Failed to save the chapter' })
    } finally {
      setSaving(false)
    }
  }

  const discard = () => setPending(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <main className="admin-page">
      <div className="admin-header">
        <Link to="/admin" className="admin-back">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to list
        </Link>
        <h1>Add documentation with AI</h1>
        <p>
          Describe the chapter you need. The AI drafts a bilingual (Russian +
          English) section, and you review and confirm it before it goes live
          on the /docs page.
        </p>
      </div>

      <div className="ai-assistant">
        {!started ? (
          <div className="ai-empty">
            <p>
              Paste facts about the feature or tell me what to document, and
              I&apos;ll draft a full bilingual chapter. Nothing is published
              until you confirm it.
            </p>
            <div className="ai-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setInput(s + ': ')
                    textareaRef.current?.focus()
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="ai-log" ref={logRef}>
            {log.map((entry, i) => {
              switch (entry.kind) {
                case 'user':
                  return (
                    <div key={i} className="ai-msg ai-msg-user">
                      {entry.text}
                    </div>
                  )
                case 'question':
                  return (
                    <div key={i} className="ai-msg ai-msg-ai">
                      {entry.text}
                    </div>
                  )
                case 'added':
                  return (
                    <div key={i} className="ai-msg ai-msg-ai ai-msg-draft">
                      <span className="ai-msg-draft-status">
                        <IconCheck width="14" height="14" />
                        Published to documentation
                      </span>
                      <span className="ai-msg-draft-title">{entry.text}</span>
                    </div>
                  )
                case 'error':
                  return (
                    <div key={i} className="ai-msg ai-msg-error">
                      {entry.text}
                    </div>
                  )
              }
            })}

            {pending && (
              <div className="docs-preview">
                <div className="docs-preview-head">
                  <span className="docs-preview-group">
                    {pending.ru.id} · {pending.ru.group}
                  </span>
                  <button type="button" className="ai-dock-icon" title="Discard" onClick={discard}>
                    <IconX width="15" height="15" />
                  </button>
                </div>
                <ChapterPreview chapter={pending.ru} label="Русский" />
                <ChapterPreview chapter={pending.en} label="English" />
                <div className="docs-preview-actions">
                  <button
                    type="button"
                    className="admin-button admin-button-primary"
                    disabled={saving}
                    onClick={confirm}
                  >
                    <IconCheck width="16" height="16" />
                    Confirm &amp; publish
                  </button>
                  <button
                    type="button"
                    className="admin-button"
                    disabled={saving}
                    onClick={discard}
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {loading && (
              <div className="ai-msg ai-msg-ai ai-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}

        <div className="ai-dock">
          <div className="ai-dock-row">
            <textarea
              ref={textareaRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe the chapter to add…"
            />
            <button
              type="button"
              className="ai-dock-send"
              title="Send"
              disabled={loading || !input.trim()}
              onClick={send}
            >
              <IconArrowUp width="18" height="18" />
            </button>
          </div>
        </div>
      </div>

      {log.some((e) => e.kind === 'added') && (
        <div className="admin-form-actions">
          <button
            type="button"
            className="admin-button admin-button-primary"
            onClick={() => navigate('/admin')}
          >
            Back to admin
          </button>
        </div>
      )}
    </main>
  )
}
