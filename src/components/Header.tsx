'use client';

import React, { useEffect, useState } from 'react';
import { Home, User, Cpu, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Hero', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Detect scroll to add blur effect when moving past hero
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Track active section using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Shrink bounds to identify active target accurately
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Track each section
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    // Clear standard hashes and perform organic smooth scroll
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <header className="fixed top-6 left-0 right-0 w-full flex justify-center items-center z-50 pointer-events-none px-4">
      <nav 
        className={`glass-panel flex items-center gap-1 p-2 pointer-events-auto transition-all duration-500 ease-out ${
          scrolled ? 'px-4 py-2 border-slate-700/50 bg-slate-950/80 shadow-2xl backdrop-blur-md scale-100' : 'px-6 py-3 border-transparent bg-transparent shadow-none scale-105'
        }`}
        style={{
          borderRadius: '30px'
        }}
      >
        {/* Visual Brand Indicator */}
        <div className="flex items-center gap-2 mr-6 text-sm font-semibold tracking-wider font-outfit uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">AV</span>
        </div>

        <ul className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 pointer-events-auto ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  
                  {/* Underline active pill animation */}
                  {isActive && (
                    <span 
                      className="absolute inset-0 border border-cyan-500/30 rounded-full pointer-events-none" 
                      style={{ mixBlendMode: 'difference' }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
