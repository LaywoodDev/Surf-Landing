import type { CSSProperties } from 'react'
import { useContent } from '../context/ContentContext'
import { useT } from '../context/LangContext'
import { Markdown } from '../components/Markdown'

const REGISTER_URL = 'mailto:surf-messanger@mail.ru'

export function Events() {
  const { events } = useContent()
  const t = useT()
  const upcoming = events.filter((event) => event.upcoming)
  const past = events.filter((event) => !event.upcoming)
  const [featured, ...rest] = upcoming

  return (
    <main className="events-page">
      <header className="events-hero" data-reveal>
        <p className="events-hero-label">Surf Events</p>
        <h1>{t('Meet the team, live', 'Встречайте команду вживую')}</h1>
        <p className="events-hero-subtitle">
          {t(
            'Meetups, streams and webinars where we show what we are building and answer your questions in person.',
            'Митапы, стримы и вебинары, где мы показываем, что строим, и отвечаем на ваши вопросы вживую.'
          )}
        </p>
      </header>

      {upcoming.length === 0 && (
        <div className="empty-state events-empty" data-reveal>
          <div className="empty-state-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
            </svg>
          </div>
          <h2>No upcoming events</h2>
          <p>
            Nothing is scheduled right now — new meetups and streams are on
            the way. Leave us your email below and we will let you know first.
          </p>
        </div>
      )}

      {featured && (
        <section className="event-featured" data-reveal>
          <div className="event-featured-date">
            <span className="event-featured-day">{featured.day}</span>
            <span className="event-featured-month">{featured.month}</span>
            <span className="event-featured-time">{featured.time}</span>
          </div>

          <div className="event-featured-body">
            <div className="event-tags">
              <span className="event-tag event-tag-accent">
                {t('Next event', 'Ближайший ивент')}
              </span>
              <span className="event-tag">{featured.format}</span>
              <span className="event-tag">{featured.location}</span>
            </div>
            <h2>{featured.title}</h2>
            <div className="event-featured-description">
              <Markdown text={featured.description} />
            </div>
            <a className="event-register" href={REGISTER_URL}>
              {t('Go', 'Пойду')}
            </a>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="events-section">
          <h2 className="events-section-title" data-reveal>
            {t('Coming up', 'Скоро')}
          </h2>
          <div className="events-timeline">
            {rest.map((event, index) => (
              <article
                key={event.id}
                className="event-row"
                data-reveal
                style={
                  { '--reveal-delay': `${index * 0.1}s` } as CSSProperties
                }
              >
                <div className="event-row-date">
                  <span className="event-row-day">{event.day}</span>
                  <span className="event-row-month">{event.month}</span>
                </div>
                <div className="event-row-body">
                  <div className="event-tags">
                    <span className="event-tag">{event.format}</span>
                    <span className="event-tag">
                      {event.time} · {event.location}
                    </span>
                  </div>
                  <h3>{event.title}</h3>
                  <div className="event-row-description">
                    <Markdown text={event.description} />
                  </div>
                </div>
                <a className="event-row-register" href={REGISTER_URL}>
                  {t('Go', 'Пойду')}
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className="events-section">
          <h2 className="events-section-title" data-reveal>
            {t('Past events', 'Прошедшие ивенты')}
          </h2>
          <ul className="events-past">
            {past.map((event, index) => (
              <li
                key={event.id}
                data-reveal
                style={
                  { '--reveal-delay': `${index * 0.1}s` } as CSSProperties
                }
              >
                <span className="event-past-date">
                  {event.day} {event.month}
                </span>
                <span className="event-past-title">{event.title}</span>
                <span className="event-past-format">{event.format}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="events-cta" data-reveal>
        <h2>{t("Don't miss the next one", 'Не пропустите следующий')}</h2>
        <p>
          {t(
            'Want to hear about future meetups and streams first? Drop us a line and we will add you to the announcements list.',
            'Хотите первыми узнавать о будущих митапах и стримах? Напишите нам — добавим вас в список анонсов.'
          )}
        </p>
        <a className="event-register" href={REGISTER_URL}>
          {t('Get notified', 'Получать анонсы')}
        </a>
      </section>
    </main>
  )
}
