import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { AppDetailPage } from './pages/AppDetailPage'
import { AppLegalPage } from './pages/AppLegalPage'
import { AppsPage } from './pages/AppsPage'
import { GriddSupportPage } from './pages/GriddSupportPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/apps/:appSlug" element={<AppDetailPage />} />
        <Route path="/apps/gridd/support" element={<GriddSupportPage />} />
        <Route
          path="/apps/:appSlug/privacy"
          element={<AppLegalPage documentType="privacy" />}
        />
        <Route
          path="/apps/:appSlug/terms"
          element={<AppLegalPage documentType="terms" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
