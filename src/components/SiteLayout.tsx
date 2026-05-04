import { NavLink, Link, Outlet } from 'react-router-dom'

const logoSrc = '/Hillsoboro_logo_light.png'

export function SiteLayout() {
  return (
    <div className="site-layout">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            {/* Replace this public logo file with your final brand mark when ready. */}
            <img
              src={logoSrc}
              alt="Hillsboro LLC logo"
              className="brand-logo"
            />
            <span className="brand-text">Hillsboro LLC</span>
          </Link>

          <nav className="top-nav" aria-label="Primary">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
            >
              Apps
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
