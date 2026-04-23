import { Layers, Save, ArrowLeftRight, BookMarked, Search, HardDrive } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Spaces',
    desc: 'Group tabs by project, client, or workflow. Each Space holds its own tabs, resources, tasks, and notes.',
  },
  {
    icon: Save,
    title: 'Auto-Save',
    desc: 'Tabs are saved automatically as you browse. No more losing work when Chrome crashes or restarts.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Instant Switch',
    desc: 'Switch between Spaces in one click — current tabs save, target tabs restore. Context switching, solved.',
  },
  {
    icon: BookMarked,
    title: 'Resources & Tasks',
    desc: 'Pin bookmarks, create to-do lists, and write notes per Space. Everything you need, right alongside your tabs.',
  },
  {
    icon: Search,
    title: 'Global Search',
    desc: 'Press ⌘+K to instantly search across all Spaces, tabs, resources, and tasks. Find anything in milliseconds.',
  },
  {
    icon: HardDrive,
    title: 'Local-First',
    desc: 'All data stays in your browser\'s IndexedDB. No servers, no accounts, no tracking. Your data is yours.',
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything you need to<br />master your tabs</h2>
          <p className="section-subtitle">
            SpaceDeck replaces the chaos of 50+ open tabs with organized, 
            project-based workspaces that autosave and restore instantly.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`glass-card feature-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="feature-icon"><f.icon size={24} /></div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
