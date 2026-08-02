import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { docsChapters, docsGroups, type DocChapter } from '../data/docs'

function Chapter({ chapter }: { chapter: DocChapter }) {
  return (
    <section id={chapter.id} className="docs-chapter">
      <header className="docs-chapter-header">
        <div className="docs-chapter-meta">
          <span>{chapter.group}</span>
        </div>
        <h2>{chapter.title}</h2>
        <p>{chapter.summary}</p>
      </header>

      {chapter.purpose && (
        <div className="docs-purpose">
          <strong>Для чего нужна функция</strong>
          <p>{chapter.purpose}</p>
        </div>
      )}

      {(chapter.desktop || chapter.mobile) && (
        <div className="docs-platforms">
          {chapter.desktop && (
            <div className="docs-platform">
              <h3>На компьютере</h3>
              <ol>
                {chapter.desktop.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          )}
          {chapter.mobile && (
            <div className="docs-platform">
              <h3>На телефоне</h3>
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
          <h3>Если что-то не работает</h3>
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
  const normalizedQuery = query.trim().toLocaleLowerCase('ru')

  const results = useMemo(() => {
    if (!normalizedQuery) return []
    return docsChapters.filter((chapter) => {
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
        .toLocaleLowerCase('ru')
        .includes(normalizedQuery)
    })
  }, [normalizedQuery])

  return (
    <main className="docs-page">
      <header className="docs-hero" data-reveal>
        <p className="docs-eyebrow">Документация Surf</p>
        <h1>Всё необходимое для работы с Surf</h1>
        <p className="docs-hero-text">
          Инструкции для новых и опытных пользователей, описание возможностей
          продукта и ответы на частые вопросы.
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
            placeholder="Найти функцию или инструкцию"
            aria-label="Поиск по документации"
          />
        </div>

        {normalizedQuery && (
          <div className="docs-search-results" aria-live="polite">
            {results.length > 0 ? (
              <>
                <p>Найдено разделов: {results.length}</p>
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
              <p>По этому запросу ничего не найдено. Попробуйте другое слово.</p>
            )}
          </div>
        )}
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar" aria-label="Разделы документации">
          <div className="docs-sidebar-inner">
            <p className="docs-sidebar-title">Содержание</p>
            {docsGroups.map((group) => (
              <div key={group} className="docs-nav-group">
                <p>{group}</p>
                <nav>
                  {docsChapters.filter((chapter) => chapter.group === group).map((chapter) => (
                    <a key={chapter.id} href={`#${chapter.id}`}>{chapter.title}</a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        <article className="docs-content">
          {docsChapters.map((chapter) => <Chapter key={chapter.id} chapter={chapter} />)}

          <section className="docs-help">
            <div>
              <p className="docs-section-label">Поддержка</p>
              <h2>Не нашли ответ?</h2>
              <p>Опишите проблему, устройство и последовательность действий. Никому не отправляйте пароль или код восстановления.</p>
            </div>
            <Link to="/contacts">Связаться с поддержкой</Link>
          </section>
        </article>
      </div>
    </main>
  )
}
