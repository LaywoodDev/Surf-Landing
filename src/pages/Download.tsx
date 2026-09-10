import type { CSSProperties } from 'react'
import { useT } from '../context/LangContext'

// URLs
export const RUSTORE_URL = 'https://www.rustore.ru/catalog/app/ru.surf.messenger'
export const WEB_APP_URL = 'https://surf-app.xyz'

function DownloadTrayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v8.5" />
      <path d="m8.5 9.5 3.5 3.5 3.5-3.5" />
      <path d="M6 14v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13 13 0 0 1 4 9 13 13 0 0 1-4 9 13 13 0 0 1-4-9 13 13 0 0 1 4-9z" />
    </svg>
  )
}

export function Download() {
  const t = useT()

  return (
    <main className="download-page">
      <section className="download-hero">
        <div className="download-hero-text">
          <p className="download-eyebrow" data-reveal>
            {t('DOWNLOAD', 'СКАЧАТЬ')}
          </p>
          <h1
            className="download-title"
            data-reveal
            style={{ '--reveal-delay': '0.08s' } as CSSProperties}
          >
            {t('Surf for Android.', 'Surf для Android.')}
          </h1>
          <p
            className="download-text"
            data-reveal
            style={{ '--reveal-delay': '0.16s' } as CSSProperties}
          >
            {t(
              'Chats, files, audio calls and Opus — grab the Android app today, the rest of the platforms are catching up.',
              'Чаты, файлы, аудиозвонки и Opus — скачивайте приложение для Android уже сегодня, остальные платформы на подходе.'
            )}
          </p>

          <div
            className="download-badges"
            data-reveal
            style={{ '--reveal-delay': '0.24s' } as CSSProperties}
          >
            <a
              href={RUSTORE_URL}
              className="store-badge store-badge--dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="store-badge-icon" aria-hidden="true">
                <DownloadTrayIcon />
              </span>
              <span className="store-badge-text">
                <small>{t('Get it on', 'Загрузите в')}</small>
                <strong>RuStore</strong>
              </span>
            </a>
            <a
              href={WEB_APP_URL}
              className="store-badge store-badge--white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="store-badge-icon" aria-hidden="true">
                <GlobeIcon />
              </span>
              <span className="store-badge-text">
                <small>{t('Or use', 'Или используйте')}</small>
                <strong>{t('Web Version', 'Веб-версию')}</strong>
              </span>
            </a>
          </div>
        </div>

        <div
          className="download-hero-visual"
          data-reveal
          style={{ '--reveal-delay': '0.18s' } as CSSProperties}
        >
          <div className="download-phone-card">
            <img
              src="/Product/phone-android.png"
              srcSet="/Product/phone-android@2x.png 2x"
              alt={t('Surf for Android', 'Surf для Android')}
              width="213"
              height="369"
              className="download-phone-img"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
