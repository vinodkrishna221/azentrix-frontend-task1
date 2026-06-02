import { useState } from 'react';
import styles from './Projects.module.css';
import { ImageLoader } from '../../components/ImageLoader/ImageLoader';

const PROJECTS_DATA = [
  { id: 1, title: 'E-Commerce Matrix', tech: 'React, Node, PostgreSQL', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'DeFi Dashboard', tech: 'TypeScript, Web3, Tailwind', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Neural Network Visualizer', tech: 'Three.js, React, Python', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
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
              onFocus={() => setActiveProject(project)}
              tabIndex={0}
              role="region"
              aria-label={`Project: ${project.title}`}
            >
              <ImageLoader src={project.img} alt={project.title} className={styles.projectImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
