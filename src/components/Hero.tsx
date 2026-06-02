'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const magneticButtonRefs = useRef<(HTMLButtonElement | HTMLAnchorElement)[]>([]);

  useEffect(() => {
    // 1. Loading Reveal Animations with GSAP
    const words = headlineRef.current?.querySelectorAll('.word-wrapper > span');
    
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(containerRef.current, { opacity: 1, duration: 0.5 });
    
    if (words && words.length > 0) {
      tl.fromTo(
        words,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.04, delay: 0.2 }
      );
    }

    if (subheadlineRef.current) {
      tl.fromTo(
        subheadlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
    }

    if (ctaGroupRef.current) {
      tl.fromTo(
        ctaGroupRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
    }

    // 2. Magnetic CTA Buttons Hover Effect
    const magneticButtons = magneticButtonRefs.current;
    
    const handleMouseMove = (e: MouseEvent, button: HTMLElement) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Magnetic pull: translates the button slightly towards mouse within boundaries
      gsap.to(button, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out',
      });
      
      // Pull inner text/icon even more for extra organic flexibility
      const content = button.querySelector('.btn-content');
      if (content) {
        gsap.to(content, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = (button: HTMLElement) => {
      // Smooth return to initial state
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
      
      const content = button.querySelector('.btn-content');
      if (content) {
        gsap.to(content, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    magneticButtons.forEach((btn) => {
      if (!btn) return;
      btn.addEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, btn));
      btn.addEventListener('mouseleave', () => handleMouseLeave(btn));
    });

    return () => {
      magneticButtons.forEach((btn) => {
        if (!btn) return;
        btn.removeEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, btn));
        btn.removeEventListener('mouseleave', () => handleMouseLeave(btn));
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineText = "I engineer jaw-dropping visual art into high-conversion digital products.";
  const headlineWords = headlineText.split(" ");

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center overflow-hidden opacity-0"
    >
      {/* Decorative Floating Spheres */}
      <div className="absolute top-1/4 left-10 md:left-20 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl animate-[bounce_8s_infinite_ease-in-out] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 md:right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl animate-[bounce_12s_infinite_ease-in-out] pointer-events-none -z-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl flex flex-col items-center">
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-900/40 text-xs md:text-sm font-medium tracking-widest uppercase font-outfit text-cyan-400 mb-8 backdrop-blur-sm animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Interactive Portfolio
        </div>

        {/* Name / Title */}
        <h2 className="text-xl md:text-2xl font-semibold tracking-wider font-outfit text-slate-300 mb-4 opacity-90">
          Aria Vance
        </h2>

        {/* Headline Word-by-Word Reveal */}
        <h1 
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight leading-[1.05] text-slate-100 max-w-4xl mb-8"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word-wrapper inline-block overflow-hidden mr-[0.25em] py-1">
              <span className="inline-block transform translate-y-full opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-100 to-slate-300">
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Supporting Subheadline */}
        <p 
          ref={subheadlineRef}
          className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-12 opacity-0"
        >
          An Award-Winning Interactive Product Designer & Creative Technologist bridging the gap between premium design art direction and clean, high-performance nextJS architecture.
        </p>

        {/* Magnetic CTA buttons group */}
        <div 
          ref={ctaGroupRef}
          className="flex flex-col sm:flex-row gap-6 items-center opacity-0"
        >
          <button
            ref={(el) => { if (el) magneticButtonRefs.current[0] = el; }}
            onClick={() => scrollToSection('projects')}
            className="group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wider font-outfit uppercase bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-slate-100 shadow-[0_4px_24px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_32px_rgba(99,102,241,0.4)] transition-all duration-300 cursor-pointer overflow-hidden border border-indigo-400/20"
          >
            <span className="btn-content flex items-center gap-2 relative z-10">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </button>

          <button
            ref={(el) => { if (el) magneticButtonRefs.current[1] = el; }}
            onClick={() => scrollToSection('contact')}
            className="group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wider font-outfit uppercase bg-slate-900/30 hover:bg-slate-800/40 text-slate-300 hover:text-slate-100 border border-slate-700/60 hover:border-slate-500/80 transition-all duration-300 cursor-pointer"
          >
            <span className="btn-content flex items-center gap-2 relative z-10">
              Get in Touch
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
