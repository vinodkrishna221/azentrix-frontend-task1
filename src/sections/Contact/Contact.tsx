import React from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>[03 // INITIATE_CONTACT ]</span>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.madLibs}>
          HI DEVSYNC, MY NAME IS
          <input 
            type="text" 
            className={styles.brutalistInput} 
            placeholder="[Name Input]" 
          />
          <br /><br />
          AND I'M LOOKING TO BUILD A
          <input 
            type="text" 
            className={styles.brutalistInput} 
            placeholder="[Project Type]" 
          />
          <br /><br />
          REACH ME AT
          <input 
            type="email" 
            className={styles.brutalistInput} 
            placeholder="[Email Input]" 
          />
        </div>
        
        <div className={styles.actionContainer}>
          <button className={styles.transmitBtn}>[ TRANSMIT SIGNAL -&gt; ]</button>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <p className={styles.copyright}>(c) 2026 DevSync. All systems operational.</p>
      </footer>
    </section>
  );
};
