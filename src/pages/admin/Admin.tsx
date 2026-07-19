import { Link } from 'react-router-dom'
import { useContent, AuthError } from '../../context/ContentContext'
import { logoutAdmin } from './auth'

/** При истёкшей сессии перезагружаемся — AdminGate покажет форму входа */
function handleMutationError(err: unknown) {
  if (err instanceof AuthError) {
    window.location.reload()
  } else {
    alert(err instanceof Error ? err.message : 'Failed to save changes')
  }
}

export function Admin() {
  const { posts, events, deletePost, deleteEvent } = useContent()

  const handleDeletePost = async (slug: string, title: string) => {
    if (window.confirm(`Delete post "${title}"?`)) {
      try {
        await deletePost(slug)
      } catch (err) {
        handleMutationError(err)
      }
    }
  }

  const handleDeleteEvent = async (id: string, title: string) => {
    if (window.confirm(`Delete event "${title}"?`)) {
      try {
        await deleteEvent(id)
      } catch (err) {
        handleMutationError(err)
      }
    }
  }

  const handleLogout = async () => {
    await logoutAdmin()
    window.location.reload() // AdminGate покажет форму входа
  }

  return (
    <main className="admin-page">
      <div className="admin-header">
        <div className="admin-header-row">
          <h1>Admin</h1>
          <button type="button" className="admin-button" onClick={handleLogout}>
            Sign out
          </button>
        </div>
        <p>
          Manage blog posts and events. Changes are saved on the server
          and are visible to all site visitors.
        </p>
      </div>

      <section className="admin-section">
        <div className="admin-section-header">
          <h2>Blog</h2>
          <Link to="/admin/blog/new" className="admin-button admin-button-primary">
            + New post
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="admin-empty">No posts yet.</p>
        ) : (
          <ul className="admin-list">
            {posts.map((post) => (
              <li key={post.slug} className="admin-list-item">
                <img
                  className="admin-list-thumb"
                  src={post.cover}
                  alt=""
                  width="96"
                  height="54"
                />
                <div className="admin-list-body">
                  <span className="admin-list-title">{post.title}</span>
                  <span className="admin-list-meta">
                    {post.tag} · {post.date} · /blog/{post.slug}
                  </span>
                </div>
                <div className="admin-list-actions">
                  <Link
                    to={`/admin/blog/${post.slug}/edit`}
                    className="admin-button"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="admin-button admin-button-danger"
                    onClick={() => handleDeletePost(post.slug, post.title)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="admin-section">
        <div className="admin-section-header">
          <h2>Events</h2>
          <Link
            to="/admin/events/new"
            className="admin-button admin-button-primary"
          >
            + New event
          </Link>
        </div>

        {events.length === 0 ? (
          <p className="admin-empty">No events yet.</p>
        ) : (
          <ul className="admin-list">
            {events.map((event) => (
              <li key={event.id} className="admin-list-item">
                <div className="admin-event-date">
                  <span className="admin-event-day">{event.day}</span>
                  <span className="admin-event-month">{event.month}</span>
                </div>
                <div className="admin-list-body">
                  <span className="admin-list-title">{event.title}</span>
                  <span className="admin-list-meta">
                    {event.format} · {event.time} · {event.location} ·{' '}
                    {event.upcoming ? 'upcoming' : 'past'}
                  </span>
                </div>
                <div className="admin-list-actions">
                  <Link
                    to={`/admin/events/${event.id}/edit`}
                    className="admin-button"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="admin-button admin-button-danger"
                    onClick={() => handleDeleteEvent(event.id, event.title)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

    </main>
  )
}
