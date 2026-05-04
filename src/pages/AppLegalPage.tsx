import { Link, useParams } from 'react-router-dom'
import {
  getAppBySlug,
  type LegalDocumentType,
} from '../data/apps'
import { GriddPrivacyPage } from './GriddPrivacyPage'
import { GriddTermsPage } from './GriddTermsPage'

type AppLegalPageProps = {
  documentType: LegalDocumentType
}

export function AppLegalPage({ documentType }: AppLegalPageProps) {
  const { appSlug } = useParams()
  const app = appSlug ? getAppBySlug(appSlug) : undefined

  if (appSlug === 'gridd') {
    return (
      <section className="panel page-content legal-page">
        {documentType === 'privacy' ? (
          <GriddPrivacyPage />
        ) : (
          <GriddTermsPage />
        )}
        <p>
          <Link to="/apps/gridd" className="text-link">
            Back to Gridd
          </Link>
        </p>
      </section>
    )
  }

  if (!app) {
    return (
      <section className="panel page-content">
        <h1>Legal page not found</h1>
        <p>The requested app legal page does not exist.</p>
        <Link to="/apps" className="text-link">
          Back to Apps
        </Link>
      </section>
    )
  }

  const document = app.legal[documentType]

  return (
    <section className="panel page-content legal-page">
      <p className="eyebrow">{app.name}</p>
      <h1>{document.title}</h1>
      <p className="muted">Effective date: {document.effectiveDate}</p>

      {document.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {document.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <p>
        <Link to={`/apps/${app.slug}`} className="text-link">
          Back to {app.name}
        </Link>
      </p>
    </section>
  )
}
