import { useLang, useT } from '../context/LangContext'

export function Hero() {
  const t = useT()
  const { lang } = useLang()

  const underline = (
    <svg
      className="highlight-underline"
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8 C 20 2, 40 2, 60 6 S 100 10, 118 4"
        stroke="#4f8cff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )

  return (
    <section className="hero-section" id="home">
      <h1 className="hero-title">
        {lang === 'ru' ? (
          <>
            Общение —{' '}
            <span className="highlight">
              просто
              {underline}
            </span>{' '}
            и свободно, с Surf.
          </>
        ) : (
          <>
            Messaging made{' '}
            <span className="highlight">
              simple
              {underline}
            </span>{' '}
            and freely with Surf.
          </>
        )}
      </h1>

      <p className="hero-subtitle">
        {t(
          'Chat, share files, make audio calls, and stay in sync across mobile and desktop — all in one clean app.',
          'Переписка, файлы, аудиозвонки и синхронизация между телефоном и компьютером — всё в одном удобном приложении.'
        )}
      </p>

      <div className="hero-cta">
        <a href="https://surf-app.xyz" className="hero-button">
          {t('Get Started', 'Начать')}
        </a>

        <div className="hero-avatars">
          <div className="avatar" aria-hidden="true">
            <img src="/avatars/avatar-1.jpg" alt="" width="44" height="44" />
          </div>
          <div className="avatar" aria-hidden="true">
            <img src="/avatars/avatar-2.jpg" alt="" width="44" height="44" />
          </div>
          <div className="avatar" aria-hidden="true">
            <img src="/avatars/avatar-3.jpg" alt="" width="44" height="44" />
          </div>
          <div className="avatar avatar-more" aria-hidden="true">
            +2
          </div>
        </div>
      </div>
    </section>
  )
}
