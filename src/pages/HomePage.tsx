import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Hillsboro Street LLC</p>
        <h1>Building practical software, digital tools, and applications.</h1>
        <p className="lead">
          Hillsboro Street develops focused products designed to solve real
          workflow and productivity challenges.
        </p>
        <div className="hero-actions">
          <Link to="/apps" className="button-link">
            Explore Apps
          </Link>
          <Link to="/about" className="button-link button-link-ghost">
            About Hillsboro Street
          </Link>
        </div>
      </section>

      <section className="panel">
        <h2>Now live: Gridd</h2>
        <p>
          Gridd is the first product in the Hillsboro Street portfolio and is
          built to help users plan clearly and execute consistently.
        </p>
        <Link to="/apps/gridd" className="text-link">
          View Gridd details
        </Link>
      </section>
    </>
  )
}
