import { useT } from '../context/LangContext'

export function PhoneShowcase() {
  const t = useT()

  return (
    <section className="phone-showcase" aria-label={t('App preview', 'Превью приложения')}>
      <div className="phone-card phone-card--beige">
        <img
          src="/Hero/phone-1.png"
          alt={t(
            'Surf call screen showing an active audio call',
            'Экран Surf с активным аудиозвонком'
          )}
          width="399"
          height="546"
        />
      </div>

      <div className="phone-card phone-card--gray">
        <img
          src="/Hero/phone-2.png"
          alt={t(
            'Surf upgrade to Pro screen held in hand',
            'Экран Surf с переходом на Pro в руке'
          )}
          width="468"
          height="534"
        />
      </div>
    </section>
  )
}
