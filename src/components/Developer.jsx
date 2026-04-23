import { useState, useRef } from 'react';
import { Code2 } from 'lucide-react';

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function Developer() {
  const techStack = ['React Native', 'ReactJS', 'NextJS', 'Javascript', 'GoLang','PostgreSQL', 'Java', '& Many more...'];
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const avatarRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
  };

  return (
    <section className="section" id="developer">
      <div className="container">
        <div className="reveal">
          <p className="section-label">The Developer</p>
          <h2 className="section-title">Built by a developer who was<br />tired of tab chaos</h2>
        </div>

        <div className="glass-card developer-card reveal reveal-delay-1">
          <div
            className="developer-avatar spotlight-container"
            ref={avatarRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              '--mouse-x': `${spotlightPos.x}%`,
              '--mouse-y': `${spotlightPos.y}%`,
              '--spotlight-size': isHovered ? '80px' : '0px'
            }}
          >
            <img
              src="developer-avatar1.jpg"
              alt="Amit Varshney Dev"
              className="avatar-base"
            />
            <img
              src="developer-avatar2.jpg"
              alt="Amit Varshney Developer"
              className="avatar-overlay"
            />
          </div>

          <div className="developer-info">
            <h3>Amit Varshney</h3>
            <p className="dev-tagline">Full-Stack Developer • Chrome Extension Enthusiast</p>
            <p>
              I built SpaceDeck because I was drowning in 80+ tabs every day.
              Existing solutions either cost money, required cloud accounts, or
              didn't match how I actually work. So I built exactly what I wanted —
              a fast, local-first, privacy-respecting workspace manager that feels
              like a native part of Chrome.
            </p>

            <div className="developer-links">
              <a
                href="https://www.linkedin.com/in/amitvarshney1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                id="developer-linkedin-link"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
              <a href="https://github.com/amitv1992/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" id="developer-github-link">
                <GithubIcon size={16} />
                Follow on GitHub
              </a>
            </div>

            <div className="tech-badges">
              {techStack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  <Code2 size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
