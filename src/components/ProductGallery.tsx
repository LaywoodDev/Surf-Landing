import type { CSSProperties } from 'react'
import { useT } from '../context/LangContext'

export function ProductGallery() {
  const t = useT()

  const phones = [
    {
      src: '/Product/phone%201.png',
      alt: t('Surf chat list screen', 'Экран Surf со списком чатов'),
    },
    {
      src: '/Product/phone%202.png',
      alt: t('Surf audio call screen', 'Экран Surf с аудиозвонком'),
    },
    {
      src: '/Product/phone%203.png',
      alt: t('Surf sign up screen', 'Экран регистрации Surf'),
    },
    {
      src: '/Product/phone%204.png',
      alt: t('Surf Upgrade to Pro screen', 'Экран Surf с переходом на Pro'),
    },
  ]

  return (
    <section className="product-gallery" id="product">
      <div className="product-header" data-reveal>
        <h2>{t('Product', 'Продукт')}</h2>
        <p>
          {t(
            'Everything you need to stay connected, organized, and productive in one place.',
            'Всё, чтобы оставаться на связи, быть организованным и продуктивным — в одном месте.'
          )}
        </p>
      </div>

      <div className="product-phones">
        {phones.map((phone, index) => (
          <div
            key={phone.src}
            className="product-phone"
            data-reveal
            style={{ '--reveal-delay': `${index * 0.12}s` } as CSSProperties}
          >
            <img src={phone.src} alt={phone.alt} width="306" height="631" />
          </div>
        ))}
      </div>
    </section>
  )
}
