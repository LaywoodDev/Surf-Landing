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
              'For questions about the application, subscriptions and payments:',
              'По вопросам о приложении, подписках и платежах:'
            )}
          </p>
          <p>
            Email:{' '}
            <a href="mailto:surf-messanger@mail.ru">surf-messanger@mail.ru</a>
          </p>
        </section>

        <section>
          <h2>{t('Company Information', 'Сведения об исполнителе')}</h2>
          <p>{t('Full company details:', 'Полные реквизиты:')}</p>
          <p>
            {t('Kirill Evgenievich Pokochuro', 'Покочуро Кирилл Евгеньевич')}
            <br />
            {t(
              'Status: self-employed (payer of the Professional Income Tax)',
              'Статус: самозанятый (плательщик налога на профессиональный доход)'
            )}
            <br />
            {t('Taxpayer ID (INN): 540139406679', 'ИНН: 540139406679')}
            <br />
            {t(
              'Registered address: 13/2 Vitaliya Potylitsyna St., Apt. 90, Novosibirsk, Russia',
              'Адрес регистрации: г. Новосибирск, ул. Виталия Потылицына, д. 13/2, кв. 90'
            )}
          </p>
        </section>

        <section>
          <h2>{t('Payment Information', 'Платёжная информация')}</h2>
          <p>{t('Payments are processed via:', 'Платежи обрабатываются через:')}</p>
          <p>
            {t('Payment agent: LLC "NCO YooMoney"', 'Платёжный агент: ООО «НКО ЮМани»')}
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
          <p>{t('For questions about personal data processing:', 'По вопросам обработки персональных данных:')}</p>
          <p>
            Email:{' '}
            <a href="mailto:surf-messanger@mail.ru">surf-messanger@mail.ru</a>
          </p>
        </section>
      </article>
    </main>
  )
}
