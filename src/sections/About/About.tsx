import React from 'react';
import styles from './About.module.css';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export const About = () => {
  const terminalText = `I'm a frontend engineer obsessed with performance and pixel perfection.
Building seamless digital experiences using modern web technologies.
Always learning, always creating.`;
  
  const { displayedText, isTyping, elementRef } = useTypingEffect(terminalText, 30, 500);

  return (
    <section className={styles.about} id="about">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>[01 // ABOUT_AND_SKILLS ]</span>
      </div>

      <div className={styles.content}>
        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.terminalTitle}>guest@devsync:~</div>
          </div>
          <div className={styles.terminalBody}>
            <p className={styles.command}>&gt; whoami</p>
            <p className={styles.output} ref={elementRef}>
              {displayedText}
              {isTyping && <span className={styles.cursor}>_</span>}
              {!isTyping && displayedText.length > 0 && <span className={styles.cursorBlink}>_</span>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
