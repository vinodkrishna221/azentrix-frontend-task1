import React from 'react';
import styles from './Hero.module.css';
import { useCountUp } from '../../hooks/useCountUp';

export const Hero = () => {
  const { count: completedProjects, elementRef: projectsRef } = useCountUp(97);
  const { count: yearsExperience, elementRef: yearsRef } = useCountUp(6);
  const { count: clients, elementRef: clientsRef } = useCountUp(17);
  const { count: users, elementRef: usersRef } = useCountUp(100000, 3000);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.topBar}>
        <div className={styles.logo}>// DevSync</div>
        <button className={styles.collaborateBtn}>Let's Collaborate</button>
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
            <a href="#">/ Instagram</a>
            <a href="#">/ Twitter (X)</a>
            <a href="#">/ LinkedIn</a>
            <a href="#">/ GitHub</a>
          </div>
        </div>

        <div className={styles.portraitArea}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.nameTag}>// Leslie A.</div>
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
