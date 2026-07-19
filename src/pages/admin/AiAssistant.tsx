import { useRef, useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { AuthError } from '../../context/ContentContext'
import {
  IconArrowUp,
  IconCheck,
  IconPaperclip,
  IconX,
} from '../../components/icons'

export interface AiDraft {
  title: string
  excerpt: string
  tag: string
  content: string
  date?: string
}

export interface AiEventDraft {
  title: string
  date: string
  time: string
  format: string
  location: string
  description: string
  upcoming: boolean
}

interface AiAssistantProps<TDraft> {
  kind: 'post' | 'event'
  onApply: (draft: TDraft) => void
  /** Текущее содержимое полей формы — чтобы AI видел ручные правки */
  getContext?: () => string
}

interface ApiMessage {
  role: 'user' | 'assistant'
  text: string
  images?: string[]
}

type LogEntry<TDraft> =
  | { kind: 'user'; text: string; images: string[] }
  | { kind: 'draft'; draft: TDraft }
  | { kind: 'question'; text: string }
  | { kind: 'error'; text: string }

const MAX_IMAGES = 3
const MAX_IMAGE_DIM = 1024

const SUGGESTIONS = [
  'Announce a new app feature',
  'Turn release notes into a post',
  'Write a how-to guide for users',
]

/** Сжимает картинку до data URL (JPEG, не больше MAX_IMAGE_DIM по стороне) */
function downscaleImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, MAX_IMAGE_DIM / Math.max(img.width, img.height))
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(img.width * scale)
      canvas.height = Math.round(img.height * scale)
      canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(img.src)
      resolve(canvas.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}

/**
 * Панель AI-ассистента в виде чата: принимает исходный материал (текст,
 * картинки), генерирует черновик поста через серверный прокси и дорабатывает
 * его по уточняющим просьбам.
 */
export function AiAssistant<TDraft>({ kind, onApply, getContext }: AiAssistantProps<TDraft>) {
  const [log, setLog] = useState<LogEntry<TDraft>[]>([])
  const [input, setInput] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const messagesRef = useRef<ApiMessage[]>([])
  const logRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const started = log.length > 0

  const pushLog = (entry: LogEntry<TDraft>) => {
    setLog((prev) => [...prev, entry])
    requestAnimationFrame(() => {
      logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
    })
  }

  const handleImages = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(
      0,
      MAX_IMAGES - images.length
    )
    e.target.value = ''
    for (const file of files) {
      try {
        const dataUrl = await downscaleImage(file)
        setImages((prev) => [...prev, dataUrl].slice(0, MAX_IMAGES))
      } catch {
        pushLog({ kind: 'error', text: `Could not read image "${file.name}"` })
      }
    }
  }

  const send = async () => {
    const text = input.trim()
    if ((!text && images.length === 0) || loading) return

    const message: ApiMessage = { role: 'user', text, images }
    messagesRef.current.push(message)
    pushLog({ kind: 'user', text, images })
    setInput('')
    setImages([])
    setLoading(true)

    try {
      const res = await fetch('/api/admin/ai/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind,
          messages: messagesRef.current,
          context: getContext?.(),
        }),
      })
      if (res.status === 401) throw new AuthError('unauthorized')
      const data = await res.json()

      if (!res.ok) {
        pushLog({ kind: 'error', text: data.error || 'AI request failed' })
      } else if (data.type === 'draft') {
        messagesRef.current.push({ role: 'assistant', text: data.raw })
        pushLog({ kind: 'draft', draft: data.draft })
        onApply(data.draft)
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

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="ai-assistant">
      {!started ? (
            <div className="ai-empty">
              <p>
                {kind === 'event'
                  ? 'Paste the announcement — text, poster, facts. Attach screenshots if needed, and I\'ll fill in the whole event.'
                  : 'Paste the source material — news text, release notes, facts. Attach screenshots if needed, and I\'ll write the whole post.'}
              </p>
              <div className="ai-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => {
                    setInput(s + ': ')
                    textareaRef.current?.focus()
                  }}>
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
                        {entry.images.length > 0 && (
                          <div className="ai-msg-images">
                            {entry.images.map((src, j) => (
                              <img key={j} src={src} alt="" />
                            ))}
                          </div>
                        )}
                        {entry.text}
                      </div>
                    )
                  case 'draft':
                    return (
                      <div key={i} className="ai-msg ai-msg-ai ai-msg-draft">
                        <span className="ai-msg-draft-status">
                          <IconCheck width="14" height="14" />
                          Draft applied to the fields below
                        </span>
                        <span className="ai-msg-draft-title">
                          {(entry.draft as { title?: string }).title}
                        </span>
                        <span className="ai-msg-draft-hint">
                          Tell me what to change — I&apos;ll regenerate it.
                        </span>
                      </div>
                    )
                  case 'question':
                    return (
                      <div key={i} className="ai-msg ai-msg-ai">
                        {entry.text}
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
            {images.length > 0 && (
              <div className="ai-dock-attachments">
                {images.map((src, i) => (
                  <div key={i} className="ai-dock-thumb">
                    <img src={src} alt="" />
                    <button
                      type="button"
                      title="Remove"
                      onClick={() =>
                        setImages((prev) => prev.filter((_, j) => j !== i))
                      }
                    >
                      <IconX width="11" height="11" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="ai-dock-row">
              <label
                className={`ai-dock-icon${images.length >= MAX_IMAGES ? ' ai-dock-icon-disabled' : ''}`}
                title="Attach image (up to 3)"
              >
                <IconPaperclip width="19" height="19" />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  disabled={images.length >= MAX_IMAGES}
                  onChange={handleImages}
                />
              </label>

              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  started
                    ? 'Ask for changes…'
                    : kind === 'event'
                      ? 'Describe the event or paste the announcement…'
                      : 'Describe the news or paste the text…'
                }
              />

              <button
                type="button"
                className="ai-dock-send"
                title="Send"
                disabled={loading || (!input.trim() && images.length === 0)}
                onClick={send}
              >
                <IconArrowUp width="18" height="18" />
              </button>
            </div>
          </div>
    </div>
  )
}
