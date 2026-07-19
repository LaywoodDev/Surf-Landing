import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { posts as seedPosts } from '../data/posts'
import type { Post } from '../data/posts'
import { events as seedEvents } from '../data/events'
import type { EventItem } from '../data/events'

/** Сессия истекла или её нет — AdminGate покажет форму входа после reload */
export class AuthError extends Error {}

interface ContentState {
  posts: Post[]
  events: EventItem[]
}

interface ContentContextValue extends ContentState {
  addPost: (post: Post) => Promise<void>
  updatePost: (slug: string, post: Post) => Promise<void>
  deletePost: (slug: string) => Promise<void>
  addEvent: (event: EventItem) => Promise<void>
  updateEvent: (id: string, event: EventItem) => Promise<void>
  deleteEvent: (id: string) => Promise<void>
}

const ContentContext = createContext<ContentContextValue | null>(null)

async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (res.status === 401) throw new AuthError('unauthorized')
  if (!res.ok) {
    const data = await res.json().catch(() => null)
    throw new Error(data?.error || `Ошибка сервера (${res.status})`)
  }
  return res.json() as Promise<T>
}

export function ContentProvider({ children }: { children: ReactNode }) {
  // Мгновенный первый рендер из сидов, затем подменяем данными с сервера.
  // Если API недоступен (статический хостинг) — остаёмся на сидах read-only.
  const [state, setState] = useState<ContentState>({
    posts: seedPosts,
    events: seedEvents,
  })

  useEffect(() => {
    fetch('/api/content')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (Array.isArray(data.posts) && Array.isArray(data.events)) {
          setState({ posts: data.posts, events: data.events })
        }
      })
      .catch(() => {})
  }, [])

  const value: ContentContextValue = {
    posts: state.posts,
    events: state.events,

    addPost: async (post) => {
      await api('/api/admin/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      })
      setState((s) => ({ ...s, posts: [post, ...s.posts] }))
    },

    updatePost: async (slug, post) => {
      await api(`/api/admin/posts/${encodeURIComponent(slug)}`, {
        method: 'PUT',
        body: JSON.stringify(post),
      })
      setState((s) => ({
        ...s,
        posts: s.posts.map((p) => (p.slug === slug ? post : p)),
      }))
    },

    deletePost: async (slug) => {
      await api(`/api/admin/posts/${encodeURIComponent(slug)}`, {
        method: 'DELETE',
      })
      setState((s) => ({
        ...s,
        posts: s.posts.filter((p) => p.slug !== slug),
      }))
    },

    addEvent: async (event) => {
      await api('/api/admin/events', {
        method: 'POST',
        body: JSON.stringify(event),
      })
      setState((s) => ({ ...s, events: [event, ...s.events] }))
    },

    updateEvent: async (id, event) => {
      await api(`/api/admin/events/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify(event),
      })
      setState((s) => ({
        ...s,
        events: s.events.map((e) => (e.id === id ? event : e)),
      }))
    },

    deleteEvent: async (id) => {
      await api(`/api/admin/events/${encodeURIComponent(id)}`, {
        method: 'DELETE',
      })
      setState((s) => ({
        ...s,
        events: s.events.filter((e) => e.id !== id),
      }))
    },
  }

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  )
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext)
  if (!ctx) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return ctx
}
