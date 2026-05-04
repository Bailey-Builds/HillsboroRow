import { Link } from 'react-router-dom'

export function GriddSupportPage() {
  return (
    <section className="panel page-content legal-page">
      <p className="eyebrow">Support</p>
      <h1>Support - Gridd Sudoku</h1>

      <p className="muted">
        <strong>Effective Date:</strong> September 15, 2025
        <br />
        <strong>Last Updated:</strong> September 15, 2025
      </p>

      <section>
        <h2>How can we help?</h2>
        <p>
          Find answers, report issues, or contact our team. For legal docs, see{' '}
          <Link to="/apps/gridd/terms" className="text-link">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/apps/gridd/privacy" className="text-link">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Contact Options</h2>
        <p>Email: support@hillsborostreet.co</p>
        <p>Website: hillsborostreet.co</p>
        <p>Address: 4030 Wake Forest Road, STE 349, Raleigh, NC 27609, USA</p>
      </section>

      <section>
        <h2>Common Topics</h2>
        <h3>Billing</h3>
        <ul>
          <li>Receipts and invoices</li>
          <li>In-app purchases and refunds (via Apple App Store)</li>
          <li>Managing subscriptions</li>
        </ul>

        <h3>Account</h3>
        <ul>
          <li>Access issues and password resets</li>
          <li>Data export and deletion requests</li>
          <li>Device or progress sync</li>
        </ul>

        <h3>Technical</h3>
        <ul>
          <li>Crashes or performance problems</li>
          <li>Feature requests and feedback</li>
          <li>Bug reports (include device, OS, steps to reproduce)</li>
        </ul>
      </section>

      <section>
        <h2>Submit a Request</h2>
        <p>When emailing support, include:</p>
        <ul>
          <li>Your device and OS version</li>
          <li>App version (from settings/about)</li>
          <li>
            Steps to reproduce the issue and screenshots if possible
          </li>
        </ul>
      </section>

      <section>
        <h2>Response Times</h2>
        <p>Business hours: Mon-Fri, 9am-5pm ET</p>
        <p>Typical first response: within 2 business days</p>
      </section>

      <p className="muted">
        This Support page was last updated on September 15, 2025. Please check
        back for updates.
      </p>

      <p>
        <Link to="/apps/gridd" className="text-link">
          Back to Gridd
        </Link>
      </p>
    </section>
  )
}
