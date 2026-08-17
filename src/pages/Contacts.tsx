import { useT } from '../context/LangContext'

export function Contacts() {
  const t = useT()

  return (
    <main className="legal-page">
      <article className="legal-article">
        <h1 className="legal-title">{t('Contacts and Requisites', 'Контакты и реквизиты')}</h1>

        <section>
          <h2>{t('Support', 'Поддержка')}</h2>
          <p>
            {t(
              'For questions about the app, Pro subscriptions, Marketplace orders, refunds, and payments:',
              'По вопросам о приложении, подписках Pro, заказах в Marketplace, возвратах и платежах:'
            )}
          </p>
          <p>
            Email:{' '}
            <a href="mailto:surf-messanger@mail.ru">surf-messanger@mail.ru</a>
          </p>
        </section>

        <section>
          <h2>{t('Company Information', 'Сведения об исполнителе')}</h2>
          <p>{t('Provider details:', 'Реквизиты исполнителя:')}</p>
          <p>
            {t('Pokochuro Kirill Evgenyevich', 'Покочуро Кирилл Евгеньевич')}
            <br />
            {t(
              'Status: Self-employed (professional income tax payer)',
              'Статус: самозанятый (плательщик налога на профессиональный доход)'
            )}
            <br />
            {t('TIN (INN): 540139406679', 'ИНН: 540139406679')}
            <br />
            {t(
              'Registered address: Novosibirsk, 13/2 Vitaliya Potylitsina St., apt. 90, Russia',
              'Адрес регистрации: г. Новосибирск, ул. Виталия Потылицына, д. 13/2, кв. 90, Россия'
            )}
          </p>
        </section>

        <section>
          <h2>{t('Payment Information', 'Платёжная информация')}</h2>
          <p>{t('Payments are processed through:', 'Платежи обрабатываются через:')}</p>
          <p>
            {t(
              'Payment Agent: NCO YooMoney LLC (ООО «НКО «ЮМани»)',
              'Платёжный агент: ООО «НКО «ЮМани»'
            )}
            <br />
            {t('License: No. 3510-K', 'Лицензия: № 3510-К')}
            <br />
            Website:{' '}
            <a
              href="https://yookassa.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              yookassa.ru
            </a>
          </p>
        </section>

        <section>
          <h2>{t('Data Protection', 'Защита данных')}</h2>
          <p>
            {t(
              'For questions regarding personal data processing:',
              'По вопросам обработки персональных данных:'
            )}
          </p>
          <p>
            Email:{' '}
            <a href="mailto:surf-messanger@mail.ru">surf-messanger@mail.ru</a>
          </p>
        </section>
      </article>
    </main>
  )
}
