import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useContent, AuthError } from '../../context/ContentContext'
import { AiAssistant } from './AiAssistant'
import type { AiDraft } from './AiAssistant'
import { MarkdownEditor } from './MarkdownEditor'
import { DatePicker } from './DatePicker'
import {
  formatDisplayDate,
  parseDisplayDate,
  slugify,
  uniqueSlug,
} from './utils'

const MAX_COVER_SIZE = 1.5 * 1024 * 1024 // 1.5 МБ

export function AdminPostForm() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { posts, addPost, updatePost } = useContent()

  const existing = slug ? posts.find((p) => p.slug === slug) : undefined
  const isEditing = Boolean(slug)

  const [title, setTitle] = useState(existing?.title ?? '')
  const [excerpt, setExcerpt] = useState(existing?.excerpt ?? '')
  const [tag, setTag] = useState(existing?.tag ?? '')
  const [date, setDate] = useState(
    existing ? parseDisplayDate(existing.date) : ''
  )
  const [cover, setCover] = useState(existing?.cover ?? '')
  const [content, setContent] = useState(
    existing ? existing.content.join('\n\n') : ''
  )
  const [coverWarning, setCoverWarning] = useState('')

  const applyDraft = (draft: AiDraft) => {
    setTitle(draft.title)
    setExcerpt(draft.excerpt)
    setTag(draft.tag)
    setContent(draft.content)
    // дата из черновика, иначе текущая выбранная, иначе сегодня
    setDate(draft.date ?? (date || new Date().toISOString().slice(0, 10)))
  }

  if (isEditing && !existing) {
    return <Navigate to="/admin" replace />
  }

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > MAX_COVER_SIZE) {
      setCoverWarning(
        'File is over 1.5 MB — the post page will load slowly. Better to compress the image.'
      )
    } else {
      setCoverWarning('')
    }

    const reader = new FileReader()
    reader.onload = () => setCover(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!date) {
      alert('Pick a date')
      return
    }

    const paragraphs = content
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)

    if (paragraphs.length === 0) {
      alert('Write the post text')
      return
    }

    try {
      if (isEditing && existing) {
        await updatePost(existing.slug, {
          ...existing,
          title,
          excerpt,
          tag,
          date: formatDisplayDate(date),
          cover,
          content: paragraphs,
        })
      } else {
        const newSlug = uniqueSlug(
          slugify(title),
          posts.map((p) => p.slug)
        )
        await addPost({
          slug: newSlug,
          title,
          excerpt,
          tag,
          date: formatDisplayDate(date),
          cover,
          content: paragraphs,
        })
      }
    } catch (err) {
      if (err instanceof AuthError) {
        window.location.reload() // AdminGate покажет форму входа
      } else {
        alert(err instanceof Error ? err.message : 'Failed to save the post')
      }
      return
    }

    navigate('/admin')
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
        <h1>{isEditing ? 'Edit post' : 'New post'}</h1>
      </div>

      <AiAssistant
        kind="post"
        onApply={applyDraft}
        getContext={() =>
          [
            title && `Title: ${title}`,
            excerpt && `Excerpt: ${excerpt}`,
            tag && `Tag: ${tag}`,
            date && `Date: ${date}`,
            content && `Content:\n${content}`,
          ]
            .filter(Boolean)
            .join('\n\n')
        }
      />

      <form className="admin-form" onSubmit={handleSubmit}>
        <label className="admin-form-field">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="admin-form-field">
          <span>Excerpt</span>
          <textarea
            rows={2}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
        </label>

        <div className="admin-form-row">
          <label className="admin-form-field">
            <span>Tag</span>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Product / Guides / News"
              required
            />
          </label>

          <div className="admin-form-field">
            <span>Date</span>
            <DatePicker value={date} onChange={setDate} />
          </div>
        </div>

        <div className="admin-form-field">
          <span>Cover</span>
          <input type="file" accept="image/*" onChange={handleCoverChange} />
          {coverWarning && (
            <p className="admin-form-warning">{coverWarning}</p>
          )}
          {cover ? (
            <img
              className="admin-cover-preview"
              src={cover}
              alt="Cover preview"
            />
          ) : (
            <p className="admin-form-hint">
              {isEditing
                ? 'No cover set.'
                : 'Choose a file — cover is required.'}
            </p>
          )}
        </div>

        <div className="admin-form-field">
          <span>Post text (blank line = new paragraph)</span>
          <MarkdownEditor
            value={content}
            onChange={setContent}
            withHeading
            minRows={12}
          />
        </div>

        <div className="admin-form-actions">
          <button
            type="submit"
            className="admin-button admin-button-primary"
            disabled={!cover}
          >
            {isEditing ? 'Save' : 'Publish'}
          </button>
          <Link to="/admin" className="admin-button">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}
