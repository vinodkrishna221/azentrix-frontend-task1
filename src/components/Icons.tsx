import React from 'react';

export const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const TSIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <text x="50" y="65" fontSize="55" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="sans-serif">TS</text>
  </svg>
);

export const ViteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className}>
    <path d="M251.3,31.7L132.8,247.9c-2.4,4.4-8.8,4.3-11.1-0.1L2.8,31.7c-2-3.8,1.4-8.1,5.5-6.8l119.5,38.3 l117.8-38.3C249.9,23.6,253.2,27.9,251.3,31.7z" fill="none" stroke="currentColor" strokeWidth="12" strokeLinejoin="round"/>
    <polygon points="128,170 40,30 128,60 216,30" fill="currentColor"/>
  </svg>
);

export const NodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/>
    <text x="52" y="65" fontSize="40" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="sans-serif">JS</text>
  </svg>
);

// Colored Icons for Bottom Row
export const FigmaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 38 57" className={className}>
    <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
    <path fill="#A259FF" d="M0 28.5a9.5 9.5 0 1 1 19 0v9.5a9.5 9.5 0 0 1-19 0v-9.5z"/>
    <path fill="#1ABCFE" d="M19 47.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
    <path fill="#0ACF83" d="M0 47.5a9.5 9.5 0 0 0 9.5 9.5A9.5 9.5 0 0 0 19 47.5v-9.5H9.5A9.5 9.5 0 0 0 0 47.5z"/>
    <path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
    <path fill="#F24E1E" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
  </svg>
);

export const TailwindIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className}>
    <path fill="#38BDF8" d="M22.5 15C15 15 11.25 22.5 11.25 30C15 22.5 22.5 22.5 30 26.25C33.75 28.125 35.625 33.75 41.25 33.75C56.25 33.75 60 15 60 15C56.25 22.5 48.75 22.5 41.25 18.75C37.5 16.875 35.625 11.25 30 11.25C22.5 11.25 22.5 15 22.5 15ZM0 33.75C0 33.75 3.75 26.25 11.25 26.25C15 28.125 16.875 33.75 22.5 33.75C37.5 33.75 41.25 15 41.25 15C37.5 22.5 30 22.5 22.5 18.75C18.75 16.875 16.875 11.25 11.25 11.25C3.75 11.25 0 18.75 0 18.75V33.75Z"/>
  </svg>
);

export const PostgresIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path fill="#336791" d="M49 10C26 10 10 26 10 49c0 23 16 39 39 39s39-16 39-39C88 26 72 10 49 10zm0 72c-19 0-33-14-33-33s14-33 33-33 33 14 33 33-14 33-33 33z"/>
    <path fill="#336791" d="M49 25c-14 0-25 11-25 25s11 25 25 25 25-11 25-25-11-25-25-25zm0 43c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
    <circle fill="#336791" cx="49" cy="49" r="8"/>
  </svg>
);

export const GraphQLIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={className}>
    <path fill="#E10098" d="M200 40L340 120V280L200 360L60 280V120L200 40ZM200 65L80 135V265L200 335L320 265V135L200 65Z"/>
    <circle fill="#E10098" cx="200" cy="40" r="25"/>
    <circle fill="#E10098" cx="340" cy="120" r="25"/>
    <circle fill="#E10098" cx="340" cy="280" r="25"/>
    <circle fill="#E10098" cx="200" cy="360" r="25"/>
    <circle fill="#E10098" cx="60" cy="280" r="25"/>
    <circle fill="#E10098" cx="60" cy="120" r="25"/>
    <circle fill="#E10098" cx="200" cy="200" r="25"/>
    <path fill="#E10098" stroke="#E10098" strokeWidth="15" d="M200 40L340 280M340 120L60 120M200 360L60 120M60 280L340 280M340 120L200 360M60 280L200 40"/>
  </svg>
);

export const NextJSIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6"/>
    <path fill="currentColor" d="M40 30l30 40H30z" />
  </svg>
);

export const PythonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 110 110" className={className}>
    <path fill="currentColor" d="M55,10 C40,10 35,20 35,20 L35,30 L75,30 L75,35 L30,35 C15,35 15,55 15,55 C15,55 15,75 30,75 L40,75 L40,65 C40,55 50,45 60,45 L75,45 C90,45 90,30 90,30 C90,30 90,10 75,10 L55,10 Z M50,18 A3,3 0 1,1 44,18 A3,3 0 1,1 50,18 Z M55,100 C70,100 75,90 75,90 L75,80 L35,80 L35,75 L80,75 C95,75 95,55 95,55 C95,55 95,35 80,35 L70,35 L70,45 C70,55 60,65 50,65 L35,65 C20,65 20,80 20,80 C20,80 20,100 35,100 L55,100 Z M60,92 A3,3 0 1,1 66,92 A3,3 0 1,1 60,92 Z"/>
  </svg>
);

export const DockerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path fill="#2496ED" d="M10 50h80v20c0 10-15 15-40 15S10 80 10 70V50zm10-5h15v10H20V45zm20 0h15v10H40V45zm20 0h15v10H60V45zm-20-15h15v10H40V30zm-20 0h15v10H20V30zm20-15h15v10H40V15z"/>
  </svg>
);

export const AWSIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path fill="#FF9900" d="M20 70c20 10 40 10 60 0-15 15-45 15-60 0z"/>
    <text x="50" y="55" fontSize="35" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="sans-serif">AWS</text>
  </svg>
);

export const MongoDBIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path fill="#47A248" d="M50 10c-20 20-25 40-20 60 5 20 15 20 20 20s15 0 20-20c5-20 0-40-20-60zm0 75c-2-5-2-15 0-40 2 25 2 35 0 40z"/>
  </svg>
);
