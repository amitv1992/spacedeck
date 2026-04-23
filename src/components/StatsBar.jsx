import { Shield, Cloud, Blocks, Sparkles } from 'lucide-react';

const stats = [
  { icon: Shield, value: '100% Local', label: 'Data never leaves your machine' },
  { icon: Cloud, value: 'Zero Cloud', label: 'No accounts, no servers' },
  { icon: Blocks, value: 'Manifest V3', label: 'Built on latest Chrome APIs' },
  { icon: Sparkles, value: 'Free Forever', label: 'No premium tiers, no limits' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid reveal">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-item reveal reveal-delay-${i + 1}`}>
              <div className="stat-icon"><stat.icon size={22} /></div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
