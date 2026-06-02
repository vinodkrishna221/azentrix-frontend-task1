'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 'aetheria',
    title: 'Aetheria Space',
    tagline: 'WebGL Orbital Mechanics Interface',
    desc: 'An immersive space visualization suite modeling real-time orbital trajectories, telemetry inputs, and atmospheric rendering directly on a WebGL canvas.',
    tech: ['WebGL', 'Next.js', 'GSAP', 'Three.js'],
    liveLink: '#',
    gitLink: '#',
    accent: 'text-cyan-400 border-cyan-500/25 shadow-cyan-500/5',
  },
  {
    id: 'synapse',
    title: 'Synapse Cognitive',
    tagline: 'Deep-Tech AI Dashboard Engine',
    desc: 'A premium, multi-threaded dashboard design system designed to visualize neural pathways, deep-learning models, and cognitive analytics in real-time.',
    tech: ['Next.js', 'React Canvas', 'Vanilla CSS', 'TS'],
    liveLink: '#',
    gitLink: '#',
    accent: 'text-indigo-400 border-indigo-500/25 shadow-indigo-500/5',
  },
  {
    id: 'nova',
    title: 'Nova Protocol',
    tagline: 'FinTech Algorithmic Charting Hub',
    desc: 'A modular, high-craft financial analytics dashboard featuring complex SVG drawings, live WebSockets integration, and custom motion easing layers.',
    tech: ['Next.js', 'SVG Animation', 'GSAP', 'WebSockets'],
    liveLink: '#',
    gitLink: '#',
    accent: 'text-purple-400 border-purple-500/25 shadow-purple-500/5',
  },
];

export default function Projects() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // Simpler fallback on mobile

    const scrollContainer = scrollContainerRef.current;
    const trigger = triggerRef.current;

    if (!scrollContainer || !trigger) return;

    // Calculate total horizontal scroll displacement
    const getScrollAmount = () => {
      return -(scrollContainer.scrollWidth - window.innerWidth);
    };

    // Horizontal Scroll Trigger Pinning
    const pin = gsap.fromTo(
      scrollContainer,
      { x: 0 },
      {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1, // Smooth scrolling linking
          start: 'top top',
          end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true, // Re-calculates on window resize
        },
      }
    );

    // Card rotation and scaling micro-interaction during horizontal scroll
    const panels = scrollContainer.querySelectorAll('.project-panel');
    panels.forEach((panel) => {
      gsap.fromTo(
        panel.querySelector('.project-card'),
        { rotateY: 12, scale: 0.96, opacity: 0.8 },
        {
          rotateY: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: pin.scrollTrigger?.animation,
            start: 'left right',
            end: 'center center',
            scrub: true,
          },
        }
      );
    });

    return () => {
      pin.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} id="projects" className="relative w-full overflow-hidden bg-slate-950/20">
      {/* Scroll Trigger Desktop Wrapper */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row items-stretch md:w-[300vw] h-auto md:h-screen relative md:overflow-y-hidden"
      >
        {/* Intro Banner panel (Only on Desktop side scroll) */}
        <div className="project-panel w-full md:w-[100vw] shrink-0 flex flex-col justify-center px-6 md:px-24 py-16 text-left">
          <span className="text-xs md:text-sm font-semibold tracking-widest font-outfit uppercase text-cyan-400 mb-3 block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-7xl font-bold font-outfit text-slate-100 max-w-2xl leading-none">
            Impact-Focused Case Studies
          </h2>
          <p className="text-slate-400 font-light text-base md:text-xl max-w-lg mt-6 leading-relaxed">
            Scroll vertically to traverse my interactive projects gallery. As we slide horizontally, witness how visual art converges with functional front-end performance.
          </p>
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium uppercase tracking-wider font-outfit mt-8 animate-pulse">
            Scroll Down to Slide <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Project panels */}
        {projects.map((project, index) => {
          return (
            <div 
              key={project.id}
              className="project-panel w-full md:w-[100vw] shrink-0 flex items-center justify-center px-6 md:px-16 py-12"
              style={{ perspective: '1200px' }}
            >
              {/* Main Card Container */}
              <div 
                className="project-card glass-panel w-full max-w-4xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 text-left relative overflow-hidden transition-all duration-500"
              >
                {/* Accent glow ring */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

                {/* Left side: High-craft vector graphic preview */}
                <div className="w-full md:w-5/12 flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3] rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-center items-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/10 opacity-60 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                    
                    {/* Architectural visual shapes corresponding to project */}
                    {project.id === 'aetheria' && (
                      <div className="relative w-36 h-36 border border-cyan-400/20 rounded-full flex items-center justify-center animate-[spin_20s_infinite_linear]">
                        <span className="w-16 h-16 rounded-full border border-indigo-400/30" />
                        <span className="absolute top-0 w-3 h-3 rounded-full bg-cyan-400" />
                      </div>
                    )}
                    {project.id === 'synapse' && (
                      <div className="flex gap-1.5 items-end h-28">
                        <span className="w-6 h-10 bg-indigo-500/20 border border-indigo-500/30 rounded-t" />
                        <span className="w-6 h-20 bg-cyan-500/20 border border-cyan-500/30 rounded-t animate-[pulse_2s_infinite_ease-in-out]" />
                        <span className="w-6 h-14 bg-indigo-500/20 border border-indigo-500/30 rounded-t" />
                        <span className="w-6 h-24 bg-cyan-500/20 border border-cyan-500/30 rounded-t animate-[pulse_3s_infinite_ease-in-out]" />
                      </div>
                    )}
                    {project.id === 'nova' && (
                      <div className="relative w-32 h-20">
                        <svg viewBox="0 0 100 50" className="w-full h-full stroke-cyan-400 stroke-2 fill-none">
                          <path d="M 0 40 Q 25 10 50 35 T 100 10" />
                          <circle cx="50" cy="35" r="4" className="fill-indigo-500 stroke-none animate-ping" />
                          <circle cx="50" cy="35" r="3" className="fill-cyan-400 stroke-none" />
                        </svg>
                      </div>
                    )}
                    
                    <span className="absolute bottom-4 text-[10px] font-bold font-outfit text-slate-500 uppercase tracking-widest">
                      Visual Matrix Layer
                    </span>
                  </div>
                </div>

                {/* Right side: Case Study narrative */}
                <div className="w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-wider font-outfit uppercase text-cyan-400">
                      0{index + 1} / Case Study
                    </span>
                    <h3 className="text-2xl md:text-4xl font-extrabold font-outfit text-slate-100 mt-2 mb-1">
                      {project.title}
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold font-outfit text-slate-400 mb-4 italic">
                      {project.tagline}
                    </h4>
                    <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="text-[10px] md:text-xs font-semibold font-outfit tracking-wide px-3 py-1 rounded-full border border-slate-800 bg-slate-900/30 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-6">
                    <a 
                      href={project.liveLink}
                      className="group flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider font-outfit uppercase text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Live Demo <ExternalLink className="w-4 h-4 group-hover:translate-y-[-1px] group-hover:translate-x-[1px] transition-transform duration-300" />
                    </a>
                    <a 
                      href={project.gitLink}
                      className="group flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider font-outfit uppercase text-slate-400 hover:text-slate-200 transition-colors duration-300"
                    >
                      Source <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
