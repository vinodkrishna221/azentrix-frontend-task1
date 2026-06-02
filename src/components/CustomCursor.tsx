'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Check if device is touch-based or screen is too small
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    // Track real coordinates and smooth lag coordinates
    const mousePos = { x: 0, y: 0 };
    const cursorOutlinePos = { x: 0, y: 0 };
    const cursorDotPos = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    // Attach listeners
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Dynamic scale-up on interactive elements (links, buttons, inputs)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('interactive-hover');

      if (isInteractive) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    // Animation Loop using requestAnimationFrame for butter-smooth rendering
    let rafId: number;
    const animate = () => {
      // Linear interpolation (lerp) for rich organic visual delay (lag)
      // Dot follows faster, outline follows slower
      const outlineEase = 0.12;
      const dotEase = 0.35;

      cursorOutlinePos.x += (mousePos.x - cursorOutlinePos.x) * outlineEase;
      cursorOutlinePos.y += (mousePos.y - cursorOutlinePos.y) * outlineEase;

      cursorDotPos.x += (mousePos.x - cursorDotPos.x) * dotEase;
      cursorDotPos.y += (mousePos.y - cursorDotPos.y) * dotEase;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorOutlinePos.x}px`;
        cursorRef.current.style.top = `${cursorOutlinePos.y}px`;
        cursorRef.current.style.opacity = hidden ? '0' : '1';
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${cursorDotPos.x}px`;
        dotRef.current.style.top = `${cursorDotPos.y}px`;
        dotRef.current.style.opacity = hidden ? '0' : '1';
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('cursor-hover');
    };
  }, [hidden]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
