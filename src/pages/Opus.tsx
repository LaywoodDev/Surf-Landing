import type { CSSProperties, ReactNode } from 'react'
import { useLang, useT } from '../context/LangContext'

const icons: ReactNode[] = [
  <svg key="icon-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>,
  <svg key="icon-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4z" />
      </svg>,
  <svg key="icon-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>,
  <svg key="icon-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>,
  <svg key="icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
        <path d="M12 18v4" />
      </svg>,
  <svg key="icon-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>,
]

export function Opus() {
  const t = useT()
  const { lang } = useLang()

  const features = [
    {
      icon: icons[0],
      title: t('Chat one-on-one', 'Личный чат'),
      text: t(
        'Ask anything in a personal chat — answers, drafts, translations and thread summaries, instantly and always in context.',
        'Спрашивайте что угодно в личном чате — ответы, черновики, переводы и пересказы веток, мгновенно и всегда в контексте.'
      ),
    },
    {
      icon: icons[1],
      title: t('Messages on your behalf', 'Сообщения от вашего имени'),
      text: t(
        'Tell Opus what to send and to whom — it delivers your message to the right person at the right time.',
        'Скажите Opus, что и кому отправить — он доставит сообщение нужному человеку в нужное время.'
      ),
    },
    {
      icon: icons[2],
      title: t('Reminders', 'Напоминания'),
      text: t(
        'Ask Opus to remind you about anything — a meeting, a call, a birthday — and it pings you right on time.',
        'Попросите Opus напомнить о чём угодно — встрече, звонке, дне рождения — и он напомнит точно в срок.'
      ),
    },
    {
      icon: icons[3],
      title: t('Call @opus in any chat', 'Зовите @opus в любой чат'),
      text: t(
        'Mention @opus in a group conversation and it jumps right in: settles debates, summarizes long threads, finds answers.',
        'Упомяните @opus в групповом чате — и он тут же включится: рассудит спор, перескажет длинную ветку, найдёт ответ.'
      ),
      pro: true,
    },
    {
      icon: icons[4],
      title: t('Voice mode', 'Голосовой режим'),
      text: t(
        'Talk to Opus hands-free: dictate messages, ask questions aloud and get instant spoken-ready answers.',
        'Общайтесь с Opus без рук: диктуйте сообщения, задавайте вопросы вслух и получайте мгновенные ответы.'
      ),
      pro: true,
    },
    {
      icon: icons[5],
      title: t('Files and documents', 'Файлы и документы'),
      text: t(
        'Drop a PDF, document or spreadsheet into the chat — Opus reads it, summarizes and answers your questions.',
        'Отправьте PDF, документ или таблицу в чат — Opus прочитает, перескажет и ответит на ваши вопросы.'
      ),
      pro: true,
    },
  ]

  return (
    <main className="opus-page">
      <section className="opus-hero">
        <p className="opus-eyebrow" data-reveal>
          {t('Meet Opus', 'Знакомьтесь: Opus')}
        </p>
        <h1
          className="opus-title"
          data-reveal
          style={{ '--reveal-delay': '0.1s' } as CSSProperties}
        >
          {t(
            'Your AI assistant, right inside Surf.',
            'Ваш AI-ассистент — прямо внутри Surf.'
          )}
        </h1>
        <p
          className="opus-text"
          data-reveal
          style={{ '--reveal-delay': '0.2s' } as CSSProperties}
        >
          {lang === 'ru' ? (
            <>
              Общайтесь с Opus один на один, зовите его в любой разговор простым{' '}
              <strong>@opus</strong> или поручите доставить сообщение за вас — без
              лишних приложений и переключений вкладок.
            </>
          ) : (
            <>
              Chat with Opus one-on-one, call it into any conversation with a
              simple <strong>@opus</strong> mention, or let it deliver messages for
              you — no extra apps, no switching tabs.
            </>
          )}
        </p>

        <div
          className="opus-banner"
          data-reveal
          style={{ '--reveal-delay': '0.3s' } as CSSProperties}
        >
          <img
            src="/opus/banner-dark.png"
            alt="Opus logo"
            width="640"
            height="360"
          />
        </div>
      </section>

      <section className="opus-features" aria-label={t('What Opus can do', 'Что умеет Opus')}>
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="opus-card"
            data-reveal
            style={{ '--reveal-delay': `${index * 0.12}s` } as CSSProperties}
          >
            {feature.pro && <span className="opus-card-badge">Pro</span>}
            <div className="opus-card-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <h2 className="opus-card-title">{feature.title}</h2>
            <p className="opus-card-text">{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
