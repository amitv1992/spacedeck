const personas = [
  {
    emoji: '👨‍💻',
    role: 'Software Developer',
    desc: 'Juggling API docs, GitHub PRs, Stack Overflow, and staging environments across multiple projects? One Space per repo keeps your workflow pristine.',
  },
  {
    emoji: '🔍',
    role: 'UX Researcher',
    desc: 'Analyzing session recordings, competitive benchmarks, and user interview notes across dozens of tabs? Keep each study separate and reachable.',
  },
  {
    emoji: '✍️',
    role: 'Creative Writer',
    desc: 'Juggling historical research, thesauri, and multiple drafts? Organize your narrative threads into distinct Spaces for deep narrative focus.',
  },
  {
    emoji: '📊',
    role: 'Sales Professional',
    desc: 'Organizing prospect LinkedIn profiles, CRM dashboards, and email templates for different outbound campaigns. Switch client contexts instantly.',
  },
  {
    emoji: '🚀',
    role: 'Agency Owner',
    desc: 'Switching between various client ad platforms, reporting tools, and internal communication channels. Manage your entire portfolio without the tab lag.',
  },
  {
    emoji: '🛡️',
    role: 'Cybersecurity Analyst',
    desc: 'Monitoring threat feeds, documentation, and analysis tools across separate environments. Isolate investigations and never lose a trace.',
  },
  {
    emoji: '🎨',
    role: 'Product Designer',
    desc: 'Figma files, Dribbble inspiration, brand guidelines, and client feedback. Keep your design iterations and creative assets perfectly grouped.',
  },
  {
    emoji: '📈',
    role: 'Product Manager',
    desc: 'Sprint boards, analytics dashboards, and stakeholder docs. Stay on top of your roadmap without losing track of critical feedback loops.',
  },
  {
    emoji: '🎓',
    role: 'Researcher / Student',
    desc: 'Organize tabs by thesis chapter, research topic, or course. Save your deep-dive sessions and pick up exactly where you left off months later.',
  },
  {
    emoji: '💼',
    role: 'Business Consultant',
    desc: 'One Space per client engagement. Keep sensitive data, deliverables, and project management tools isolated and organized.',
  },
];

export default function Personas() {
  return (
    <section className="section" id="personas">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">Who It's For</p>
          <h2 className="section-title" style={{ margin: '0 auto var(--space-md)' }}>
            Built for people who<br />think in tabs
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            If you've ever lost track of a critical tab buried under 47 others — SpaceDeck is for you.
          </p>
        </div>

        <div className="personas-grid">
          {personas.map((p, i) => (
            <div key={i} className={`glass-card persona-card reveal reveal-delay-${(i % 5) + 1}`}>
              <span className="persona-emoji">{p.emoji}</span>
              <h3 className="persona-role">{p.role}</h3>
              <p className="persona-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
