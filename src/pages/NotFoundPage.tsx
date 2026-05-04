import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="panel page-content">
      <h1>Page not found</h1>
      <p>The page you requested could not be found.</p>
      <Link to="/" className="text-link">
        Back to Home
      </Link>
    </section>
  )
}
