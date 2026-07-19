// Клиентская обёртка над API авторизации. Пароль и его хэш на клиенте не
// хранятся — проверка происходит на сервере, сессия живёт в httpOnly-куке.

export interface LoginResult {
  ok: boolean
  error?: string
}

export async function checkAdmin(): Promise<boolean> {
  try {
    const res = await fetch('/api/admin/me')
    return res.ok
  } catch {
    return false
  }
}

export async function loginAdmin(password: string): Promise<LoginResult> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) return { ok: true }
    const data = await res.json().catch(() => null)
    return { ok: false, error: data?.error || 'Sign-in error' }
  } catch {
    return {
      ok: false,
      error: 'Server is unavailable. Start it with: npm run server',
    }
  }
}

export async function logoutAdmin(): Promise<void> {
  await fetch('/api/admin/logout', { method: 'POST' }).catch(() => {})
}
