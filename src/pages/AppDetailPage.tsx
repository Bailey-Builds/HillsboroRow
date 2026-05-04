import { Link, useParams } from 'react-router-dom'
import { getAppBySlug } from '../data/apps'

export function AppDetailPage() {
  const { appSlug } = useParams()
  const app = appSlug ? getAppBySlug(appSlug) : undefined

  if (!app) {
    return (
      <section className="panel page-content">
        <h1>App not found</h1>
        <p>The requested app profile does not exist.</p>
        <Link to="/apps" className="text-link">
          Back to Apps
        </Link>
      </section>
    )
  }

  return (
    <section className="page-content">
      <div className="section-header">
        <p className="eyebrow">App Detail</p>
        <h1>{app.name}</h1>
        <p className="lead">{app.tagline}</p>
      </div>

      <article className="panel">
        <p>{app.longDescription}</p>
        <p className="status-line">{app.statusNote}</p>
        <p className="muted">{app.platformNote}</p>
        {app.appStoreUrl && (
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-link button-link-small"
          >
            Download on the App Store
          </a>
        )}
      </article>

      <article className="panel">
        <h2>Legal</h2>
        <p>App-specific legal pages:</p>
        <div className="link-row">
          {app.links.map((link) => (
            <Link key={link.to} to={link.to} className="text-link">
              {link.label}
            </Link>
          ))}
          {app.slug === 'gridd' && (
            <Link to="/apps/gridd/support" className="text-link">
              Support
            </Link>
          )}
        </div>
      </article>

      <article className="panel panel-muted">
        <h2>Future App Links</h2>
        <p>
          Space is reserved here for additional product links, launch buttons,
          support resources, or platform downloads as Gridd grows.
        </p>
      </article>
    </section>
  )
}
