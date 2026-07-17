interface Plan {
  name: string
  price: string
  tagline: string
  features: string[]
  button: string
  href?: string
  variant: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '0',
    tagline: 'Use the basic features',
    features: ['Conversations', 'Privacy Customization', 'Basic AI Tools'],
    button: 'Use Surf for Free',
    variant: 'free',
  },
  {
    name: 'Pro',
    price: '150',
    tagline: 'Break down the boundaries',
    features: [
      'Opus in Chats',
      'Doubled Limits',
      'Profile Badge',
      'Advanced AI Tools',
      'Voice mode',
      'Appearance Customization',
    ],
    button: 'Upgrade',
    href: 'https://surf-app.xyz/plans',
    variant: 'pro',
  },
]

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
  return (
    <section className="plans" id="plans">
      <div className="plans-header">
        <h2>Plans</h2>
        <p>Simple, transparent pricing — no hidden fees, cancel anytime.</p>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={`plan-card plan-card--${plan.variant}`}>
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
    </section>
  )
}
