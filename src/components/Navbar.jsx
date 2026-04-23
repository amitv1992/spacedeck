import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SparkleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    <path d="M20 3v4"/><path d="M22 5h-4"/>
    <path d="M4 17v2"/><path d="M5 18H3"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <SparkleIcon />
          SpaceDeck
        </a>

        <ul className="navbar-links" style={mobileOpen ? {
          display: 'flex', flexDirection: 'column', position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(6,6,11,0.97)',
          justifyContent: 'center', alignItems: 'center', gap: '32px', zIndex: 1001
        } : undefined}>
          {mobileOpen && (
            <button style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff' }}
              onClick={() => setMobileOpen(false)}><X size={24} /></button>
          )}
          <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
          <li><a href="#screenshots" onClick={(e) => handleNavClick(e, 'screenshots')}>Screenshots</a></li>
          <li><a href="#personas" onClick={(e) => handleNavClick(e, 'personas')}>Who It's For</a></li>
          <li><a href="#developer" onClick={(e) => handleNavClick(e, 'developer')}>Developer</a></li>
          <li><a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')}>Privacy</a></li>
        </ul>

        <a href="#" className="btn btn-primary navbar-cta" id="nav-cta-button"
          onClick={(e) => e.preventDefault()}>
          Coming Soon
          {/*Add to Chrome — Free*/}
        </a>

        <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </nav>
  );
}
