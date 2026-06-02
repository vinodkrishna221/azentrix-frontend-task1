'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Award, Compass, Sparkles, Terminal } from 'lucide-react';

const storyTabs = [
  { id: 'story', label: 'My Story', icon: Compass },
  { id: 'timeline', label: 'Trajectory', icon: Terminal },
];

const timelineMilestones = [
  {
    year: '2023 — Present',
    role: 'Lead Interactive Product Designer',
    company: 'Aetheria Design Lab (San Francisco)',
    desc: 'Designing immersive, high-traffic WebGL data visualizers and Next.js design systems. Partnering with deep-tech clients to translate complex algorithmic systems into beautiful, high-converting customer portals.',
    icon: Sparkles,
  },
  {
    year: '2021 — 2023',
    role: 'Senior Creative Technologist & UX Architect',
    company: 'Synapse Cognitive Interfaces',
    desc: 'Led UX engineering for complex financial analytics engines. Engineered interactive charting mechanics and lightweight GSAP custom dashboards, increasing product activation by 42%.',
    icon: Award,
  },
  {
    year: '2019 — 2021',
    role: 'Interactive Developer & Brand Designer',
    company: 'Nova Digital Studio',
    desc: 'Bridged the gap between code and pixels. Designed premium brand identities and engineered custom fluid canvas systems, scoring three Awwwards Site of the Day honors.',
    icon: Compass,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered reveal animation when changing tabs
    if (!contentRef.current) return;
    
    gsap.fromTo(
      contentRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, [activeTab]);

  return (
    <section 
      id="about" 
      className="section-padding relative max-w-6xl mx-auto w-full flex flex-col items-center"
    >
      {/* Decorative Grid Light */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-indigo-500/[0.02] blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-xs md:text-sm font-semibold tracking-widest font-outfit uppercase text-cyan-400 mb-3">
          Behind The Pixels
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-100">
          The Creative Trajectory
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Tab Selectors */}
      <div className="glass-panel p-1.5 flex gap-2 mb-16 max-w-sm w-full" style={{ borderRadius: '40px' }}>
        {storyTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold font-outfit tracking-wide transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-500/90 to-cyan-500/90 text-slate-100 shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Switchable Content Container */}
      <div ref={contentRef} className="w-full">
        {activeTab === 'story' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Image / Graphic Panel */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative glass-panel p-6 w-full max-w-sm aspect-[4/5] flex flex-col justify-end overflow-hidden group">
                {/* Visual Glass highlights */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />
                
                {/* Abstract Interactive Shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-cyan-500/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full border border-indigo-500/10 group-hover:-translate-y-4 transition-transform duration-700 pointer-events-none" />
                
                <div className="relative z-20 text-left">
                  <span className="text-xs font-semibold tracking-widest font-outfit text-cyan-400 uppercase mb-2 block">
                    Focus / Philosophy
                  </span>
                  <h4 className="text-2xl font-bold font-outfit text-slate-100 leading-snug mb-3">
                    Fusion of Code & Fine Art
                  </h4>
                  <p className="text-sm text-slate-400 font-light">
                    “Design is not just what it looks like. Design is the emotional journey of conversion.”
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Biography */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-100">
                Hi, I’m Aria. I build digital spaces that matter.
              </h3>
              <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
                Over the past 6+ years, I’ve established a reputation for designing highly interactive digital products that leave a lasting imprint on users. I operate at the overlap of **high-end typography**, **advanced scroll choreography**, and **nextJS modular systems**.
              </p>
              <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
                Recruiters and hiring managers spend an average of 30 seconds scanning a portfolio. That’s why I don’t rely on generic templates or stock layouts. I believe in engineering robust custom frameworks that capture immediate attention, validate product viability instantly, and streamline onboarding pipelines.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl border border-slate-800/40 bg-slate-900/15">
                  <div className="text-3xl font-bold font-outfit text-cyan-400 mb-1">
                    6+
                  </div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Years Industry Exp
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-800/40 bg-slate-900/15">
                  <div className="text-3xl font-bold font-outfit text-indigo-400 mb-1">
                    3
                  </div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Awwwards Mentions
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Timeline Mile-Stones */
          <div className="max-w-3xl mx-auto w-full text-left space-y-8 relative">
            {/* Timeline center line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1.5px] bg-slate-800/60 pointer-events-none -z-10" />

            {timelineMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center z-10">
                    <Icon className="w-3 h-3 text-cyan-400" />
                  </div>

                  {/* Spacer for standard alignment */}
                  <div className="hidden md:block w-5/12" />

                  {/* Project Milestone Card */}
                  <div className="w-full md:w-5/12 pl-12 md:pl-0">
                    <div className="glass-panel p-6 border border-slate-800/50 hover:border-slate-700/50 relative overflow-hidden transition-all duration-300">
                      <span className="text-xs font-semibold tracking-wider font-outfit text-cyan-400 bg-cyan-400/5 border border-cyan-500/10 px-2.5 py-1 rounded-full uppercase">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-bold font-outfit text-slate-100 mt-4">
                        {milestone.role}
                      </h4>
                      <h5 className="text-sm font-semibold font-outfit text-slate-400 mt-1 mb-3">
                        {milestone.company}
                      </h5>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
