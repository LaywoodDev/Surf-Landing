import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang, useT } from '../context/LangContext'
import { docsChapters, docsGroups, type DocChapter, type DocGroup } from '../data/docs'
import { docsChaptersEn } from '../data/docs.en'

function useGroupLabels(): Record<DocGroup, string> {
  const t = useT()
  return {
    start: t('Start', 'Старт'),
    communication: t('Communication', 'Общение'),
    features: t('Features', 'Возможности'),
    settings: t('Settings', 'Настройки'),
    help: t('Help', 'Справка'),
  }
}

function Chapter({ chapter }: { chapter: DocChapter }) {
  const t = useT()
  const groupLabels = useGroupLabels()

  return (
    <section id={chapter.id} className="docs-chapter">
      <header className="docs-chapter-header">
        <div className="docs-chapter-meta">
          <span>{groupLabels[chapter.group]}</span>
        </div>
        <h2>{chapter.title}</h2>
        <p>{chapter.summary}</p>
      </header>

      {chapter.purpose && (
        <div className="docs-purpose">
          <strong>{t('What this feature is for', 'Для чего нужна функция')}</strong>
          <p>{chapter.purpose}</p>
        </div>
      )}

      {(chapter.desktop || chapter.mobile) && (
        <div className="docs-platforms">
          {chapter.desktop && (
            <div className="docs-platform">
              <h3>{t('On desktop', 'На компьютере')}</h3>
              <ol>
                {chapter.desktop.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          )}
          {chapter.mobile && (
            <div className="docs-platform">
              <h3>{t('On mobile', 'На телефоне')}</h3>
              <ol>
                {chapter.mobile.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          )}
        </div>
      )}

      {chapter.details?.map((detail) => (
        <div key={detail.title} className="docs-detail">
          <h3>{detail.title}</h3>
          {detail.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {detail.bullets && (
            <ul>
              {detail.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
        </div>
      ))}

      {chapter.problems && (
        <div className="docs-troubles">
          <h3>{t('If something is not working', 'Если что-то не работает')}</h3>
          {chapter.problems.map((problem) => (
            <details key={problem.issue}>
              <summary>{problem.issue}</summary>
              <p>{problem.solution}</p>
            </details>
          ))}
        </div>
      )}
    </section>
  )
}

export function Docs() {
  const [query, setQuery] = useState('')
  const { lang } = useLang()
  const t = useT()
  const groupLabels = useGroupLabels()
  const chapters = lang === 'ru' ? docsChapters : docsChaptersEn
  const normalizedQuery = query.trim().toLocaleLowerCase(lang)

  const results = useMemo(() => {
    if (!normalizedQuery) return []
    return chapters.filter((chapter) => {
      const searchableContent = [
        chapter.title,
        chapter.summary,
        chapter.purpose,
        chapter.desktop,
        chapter.mobile,
        chapter.details,
        chapter.problems,
      ]

      return JSON.stringify(searchableContent)
        .toLocaleLowerCase(lang)
        .includes(normalizedQuery)
    })
  }, [chapters, lang, normalizedQuery])

  return (
    <main className="docs-page">
      <header className="docs-hero" data-reveal>
        <p className="docs-eyebrow">{t('Surf documentation', 'Документация Surf')}</p>
        <h1>{t('Everything you need to use Surf', 'Всё необходимое для работы с Surf')}</h1>
        <p className="docs-hero-text">
          {t(
            'Guides for new and experienced users, product feature explanations, and answers to common questions.',
            'Инструкции для новых и опытных пользователей, описание возможностей продукта и ответы на частые вопросы.'
          )}
        </p>

        <div className="docs-search-wrap">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('Find a feature or guide', 'Найти функцию или инструкцию')}
            aria-label={t('Search documentation', 'Поиск по документации')}
          />
        </div>

        {normalizedQuery && (
          <div className="docs-search-results" aria-live="polite">
            {results.length > 0 ? (
              <>
                <p>{t('Sections found', 'Найдено разделов')}: {results.length}</p>
                <div>
                  {results.map((chapter) => (
                    <a key={chapter.id} href={`#${chapter.id}`} onClick={() => setQuery('')}>
                      <span>{chapter.title}</span>
                      <small>{chapter.summary}</small>
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <p>{t(
                'Nothing was found for this query. Try another term.',
                'По этому запросу ничего не найдено. Попробуйте другое слово.'
              )}</p>
            )}
          </div>
        )}
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar" aria-label={t('Documentation sections', 'Разделы документации')}>
          <div className="docs-sidebar-inner">
            <p className="docs-sidebar-title">{t('Contents', 'Содержание')}</p>
            {docsGroups.map((group) => (
              <div key={group} className="docs-nav-group">
                <p>{groupLabels[group]}</p>
                <nav>
                  {chapters.filter((chapter) => chapter.group === group).map((chapter) => (
                    <a key={chapter.id} href={`#${chapter.id}`}>{chapter.title}</a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        <article className="docs-content">
          {chapters.map((chapter) => <Chapter key={chapter.id} chapter={chapter} />)}

          <section className="docs-help">
            <div>
              <p className="docs-section-label">{t('Support', 'Поддержка')}</p>
              <h2>{t('Still need help?', 'Не нашли ответ?')}</h2>
              <p>{t(
                'Describe the problem, your device, and the steps that caused it. Never send anyone your password or recovery code.',
                'Опишите проблему, устройство и последовательность действий. Никому не отправляйте пароль или код восстановления.'
              )}</p>
            </div>
            <Link to="/contacts">{t('Contact support', 'Связаться с поддержкой')}</Link>
          </section>
        </article>
      </div>
    </main>
  )
}
