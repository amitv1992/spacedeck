import { Globe, ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => <div key={i} className="particle" />)}
      </div>
      <div className="hero-glow" />

      <div className="container">
        <div className="hero-content reveal visible">
          <div className="hero-badge">
            <span className="badge-dot" />
            Chrome Extension
          </div>

          <h1 className="hero-title">
            Your Tabs,<br />
            <span className="gradient-text">Your Rules.</span>
          </h1>

          <p className="hero-subtitle">
            SpaceDeck organizes browser tabs into project <strong style={{ color: 'var(--text-primary)' }}>Spaces</strong> —
            save, switch, and restore sessions instantly.
            100% local, zero cloud, total privacy.
          </p>

          <div className="hero-actions">
            <a href="#" className="btn btn-primary" id="hero-cta-chrome" data-umami-event="hero-cta-chrome" onClick={(e) => e.preventDefault()}>
              <Globe size={18} />
              Coming Soon
              {/*Add to Chrome — It's Free*/}
            </a>
            <button className="btn btn-ghost" onClick={handleScroll} id="hero-cta-learn" data-umami-event="hero-cta-learn">
              <ArrowDown size={18} />
              See How It Works
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-screenshot-wrapper">
            <img
              src="hero-screenshot.png"
              alt="SpaceDeck dashboard showing project spaces with organized tabs"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
