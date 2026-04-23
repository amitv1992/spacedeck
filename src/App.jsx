import { useEffect, useRef, useCallback } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Personas from './components/Personas';
import Developer from './components/Developer';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Legal from './components/Legal';
import Footer from './components/Footer';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  const animate = useCallback(() => {
    // Dot follows instantly
    if (dotRef.current) {
      dotRef.current.style.left = `${mouse.current.x}px`;
      dotRef.current.style.top = `${mouse.current.y}px`;
    }

    // Ring follows with smooth lag
    ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;
    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.current.x}px`;
      ringRef.current.style.top = `${ringPos.current.y}px`;
    }

    // Glow follows with even more lag
    glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.06;
    glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.06;
    if (glowRef.current) {
      glowRef.current.style.left = `${glowPos.current.x}px`;
      glowRef.current.style.top = `${glowPos.current.y}px`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseEnterInteractive = () => {
      ringRef.current?.classList.add('hovering');
    };

    const onMouseLeaveInteractive = () => {
      ringRef.current?.classList.remove('hovering');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .faq-question');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}

function App() {
  useScrollReveal();

  useEffect(() => {
    // Re-attach cursor hover listeners after dynamic content renders
    const timer = setTimeout(() => {
      const ring = document.querySelector('.cursor-ring');
      if (!ring) return;

      const interactiveElements = document.querySelectorAll('a, button, .glass-card, .faq-question');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Personas />
        <Developer />
        <FAQ />
        <CTABanner />
        <Legal />
      </main>
      <Footer />
    </>
  );
}

export default App;
