export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Install SpaceDeck',
      desc: 'Add SpaceDeck from the Chrome Web Store. One click, no sign-up, no account needed.',
    },
    {
      num: 2,
      title: 'Create Spaces',
      desc: 'Organize your tabs into named Spaces — one for each project, client, or area of focus.',
    },
    {
      num: 3,
      title: 'Browse Fearlessly',
      desc: 'Tabs auto-save as you work. Switch Spaces instantly — your context is always preserved.',
    },
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">How It Works</p>
          <h2 className="section-title" style={{ margin: '0 auto var(--space-md)' }}>
            Up and running in<br />under 30 seconds
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className={`step-card reveal reveal-delay-${i + 1}`}>
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
