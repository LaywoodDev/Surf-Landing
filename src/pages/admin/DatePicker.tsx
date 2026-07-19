import { useEffect, useRef, useState } from 'react'
import { formatDisplayDate } from './utils'

const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function toIso(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function parseIso(iso: string): Date | null {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return null
  return new Date(year, month - 1, day)
}

interface DatePickerProps {
  value: string // 'yyyy-mm-dd' или ''
  onChange: (iso: string) => void
  placeholder?: string
}

/** Кастомный календарь в дизайне сайта — замена нативному input[type="date"] */
export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
}: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const selected = parseIso(value)
  const [view, setView] = useState(() => selected ?? new Date())
  const rootRef = useRef<HTMLDivElement>(null)

  // при открытии показываем месяц выбранной даты (или текущий)
  useEffect(() => {
    if (open) setView(selected ?? new Date())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // закрытие по клику вне и по Escape
  useEffect(() => {
    if (!open) return

    const handleClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const viewYear = view.getFullYear()
  const viewMonth = view.getMonth()

  const shiftMonth = (delta: number) => {
    setView(new Date(viewYear, viewMonth + delta, 1))
  }

  const startOffset = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array<null>(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const today = new Date()
  const isToday = (day: number) =>
    today.getFullYear() === viewYear &&
    today.getMonth() === viewMonth &&
    today.getDate() === day

  const isSelected = (day: number) =>
    selected !== null &&
    selected.getFullYear() === viewYear &&
    selected.getMonth() === viewMonth &&
    selected.getDate() === day

  const pick = (day: number) => {
    onChange(toIso(viewYear, viewMonth, day))
    setOpen(false)
  }

  return (
    <div className="date-picker" ref={rootRef}>
      <button
        type="button"
        className={`picker-toggle picker-toggle-calendar${value ? '' : ' picker-toggle-empty'}`}
        onClick={() => setOpen((v) => !v)}
      >
        {value ? formatDisplayDate(value) : placeholder}
      </button>

      {open && (
        <div className="picker-popup date-picker-popup">
          <div className="date-picker-nav">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              aria-label="Previous month"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M9 2.5 4.5 7 9 11.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span>
              {MONTHS_EN[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              aria-label="Next month"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M5 2.5 9.5 7 5 11.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="date-picker-grid">
            {WEEKDAYS.map((d) => (
              <span key={d} className="date-picker-weekday">
                {d}
              </span>
            ))}
            {cells.map((day, i) =>
              day === null ? (
                <span key={`empty-${i}`} />
              ) : (
                <button
                  key={day}
                  type="button"
                  className={[
                    'date-picker-day',
                    isSelected(day) ? 'date-picker-day-selected' : '',
                    isToday(day) ? 'date-picker-day-today' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => pick(day)}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
