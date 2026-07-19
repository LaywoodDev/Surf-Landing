import { useEffect, useRef, useState } from 'react'

interface SelectProps {
  value: string
  options: string[]
  onChange: (value: string) => void
  placeholder?: string
}

/** Кастомный выпадающий список в дизайне сайта — замена нативному <select> */
export function Select({
  value,
  options,
  onChange,
  placeholder = 'Select…',
}: SelectProps) {
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

  return (
    <div className="custom-select" ref={rootRef}>
      <button
        type="button"
        className={`picker-toggle picker-toggle-chevron${value ? '' : ' picker-toggle-empty'}`}
        onClick={() => setOpen((v) => !v)}
      >
        {value || placeholder}
      </button>

      {open && (
        <div className="picker-popup picker-list">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`picker-option${option === value ? ' picker-option-selected' : ''}`}
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
