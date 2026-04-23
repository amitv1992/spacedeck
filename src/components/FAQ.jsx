import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is SpaceDeck completely free?',
    a: 'Yes, SpaceDeck is 100% free with no premium tiers, no subscriptions, and no hidden limits. All features are available to everyone.',
  },
  {
    q: 'Where is my data stored?',
    a: 'All your data is stored locally in your browser\'s IndexedDB. Nothing is sent to any server, cloud, or third party. Your data never leaves your machine.',
  },
  {
    q: 'Does it work offline?',
    a: 'Absolutely. Since SpaceDeck is entirely local-first, it works perfectly without any internet connection. Your Spaces, tabs, resources, and tasks are always accessible.',
  },
  {
    q: 'How is SpaceDeck different from Workona, OneTab, or Session Buddy?',
    a: 'Unlike Workona, SpaceDeck requires no account and stores no data in the cloud. Unlike OneTab, SpaceDeck preserves your full working context (not just a list of links). Unlike Session Buddy, SpaceDeck auto-saves and lets you switch between workspaces instantly with full session restore.',
  },
  {
    q: 'Can I export or back up my data?',
    a: 'Yes. SpaceDeck includes a full JSON export/import feature in Settings. You can back up all your Spaces, tabs, resources, tasks, and notes at any time and restore them later.',
  },
  {
    q: 'What permissions does SpaceDeck need?',
    a: 'SpaceDeck requires tabs (to manage your browser tabs), storage (for IndexedDB data), and sessions/history (for recently closed tabs recovery). It never accesses your browsing history for tracking or analytics.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [revealed, setRevealed] = useState({});
  const itemsRef = useRef([]);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setRevealed((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">FAQ</p>
          <h2 className="section-title" style={{ margin: '0 auto var(--space-md)' }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              ref={el => itemsRef.current[i] = el}
              data-index={i}
              className={`glass-card faq-item ${revealed[i] ? 'reveal visible' : 'reveal'} reveal-delay-${Math.min(i + 1, 5)} ${openIndex === i ? 'open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggle(i)} id={`faq-toggle-${i}`}>
                {faq.q}
                <ChevronDown size={18} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
