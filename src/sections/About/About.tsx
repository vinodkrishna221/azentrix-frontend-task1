import { Download } from 'lucide-react';
import styles from './About.module.css';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Skills } from '../Skills/Skills';

export const About = () => {
  const terminalText = `whoami`;
  const { displayedText, isTyping, elementRef } = useTypingEffect(terminalText, 100, 500);

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>[01]</span>
        <span className={styles.sectionTitle}>// ABOUT_AND_SKILLS</span>
      </div>

      <div className={styles.gridContainer}>
        {/* Left Column - About Content */}
        <div className={styles.aboutCard}>
          <div className={styles.terminalDots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.whoami}>
            &gt; <span ref={elementRef}>{displayedText}</span>
            {isTyping ? <span className={styles.cursor}>_</span> : <span className={styles.cursorBlink}>_</span>}
          </div>
          
          <h2 className={styles.headline}>
            I’m a frontend engineer<br/>
            obsessed with <span className={styles.highlight}>performance</span><br/>
            and <span className={styles.highlight}>pixel perfection.</span>
          </h2>
          
          <div className={styles.dash}>_</div>
          
          <p className={styles.description}>
            I build fast, scalable, and secure web experiences
            that not only look exceptional but are engineered
            to perform flawlessly.
          </p>
          <p className={styles.description}>
            With a strong foundation in modern JavaScript
            ecosystem and a passion for clean UI, I turn ideas
            into impactful digital products.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.btn}>
              <Download size={18} />
              Download Resume
            </button>
            <div className={styles.status}>
              status: available <span className={styles.statusDot}></span>
            </div>
          </div>
        </div>

        {/* Right Column & Bottom Row - Skills Content */}
        <Skills />
      </div>
    </section>
  );
};
