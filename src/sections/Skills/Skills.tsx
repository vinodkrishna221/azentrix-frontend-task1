import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{ x1: number, y1: number, x2: number, y2: number }[]>([]);

  // Calculate lines between nodes after mount
  useEffect(() => {
    const calculateLines = () => {
      if (!containerRef.current) return;
      const nodes = Array.from(containerRef.current.querySelectorAll(`.${styles.node}`));
      if (nodes.length < 2) return;
      
      const newLines = [];
      const containerRect = containerRef.current.getBoundingClientRect();

      // Connect nodes sequentially for a constellation effect
      for (let i = 0; i < nodes.length - 1; i++) {
        const rect1 = nodes[i].getBoundingClientRect();
        const rect2 = nodes[i + 1].getBoundingClientRect();
        
        newLines.push({
          x1: rect1.left + rect1.width / 2 - containerRect.left,
          y1: rect1.top + rect1.height / 2 - containerRect.top,
          x2: rect2.left + rect2.width / 2 - containerRect.left,
          y2: rect2.top + rect2.height / 2 - containerRect.top
        });
      }
      setLines(newLines);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, []);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>&lt;TECH_STACK_OVERFLOW&gt;</span>
      </div>
      
      <div className={styles.constellationContainer} ref={containerRef}>
        {/* SVG Lines */}
        <svg className={styles.svgOverlay}>
          {lines.map((line, idx) => (
            <line 
              key={idx}
              x1={line.x1} 
              y1={line.y1} 
              x2={line.x2} 
              y2={line.y2} 
              className={styles.connectionLine} 
            />
          ))}
        </svg>

        {/* Nodes */}
        <div className={`${styles.node} ${styles.nodeReact}`} style={{ top: '10%', left: '50%' }}>
          [ React ]
        </div>
        <div className={`${styles.node} ${styles.nodeTS}`} style={{ top: '50%', left: '20%' }}>
          [ TS ]
        </div>
        <div className={`${styles.node} ${styles.nodeVite}`} style={{ top: '45%', left: '80%' }}>
          [ Vite ]
        </div>
        <div className={`${styles.node} ${styles.nodeNode}`} style={{ top: '80%', left: '50%' }}>
          [ Node.js ]
        </div>
      </div>
      
      <div className={styles.staticGrid}>
        <div className={styles.gridItem}>[ Figma ]</div>
        <div className={styles.gridItem}>[ Tailwind ]</div>
        <div className={styles.gridItem}>[ PostgreSQL ]</div>
        <div className={styles.gridItem}>[ GraphQL ]</div>
      </div>
    </section>
  );
};
