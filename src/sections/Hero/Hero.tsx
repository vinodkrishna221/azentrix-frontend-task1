
import styles from './Hero.module.css';
import { useCountUp } from '../../hooks/useCountUp';
import { ImageLoader } from '../../components/ImageLoader/ImageLoader';

export const Hero = () => {
  const { count: completedProjects, elementRef: projectsRef } = useCountUp(97);
  const { count: yearsExperience, elementRef: yearsRef } = useCountUp(6);
  const { count: clients, elementRef: clientsRef } = useCountUp(17);
  const { count: users, elementRef: usersRef } = useCountUp(100000, 3000);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.topBar}>
        <div className={styles.logo}>// DevSync</div>
        <button className={styles.collaborateBtn} aria-label="Let's Collaborate">Let's Collaborate</button>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.typographyArea}>
          <div className={styles.experienceTag}>&lt;6+ Year Experience&gt;</div>
          <h1 className={styles.headline}>
            BUILDING FAST,<br />
            SCALABLE, AND<br />
            SECURE WEBSITE
          </h1>
          
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Instagram">/ Instagram</a>
            <a href="#" aria-label="Twitter">/ Twitter (X)</a>
            <a href="#" aria-label="LinkedIn">/ LinkedIn</a>
            <a href="#" aria-label="GitHub">/ GitHub</a>
          </div>
        </div>

        <div className={styles.portraitArea}>
          <div className={styles.imageContainer}>
            <ImageLoader 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
              alt="Leslie A. Portrait" 
            />
          </div>
          <div className={styles.nameTag} aria-hidden="true">// Leslie A.</div>
        </div>
      </div>

      <div className={styles.achievements}>
        <div className={styles.achievementTag}>&lt;Success & Achievements&gt;</div>
        <div className={styles.statsGrid}>
          <div className={styles.statItem} ref={projectsRef}>
            <div className={styles.statNumber}>{completedProjects}</div>
            <div className={styles.statLabel}>Completed<br/>Projects</div>
          </div>
          <div className={styles.statItem} ref={yearsRef}>
            <div className={styles.statNumber}>{yearsExperience}+</div>
            <div className={styles.statLabel}>Years in<br/>Dev</div>
          </div>
          <div className={styles.statItem} ref={clientsRef}>
            <div className={styles.statNumber}>{clients}+</div>
            <div className={styles.statLabel}>Clients<br/>Worldwide</div>
          </div>
          <div className={styles.statItem} ref={usersRef}>
            <div className={styles.statNumber}>{users.toLocaleString()}+</div>
            <div className={styles.statLabel}>Users on My Built<br/>Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};
