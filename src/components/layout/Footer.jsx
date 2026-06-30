import '../../styles/components/Footer.css'

export default function Footer({ onNavigate }) {
  const handleLink = (id) => {
    if (onNavigate) {
      onNavigate(`#${id}`)
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__circuit-line" aria-hidden="true" />

      <div className="footer__content">
        <div className="footer__giant-text" aria-hidden="true">COMMEXUS</div>
        <div className="footer__brand">
          <div className="footer__logo-row">
            <svg className="footer__logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="36" height="36" rx="8" stroke="url(#flogo-grad)" strokeWidth="2" fill="rgba(0,229,255,0.05)" />
              <path d="M12 14h6v2h-4v8h4v2h-6V14z" fill="url(#flogo-grad)" />
              <path d="M22 14h6v12h-6v-2h4v-8h-4v-2z" fill="url(#flogo-grad)" />
              <circle cx="20" cy="20" r="2" fill="#00e5ff" />
              <line x1="14" y1="20" x2="18" y2="20" stroke="#00e5ff" strokeWidth="1" />
              <line x1="22" y1="20" x2="26" y2="20" stroke="#00e5ff" strokeWidth="1" />
              <defs>
                <linearGradient id="flogo-grad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#0066ff" />
                  <stop offset="100%" stopColor="#00e5ff" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="footer__name">Commexus</h3>
          </div>
          <p className="footer__description">
            Empowering students through coding excellence and innovation at R. C. Patel
            Institute of Technology, Shirpur.
          </p>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__link-list">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About Us', id: 'about' },
              { label: 'Team', id: 'team' },
              { label: 'Contact Us', id: 'contact' },
            ].map((link) => (
              <li key={link.id}>
                <button className="footer__link" onClick={() => handleLink(link.id)}>
                  <span className="footer__link-arrow">›</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__heading">Connect</h4>
          <ul className="footer__link-list">
            <li>
              <a className="footer__link" href="mailto:commexus@rcpit.ac.in">
                <span className="footer__link-arrow">✉</span>
                commexus@rcpit.ac.in
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                <span className="footer__link-arrow">📍</span>
                RCPIT, Shirpur
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                <span className="footer__link-arrow">🔗</span>
                LinkedIn
              </a>
            </li>
            {/* <li>
              <a className="footer__link" href="#">
                <span className="footer__link-arrow">🐙</span>
                GitHub
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 Commexus Club. All rights reserved.
        </p>
        <p className="footer__credit">
          Developed with <span className="footer__battery">🔋</span> by Commexus
        </p>
      </div>
    </footer>
  )
}
