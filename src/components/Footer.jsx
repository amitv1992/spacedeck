const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    <path d="M20 3v4"/><path d="M22 5h-4"/>
    <path d="M4 17v2"/><path d="M5 18H3"/>
  </svg>
);

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              <SparkleIcon />
              SpaceDeck
            </div>
            <p className="footer-tagline">Stay Focused. Organize Tabs into Meaningful Spaces.</p>
          </div>

          <ul className="footer-links">
            <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
            <li><a href="#screenshots" onClick={(e) => handleNavClick(e, 'screenshots')}>Screenshots</a></li>
            <li><a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')}>Privacy Policy</a></li>
            <li>
              <a href="https://www.linkedin.com/in/amitvarshney1/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/amitv1992/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Chrome Web Store</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          Made with <span className="heart">♥</span> by Amit Varshney &nbsp;·&nbsp; © {new Date().getFullYear()} SpaceDeck. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
