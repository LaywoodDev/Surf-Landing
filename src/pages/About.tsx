import type { CSSProperties } from 'react'
import { useT } from '../context/LangContext'

export function About() {
  const t = useT()

  const stats = [
    { value: '-', label: t('Active users', 'Активных пользователей') },
    { value: '-', label: t('Messages sent monthly', 'Сообщений в месяц') },
    { value: '-', label: t('Countries', 'Стран') },
    { value: '-', label: t('Average app rating', 'Средняя оценка приложения') },
  ]

  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-eyebrow" data-reveal>
          {t('About Surf', 'О Surf')}
        </p>
        <h1 className="about-title" data-reveal style={{ '--reveal-delay': '0.1s' } as CSSProperties}>
          {t(
            'We believe messaging should be simple, fast and free.',
            'Мы верим, что общение должно быть простым, быстрым и свободным.'
          )}
        </h1>
        <p className="about-text" data-reveal style={{ '--reveal-delay': '0.2s' } as CSSProperties}>
          {t(
            "Surf started with a simple idea: staying in touch with people you care about shouldn't require a dozen apps, endless settings and hidden fees. One clean app — for chats, calls and files.",
            'Surf начался с простой идеи: чтобы оставаться на связи с близкими, не нужны десяток приложений, бесконечные настройки и скрытые платежи. Одно удобное приложение — для чатов, звонков и файлов.'
          )}
        </p>
        <p className="about-text" data-reveal style={{ '--reveal-delay': '0.3s' } as CSSProperties}>
          {t(
            'Today we build Surf for millions of people around the world, keeping privacy, speed and thoughtful design at the core of everything we ship — on mobile and desktop, always in sync.',
            'Сегодня мы делаем Surf для миллионов людей по всему миру, и в основе всего — приватность, скорость и продуманный дизайн. На телефоне и компьютере, всегда в синхронизации.'
          )}
        </p>
      </section>

      <section className="about-stats" aria-label={t('Surf in numbers', 'Surf в цифрах')}>
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="stat-card"
            data-reveal
            style={{ '--reveal-delay': `${index * 0.12}s` } as CSSProperties}
          >
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
