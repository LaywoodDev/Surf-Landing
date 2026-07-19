import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Outlet } from 'react-router-dom'
import { checkAdmin, loginAdmin } from './auth'

type AuthState = 'checking' | 'authed' | 'anon'

/** Обёртка над /admin-роутами: без серверной сессии показывает форму входа */
export function AdminGate() {
  const [auth, setAuth] = useState<AuthState>('checking')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  useEffect(() => {
    // Кука сессии могла пережить перезапуск браузера — проверяем на сервере
    checkAdmin().then((ok) => setAuth(ok ? 'authed' : 'anon'))
  }, [])

  if (auth === 'checking') {
    return (
      <main className="admin-page">
        <div className="admin-login">
          <h1>Admin sign in</h1>
          <p>Checking session…</p>
        </div>
      </main>
    )
  }

  if (auth === 'authed') {
    return <Outlet />
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setPending(true)
    setError('')
    const result = await loginAdmin(password)
    setPending(false)
    if (result.ok) {
      setAuth('authed')
    } else {
      setError(result.error || 'Wrong password.')
      setPassword('')
    }
  }

  return (
    <main className="admin-page">
      <div className="admin-login">
        <h1>Admin sign in</h1>
        <p>This area is for the Surf team only. Enter the password.</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <label className="admin-form-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError('')
              }}
              autoFocus
              required
            />
          </label>

          {error && <p className="admin-login-error">{error}</p>}

          <div className="admin-form-actions">
            <button
              type="submit"
              className="admin-button admin-button-primary"
              disabled={pending}
            >
              {pending ? 'Signing in…' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
