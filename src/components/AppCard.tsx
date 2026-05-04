import { Link } from 'react-router-dom'
import type { AppMetadata } from '../data/apps'

type AppCardProps = {
  app: AppMetadata
}

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="panel app-card">
      <p className="eyebrow">{app.statusNote}</p>
      <h2>{app.name}</h2>
      <p className="app-card-description">{app.shortDescription}</p>
      <p className="muted app-card-platform">{app.platformNote}</p>
      <Link to={`/apps/${app.slug}`} className="button-link button-link-small">
        View {app.name}
      </Link>
    </article>
  )
}
