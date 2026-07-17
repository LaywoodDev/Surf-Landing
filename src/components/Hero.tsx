export function Hero() {
  return (
    <section className="hero-section" id="home">
      <h1 className="hero-title">
        Messaging made{' '}
        <span className="highlight">
          simple
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
        </span>{' '}
        and freely with Surf.
      </h1>

      <p className="hero-subtitle">
        Chat, share files, make audio calls, and stay in sync across mobile and
        desktop — all in one clean app.
      </p>

      <div className="hero-cta">
        <a href="https://surf-app.xyz" className="hero-button">
          Get Started
        </a>

        <div className="hero-avatars">
          <div className="avatar avatar-1" aria-hidden="true">
            AS
          </div>
          <div className="avatar avatar-2" aria-hidden="true">
            MK
          </div>
          <div className="avatar avatar-3" aria-hidden="true">
            JL
          </div>
          <div className="avatar avatar-4" aria-hidden="true">
            +2
          </div>
        </div>
      </div>
    </section>
  )
}
