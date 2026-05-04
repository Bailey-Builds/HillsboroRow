import { AppCard } from '../components/AppCard'
import { apps } from '../data/apps'

export function AppsPage() {
  return (
    <section className="page-content">
      <div className="section-header">
        <p className="eyebrow">Apps</p>
        <h1>Hillsboro Row app portfolio</h1>
        <p className="lead">
          Current applications are listed below. This page is data-driven and
          ready to scale as more apps are added.
        </p>
      </div>

      <div className="apps-grid">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </section>
  )
}
