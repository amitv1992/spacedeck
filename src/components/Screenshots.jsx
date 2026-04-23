export default function Screenshots() {
  return (
    <section className="section screenshots-section" id="screenshots">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">See It In Action</p>
          <h2 className="section-title" style={{ margin: '0 auto var(--space-md)' }}>
            Built for how you<br />actually work
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Clean, minimal UI that stays out of your way — until you need it.
          </p>
        </div>

        <div className="screenshots-gallery">
          <div className="screenshot-frame reveal reveal-delay-1">
            <img
              src="/features-screenshot.png"
              alt="SpaceDeck workspace overview showing multiple project spaces"
              loading="lazy"
            />
            <div className="frame-label">
              All Spaces Dashboard
              <span>See all your workspaces at a glance with tab counts and previews</span>
            </div>
          </div>

          <div className="screenshot-frame reveal reveal-delay-2">
            <img
              src="/search-screenshot.png"
              alt="SpaceDeck global search command palette"
              loading="lazy"
            />
            <div className="frame-label">
              Global Search — ⌘K
              <span>Find any tab, resource, or task across all your Spaces instantly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
