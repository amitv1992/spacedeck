import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    {
      src: "features-screenshot.png",
      alt: "SpaceDeck workspace overview showing multiple project spaces",
      title: "All Spaces Dashboard",
      desc: "See all your workspaces at a glance with tab counts and previews"
    },
    {
      src: "search-screenshot.png",
      alt: "SpaceDeck global search command palette",
      title: "Global Search — ⌘K",
      desc: "Find any tab, resource, or task across all your Spaces instantly"
    }
  ];

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
          {gallery.map((item, i) => (
            <div 
              key={i} 
              className={`screenshot-frame reveal reveal-delay-${i + 1}`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="zoom-overlay">
                <ZoomIn size={24} />
                <span>Click to zoom</span>
              </div>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="frame-label">
                {item.title}
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <button className="modal-close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
