'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Layout, Codepen, Terminal, Compass, Layers, Zap } from 'lucide-react';

const skillItems = [
  {
    id: 'uiux',
    title: 'UI/UX Architecture',
    desc: 'Designing high-converting wireframes, interactive user flows, and structured design systems using industry-standard tools.',
    percentage: 95,
    icon: Layout,
    color: 'from-cyan-400 to-indigo-500',
    gridClass: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 'webgl',
    title: 'WebGL & 3D Canvas',
    desc: 'Engineering immersive vector particle systems, custom threeJS shaders, and fast Canvas layouts.',
    percentage: 88,
    icon: Codepen,
    color: 'from-indigo-500 to-purple-500',
    gridClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'nextjs',
    title: 'Next.js & Frontend',
    desc: 'Writing highly structured, modular App Router code in TypeScript, prioritizing static generation, leaf components, and zero layout shift.',
    percentage: 95,
    icon: Terminal,
    color: 'from-cyan-500 to-emerald-500',
    gridClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'gsap',
    title: 'Motion & Physics',
    desc: 'Mastering GSAP, ScrollTrigger, custom springs, and organic easing curves. Animating variables for performance.',
    percentage: 92,
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    gridClass: 'md:col-span-2 lg:col-span-2',
  },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // Triggers only once
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of grid is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="section-padding relative max-w-6xl mx-auto w-full flex flex-col items-center"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-cyan-500/[0.02] blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-xs md:text-sm font-semibold tracking-widest font-outfit uppercase text-cyan-400 mb-3">
          The Arsenal
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-100">
          Core Proficiencies
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
        {skillItems.map((skill) => {
          const Icon = skill.icon;
          
          // SVG Circle configuration for percentage
          const radius = 36;
          const strokeDasharray = 2 * Math.PI * radius; // Approx 226.2
          const strokeDashoffset = animate 
            ? strokeDasharray - (skill.percentage / 100) * strokeDasharray 
            : strokeDasharray;

          return (
            <div 
              key={skill.id}
              className={`glass-panel p-8 border border-slate-800/40 relative overflow-hidden group flex flex-col justify-between min-h-[300px] ${skill.gridClass}`}
            >
              {/* Top Row: Icon + SVG Progress Ring */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-slate-700/80 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Circular Progress Ring */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Ring background */}
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke="rgba(255, 255, 255, 0.03)"
                      strokeWidth="6"
                    />
                    {/* Ring foreground */}
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke="url(#gradient-progress)"
                      strokeWidth="6"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                      }}
                    />
                    
                    {/* Define SVG gradient */}
                    <defs>
                      <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.85)" />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 0.85)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Percentage Text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold font-outfit text-slate-200">
                    {animate ? `${skill.percentage}%` : '0%'}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Text content */}
              <div className="text-left mt-4">
                <h4 className="text-xl font-bold font-outfit text-slate-100 mb-2">
                  {skill.title}
                </h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
