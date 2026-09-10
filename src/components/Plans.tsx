import { useRef, useState, type CSSProperties } from 'react'
import { useT } from '../context/LangContext'

interface Plan {
  name: string
  price: string
  tagline: string
  features: string[]
  button: string
  href?: string
  variant: string
}

function CheckIcon() {
  return (
    <span className="plan-check" aria-hidden="true">
      <svg
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.5L4.2 8.5L11 1.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function Plans() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activePlan, setActivePlan] = useState(0)
  const t = useT()

  const featuresUrl = 'https://surf-app.xyz/plans/features'
  const viewAllLabel = t('View all benefits', 'Посмотреть все преимущества')

  const plans: Plan[] = [
    {
      name: 'Pro',
      price: '349',
      tagline: t('Break down the boundaries', 'Сними все границы'),
      features: [
        t('Opus in Chats', 'Opus в чатах'),
        t('Custom Opus agents', 'Кастомные Opus-агенты'),
        t('Doubled Limits', 'Двойные лимиты'),
        t('Profile Badge', 'Значок в профиле'),
        t('Call recording and AI reports', 'Запись звонков и AI-отчёты'),
        t('AI Recorder', 'AI Recorder'),
        t('Appearance Customization', 'Кастомизация внешнего вида'),
      ],
      button: t('Upgrade', 'Перейти на Pro'),
      href: 'https://surf-app.xyz/plans',
      variant: 'pro',
    },
    {
      name: 'Pro+',
      price: '1,449',
      tagline: t('Uncompromised power and limits', 'Максимальная мощь без ограничений'),
      features: [
        t('Everything in PRO', 'Всё, что входит в PRO'),
        t('5× more usage', 'В 5 раз больше лимитов'),
        t('AI Image Generation', 'Генерация AI-изображений'),
        t('Expanded access to heavy models', 'Самые мощные AI-модели'),
        t('Advanced AI Tools', 'Продвинутые AI-инструменты'),
        t('Extended context for larger tasks', 'Расширенный контекст для больших задач'),
        t('Priority AI processing', 'Приоритетная обработка запросов'),
      ],
      button: t('Upgrade to Pro+', 'Перейти на Pro+'),
      href: 'https://surf-app.xyz/plans',
      variant: 'pro-plus',
    },
  ]

  const handleScroll = () => {
    const el = gridRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    if (max <= 0) return
    setActivePlan(Math.round((el.scrollLeft / max) * (plans.length - 1)))
  }

  const scrollToPlan = (index: number) => {
    const el = gridRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    el.scrollTo({
      left: (max * index) / (plans.length - 1),
      behavior: 'smooth',
    })
  }

  return (
    <section className="plans" id="plans">
      <div className="plans-header" data-reveal>
        <h2>{t('Plans', 'Тарифы')}</h2>
        <p>
          {t(
            'Simple, transparent pricing — no hidden fees, cancel anytime.',
            'Простые и прозрачные цены — без скрытых платежей, отмена в любой момент.'
          )}
        </p>
      </div>

      <div className="plans-grid" ref={gridRef} onScroll={handleScroll}>
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`plan-card plan-card--${plan.variant}`}
            data-reveal
            style={{ '--reveal-delay': `${index * 0.15}s` } as CSSProperties}
          >
            <h3 className="plan-name">{plan.name}</h3>

            <p className="plan-price">
              <span className="plan-currency">₽</span>
              <span className="plan-amount">{plan.price}</span>
            </p>

            <p className="plan-tagline">{plan.tagline}</p>

            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={featuresUrl}
              className="plan-toggle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{viewAllLabel}</span>
              <svg
                className="plan-toggle-chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {plan.href ? (
              <a href={plan.href} className="plan-button">
                {plan.button}
              </a>
            ) : (
              <button type="button" className="plan-button">
                {plan.button}
              </button>
            )}
          </article>
        ))}
      </div>

      <div className="plans-dots" aria-label={t('Choose plan', 'Выбрать тариф')}>
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            type="button"
            className={`plans-dot${index === activePlan ? ' active' : ''}`}
            aria-label={t('Go to plan', 'К тарифу') + ` ${plan.name}`}
            onClick={() => scrollToPlan(index)}
          />
        ))}
      </div>
    </section>
  )
}
