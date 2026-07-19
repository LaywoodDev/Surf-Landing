import { useEffect, useRef, useState } from 'react'

const TIMES: string[] = Array.from({ length: 48 }, (_, i) => {
  const hours = String(Math.floor(i / 2)).padStart(2, '0')
  const minutes = i % 2 === 0 ? '00' : '30'
  return `${hours}:${minutes}`
})

interface TimePickerProps {
  value: string // 'HH:MM' или ''
  onChange: (value: string) => void
  placeholder?: string
}

/** Кастомный выбор времени (шаг 30 мин) в дизайне сайта — замена input[type="time"] */
export function TimePicker({
  value,
  onChange,
  placeholder = 'Pick a time',
}: TimePickerProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

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

  // при открытии прокручиваем список к выбранному времени
  useEffect(() => {
    if (open && value) {
      rootRef.current
        ?.querySelector('.picker-option-selected')
        ?.scrollIntoView({ block: 'center' })
    }
  }, [open, value])

  return (
    <div className="custom-select" ref={rootRef}>
      <button
        type="button"
        className={`picker-toggle picker-toggle-clock${value ? '' : ' picker-toggle-empty'}`}
        onClick={() => setOpen((v) => !v)}
      >
        {value || placeholder}
      </button>

      {open && (
        <div className="picker-popup picker-list picker-list-scroll">
          {TIMES.map((time) => (
            <button
              key={time}
              type="button"
              className={`picker-option${time === value ? ' picker-option-selected' : ''}`}
              onClick={() => {
                onChange(time)
                setOpen(false)
              }}
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
