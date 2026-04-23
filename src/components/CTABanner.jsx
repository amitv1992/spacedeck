import { Globe, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="reveal">
          <p className="section-label" style={{ textAlign: 'center' }}>Ready?</p>
          <h2 className="cta-title">
            Stop losing tabs.<br />
            Start <span className="gradient-text">organizing</span> them.
          </h2>
          <p className="cta-subtitle">
            Join thousands of tab-heavy users who switched to SpaceDeck.
            Free, private, and built for the way you work.
          </p>
        </div>

        <div className="cta-actions reveal reveal-delay-2">
          <a href="#" className="btn btn-primary" id="cta-bottom-chrome" onClick={(e) => e.preventDefault()}>
            <Globe size={18} />
            Coming Soon
            {/*Add to Chrome — It's Free*/}
          </a>
          <a href="#features" className="btn btn-ghost" onClick={(e) => {
            e.preventDefault();
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <Sparkles size={18} />
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
