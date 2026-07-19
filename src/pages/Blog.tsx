import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useT } from '../context/LangContext'

export function Blog() {
  const { posts } = useContent()
  const t = useT()

  return (
    <main className="blog-page">
      <div className="blog-header" data-reveal>
        <h1>{t('Blog', 'Блог')}</h1>
        <p>{t('News, guides and stories from the Surf team.', 'Новости, гайды и истории от команды Surf.')}</p>
      </div>

      {posts.length === 0 && (
        <div className="empty-state" data-reveal>
          <div className="empty-state-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </div>
          <h2>{t('No posts yet', 'Постов пока нет')}</h2>
          <p>
            {t(
              'We are writing the first stories right now — check back soon for news and guides from the Surf team.',
              'Мы прямо сейчас пишем первые истории — загляните позже за новостями и гайдами от команды Surf.'
            )}
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="blog-grid">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card"
              data-reveal
              style={
                { '--reveal-delay': `${(index % 3) * 0.12}s` } as CSSProperties
              }
            >
              <img
                className="blog-card-cover"
                src={post.cover}
                alt=""
                width="1200"
                height="675"
                loading="lazy"
              />
              <div className="blog-card-body">
                <p className="blog-card-meta">
                  <span className="blog-card-tag">{post.tag}</span>
                  <span className="blog-card-date">{post.date}</span>
                </p>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
