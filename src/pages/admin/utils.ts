const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const TRANSLIT: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
  з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
  п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
  ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu',
  я: 'ya',
}

/** 'Привет, Surf!' → 'privet-surf' */
export function slugify(text: string): string {
  const transliterated = text
    .toLowerCase()
    .split('')
    .map((char) => TRANSLIT[char] ?? char)
    .join('')

  return transliterated
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Добавляет суффикс -2, -3... если slug уже занят */
export function uniqueSlug(base: string, taken: string[]): string {
  const fallback = base || 'post'
  if (!taken.includes(fallback)) return fallback

  let counter = 2
  while (taken.includes(`${fallback}-${counter}`)) counter += 1
  return `${fallback}-${counter}`
}

/** '2026-07-14' (input type="date") → '14 Jul 2026' */
export function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  if (!year || !month || !day) return ''
  return `${day} ${MONTHS[month - 1]} ${year}`
}

/** '14 Jul 2026' → '2026-07-14'; '' если не распарсилось */
export function parseDisplayDate(display: string): string {
  const match = display.match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/)
  if (!match) return ''

  const monthIndex = MONTHS.indexOf(match[2])
  if (monthIndex === -1) return ''

  const day = match[1].padStart(2, '0')
  const month = String(monthIndex + 1).padStart(2, '0')
  return `${match[3]}-${month}-${day}`
}

/** '2026-08-15' → { day: '15', month: 'Aug' } */
export function isoToDayMonth(isoDate: string): { day: string; month: string } {
  const [, month, day] = isoDate.split('-').map(Number)
  return { day: String(day), month: MONTHS[month - 1] ?? '' }
}

/** { day: '15', month: 'Aug' } → '2026-08-15' (год подставляется текущий, т.к. в EventItem его нет) */
export function dayMonthToIso(day: string, month: string): string {
  const monthIndex = MONTHS.indexOf(month)
  if (monthIndex === -1 || !day) return ''

  const year = new Date().getFullYear()
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${day.padStart(2, '0')}`
}
