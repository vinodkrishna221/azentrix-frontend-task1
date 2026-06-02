import { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import { ImageLoader } from '../../components/ImageLoader/ImageLoader';
import ecommerceImg from '../../assets/ecommerce_mockup.png';
import taskflowImg from '../../assets/taskflow_ui.png';
import travelistaImg from '../../assets/travelista_ui.png';

const PROJECTS_DATA = [
  { 
    id: 1, 
    title: 'E-Commerce Matrix', 
    desc: 'A full-stack e-commerce platform with real-time inventory, secure payments, and analytics dashboard.',
    tech: ['React', 'Node.js'], 
    img: ecommerceImg 
  },
  { 
    id: 2, 
    title: 'TaskFlow', 
    desc: 'A comprehensive project management tool with Kanban boards, time tracking, and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'], 
    img: taskflowImg 
  },
  { 
    id: 3, 
    title: 'Travelista', 
    desc: 'An immersive travel booking platform with destination guides, flight search, and hotel reservations.',
    tech: ['React Native', 'Firebase'], 
    img: travelistaImg 
  },
];

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS_DATA[activeIndex];
  
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const currentRefs = projectRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <header className={styles.sectionHeader}>
        <span className={styles.techTag}>[ 02 // FEATURED_WORK ]</span>
        <h2 className={styles.sectionTitle}>Projects<span className={styles.cursor}>_</span></h2>
        <p className={styles.sectionSubtitle}>
          A selection of impactful projects<br />built with modern technologies.
        </p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.stickyPanel}>
          <div className={styles.panelContent}>
            <span className={styles.panelLabel}>[STICKY INFO PANEL]</span>
            
            <div className={styles.projectDetails}>
              <span className={styles.projectNumber}>
                0{activeProject.id}.
              </span>
              <h3 className={styles.projectTitle}>{activeProject.title}</h3>
              <p className={styles.projectDesc}>{activeProject.desc}</p>
              
              <div className={styles.techStack}>
                <span className={styles.techIcon}>&lt;/&gt;</span>
                <span className={styles.techLabel}>Tech:</span>
                {activeProject.tech.map(t => (
                  <span key={t} className={styles.techPill}>{t}</span>
                ))}
              </div>
              
              <button className={styles.btnPrimaryOutline}>
                View Live Deploy <span className={styles.arrow}>-&gt;</span>
              </button>
            </div>

            <div className={styles.scrollIndicator}>
              <div className={styles.scrollTrack}>
                <div className={styles.scrollDot}></div>
                <div className={styles.scrollLine}></div>
              </div>
              <div className={styles.scrollText}>
                <span className={styles.scrollUpdate}>(Updates on scroll)</span>
                <p>As you scroll, more projects will appear<br/>with details and live previews.</p>
                <div className={styles.progressDots}>
                  {PROJECTS_DATA.map((_, i) => (
                    <div key={i} className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className={styles.scrollArea}>
          {PROJECTS_DATA.map((project, index) => (
            <article 
              key={project.id}
              className={styles.projectCard}
              data-index={index}
              ref={(el) => (projectRefs.current[index] = el)}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <div className={styles.cardNumber}>0{project.id}</div>
              <div className={styles.imageWrapper}>
                 <ImageLoader src={project.img} alt={project.title} className={styles.projectImage} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
