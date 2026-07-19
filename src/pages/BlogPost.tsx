import type { CSSProperties } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useT } from '../context/LangContext'
import { Markdown } from '../components/Markdown'

export function BlogPost() {
  const { slug } = useParams()
  const { posts } = useContent()
  const t = useT()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main className="post-page">
      <article className="post-article">
        <Link to="/blog" className="post-back" data-reveal>
          ← {t('All posts', 'Все посты')}
        </Link>

        <p
          className="post-meta"
          data-reveal
          style={{ '--reveal-delay': '0.08s' } as CSSProperties}
        >
          <span className="blog-card-tag">{post.tag}</span>
          <span className="blog-card-date">{post.date}</span>
        </p>

        <h1
          className="post-title"
          data-reveal
          style={{ '--reveal-delay': '0.16s' } as CSSProperties}
        >
          {post.title}
        </h1>

        <img
          className="post-cover"
          src={post.cover}
          alt=""
          width="1200"
          height="675"
          data-reveal
          style={{ '--reveal-delay': '0.24s' } as CSSProperties}
        />

        <div className="post-content">
          <Markdown text={post.content.join('\n\n')} />
        </div>
      </article>
    </main>
  )
}
