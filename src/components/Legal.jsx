export default function Legal() {
  return (
    <section className="section privacy-section" id="privacy">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Legal</p>
          <h2 className="section-title">Privacy Policy</h2>
          <p className="section-subtitle">
            SpaceDeck is built with privacy as a core principle. Here's exactly what we do — and don't do — with your data.
          </p>
        </div>

        <div className="privacy-content reveal reveal-delay-1">
          <h3>1. Data Collection</h3>
          <p>
            SpaceDeck does <strong style={{ color: 'var(--text-primary)' }}>not collect, transmit, or store any personal data</strong> on 
            external servers. All data — including your Spaces, tabs, resources, tasks, and notes — is stored 
            exclusively in your browser's local IndexedDB storage.
          </p>

          <h3>2. What Data Is Stored Locally</h3>
          <p>The following data is stored locally on your device and never leaves your browser:</p>
          <ul>
            <li>Space names, tab URLs, tab titles, and favicons</li>
            <li>Saved resources (bookmarks) with URLs and titles</li>
            <li>Tasks and notes associated with each Space</li>
            <li>Extension settings and preferences</li>
            <li>Window session state (active space, window mapping)</li>
          </ul>

          <h3>3. No Analytics or Tracking</h3>
          <p>
            SpaceDeck does not include any analytics, telemetry, crash reporting, or tracking tools. 
            We do not use Google Analytics, Mixpanel, Sentry, or any similar service. There are no 
            tracking pixels, no fingerprinting, and no usage data collection of any kind.
          </p>

          <h3>4. No Third-Party Data Sharing</h3>
          <p>
            SpaceDeck does not share, sell, rent, or transfer any user data to third parties. 
            Since no data is collected, there is nothing to share.
          </p>

          <h3>5. Permissions Explained</h3>
          <p>SpaceDeck requests the following Chrome permissions and uses them solely for the described purposes:</p>
          <ul>
            <li><strong style={{ color: 'var(--text-primary)' }}>tabs</strong> — To read, save, and restore browser tabs within Spaces</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>storage</strong> — To persist workspace data in IndexedDB</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>sessions</strong> — To recover recently closed tabs</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>history</strong> — To import recently visited pages (optional feature)</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>alarms</strong> — For scheduled reminders and periodic tasks</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>downloads</strong> — To enable JSON export/backup of workspace data</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>notifications</strong> — For optional engagement reminders</li>
          </ul>

          <h3>6. Data Export & Deletion</h3>
          <p>
            You can export all your data as a JSON file at any time from SpaceDeck's Settings page. 
            You can also reset all data from Settings, which permanently deletes everything stored 
            in IndexedDB. Uninstalling the extension also removes all stored data.
          </p>

          <h3>7. Children's Privacy</h3>
          <p>
            SpaceDeck does not knowingly collect information from children under 13 years of age. 
            The extension is designed for general productivity use.
          </p>

          <h3>8. Changes to This Policy</h3>
          <p>
            If this privacy policy is updated, changes will be reflected on this page with an updated 
            effective date. Since SpaceDeck collects no data, changes are extremely unlikely.
          </p>

          <p className="privacy-date">
            <strong style={{ color: 'var(--text-primary)' }}>Effective Date:</strong> April 2026 &nbsp;|&nbsp; 
            <strong style={{ color: 'var(--text-primary)' }}>Contact:</strong>{' '}
            <a href="https://www.linkedin.com/in/amitvarshney1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>
              Amit Varshney on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
