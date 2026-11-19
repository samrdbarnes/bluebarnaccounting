import { footerServices, legalLinks, site } from '../data/content.js'
import Brand from './Brand.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p className="footer-blurb">
            Accounting and bookkeeping for contractors, private medical practices, and astronautics teams. Peace of
            mind is the highest form of wealth.
          </p>
        </div>

        <nav aria-label="Services">
          <h2>Services</h2>
          <ul>
            {footerServices.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Connect</h2>
          <address>
            <p>{site.address}</p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.
        </span>
        <nav className="footer-legal" aria-label="Legal">
          {legalLinks.map((link, index) => (
            <span key={link.label}>
              {index > 0 && <span aria-hidden="true">|</span>}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  )
}
