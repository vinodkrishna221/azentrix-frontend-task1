import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const PROJECTS_DATA = [
  { id: 1, title: 'E-Commerce Matrix', tech: 'React, Node, PostgreSQL', img: '' },
  { id: 2, title: 'DeFi Dashboard', tech: 'TypeScript, Web3, Tailwind', img: '' },
  { id: 3, title: 'Neural Network Visualizer', tech: 'Three.js, React, Python', img: '' },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);

  // Simplified scroll spy logic could go here, 
  // but for scaffolding we'll rely on basic structure
  
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>[02 // FEATURED_WORK ]</span>
      </div>

      <div className={styles.layout}>
        <div className={styles.stickyPanel}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>
              0{activeProject.id}. {activeProject.title}
            </h3>
            <p className={styles.projectTech}>Tech: {activeProject.tech}</p>
            <button className={styles.viewLink}>[View Live Deploy -&gt;]</button>
          </div>
        </div>
        
        <div className={styles.scrollArea}>
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onMouseEnter={() => setActiveProject(project)}
            >
              <div className={styles.imagePlaceholder}>
                [ Project Image 0{project.id} ]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
