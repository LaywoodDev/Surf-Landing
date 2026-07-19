import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useContent, AuthError } from '../../context/ContentContext'
import { AiAssistant } from './AiAssistant'
import type { AiEventDraft } from './AiAssistant'
import { MarkdownEditor } from './MarkdownEditor'
import { DatePicker } from './DatePicker'
import { TimePicker } from './TimePicker'
import { Select } from './Select'
import { dayMonthToIso, isoToDayMonth } from './utils'

export function AdminEventForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { events, addEvent, updateEvent } = useContent()

  const existing = id ? events.find((e) => e.id === id) : undefined
  const isEditing = Boolean(id)

  const [title, setTitle] = useState(existing?.title ?? '')
  const [date, setDate] = useState(
    existing ? dayMonthToIso(existing.day, existing.month) : ''
  )
  const [time, setTime] = useState(existing?.time ?? '')
  const [format, setFormat] = useState(existing?.format ?? 'Offline')
  const [location, setLocation] = useState(existing?.location ?? '')
  const [description, setDescription] = useState(existing?.description ?? '')
  const [upcoming, setUpcoming] = useState(existing?.upcoming ?? true)

  const applyDraft = (draft: AiEventDraft) => {
    setTitle(draft.title)
    setDate(draft.date)
    setTime(draft.time)
    setFormat(draft.format)
    setLocation(draft.location)
    setDescription(draft.description)
    setUpcoming(draft.upcoming)
  }

  if (isEditing && !existing) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!date) {
      alert('Pick a date')
      return
    }
    if (!time) {
      alert('Pick a time')
      return
    }
    if (!description.trim()) {
      alert('Write a description')
      return
    }

    const { day, month } = isoToDayMonth(date)

    try {
      if (isEditing && existing) {
        await updateEvent(existing.id, {
          ...existing,
          title,
          day,
          month,
          time,
          format,
          location,
          description,
          upcoming,
        })
      } else {
        await addEvent({
          id: crypto.randomUUID(),
          title,
          day,
          month,
          time,
          format,
          location,
          description,
          upcoming,
        })
      }
    } catch (err) {
      if (err instanceof AuthError) {
        window.location.reload() // AdminGate покажет форму входа
      } else {
        alert(err instanceof Error ? err.message : 'Failed to save the event')
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
        <h1>{isEditing ? 'Edit event' : 'New event'}</h1>
      </div>

      <AiAssistant
        kind="event"
        onApply={applyDraft}
        getContext={() =>
          [
            title && `Title: ${title}`,
            date && `Date: ${date}`,
            time && `Time: ${time}`,
            format && `Format: ${format}`,
            location && `Location: ${location}`,
            description && `Description:\n${description}`,
            `Upcoming: ${upcoming}`,
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

        <div className="admin-form-row">
          <div className="admin-form-field">
            <span>Date</span>
            <DatePicker value={date} onChange={setDate} />
          </div>

          <div className="admin-form-field">
            <span>Time</span>
            <TimePicker value={time} onChange={setTime} />
          </div>
        </div>

        <div className="admin-form-row">
          <div className="admin-form-field">
            <span>Format</span>
            <Select
              value={format}
              options={['Offline', 'Online']}
              onChange={setFormat}
            />
          </div>

          <label className="admin-form-field">
            <span>Location</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Novosibirsk, Technopark / Stream on YouTube"
              required
            />
          </label>
        </div>

        <div className="admin-form-field">
          <span>Description</span>
          <MarkdownEditor value={description} onChange={setDescription} minRows={5} />
        </div>

        <label className="admin-form-checkbox">
          <input
            type="checkbox"
            checked={upcoming}
            onChange={(e) => setUpcoming(e.target.checked)}
          />
          <span>Upcoming event (otherwise it goes to "Past events")</span>
        </label>

        <div className="admin-form-actions">
          <button type="submit" className="admin-button admin-button-primary">
            {isEditing ? 'Save' : 'Add'}
          </button>
          <Link to="/admin" className="admin-button">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}
