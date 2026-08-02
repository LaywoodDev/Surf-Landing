import app from '../server/index.js'

export default function handler(req, res) {
  const forwardedPath = req.query?.path

  if (forwardedPath) {
    const path = Array.isArray(forwardedPath)
      ? forwardedPath.join('/')
      : forwardedPath
    const url = new URL(req.url, 'http://localhost')
    url.searchParams.delete('path')
    const query = url.searchParams.toString()
    req.url = `/api/${path}${query ? `?${query}` : ''}`
  }

  return app(req, res)
}
