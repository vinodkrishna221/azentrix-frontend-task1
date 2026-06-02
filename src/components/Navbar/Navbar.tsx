import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
            activeClass={styles.active}
          >
            Home
            <span className={styles.indicator}></span>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
            activeClass={styles.active}
          >
            About
            <span className={styles.indicator}></span>
          </Link>
        </div>
        
        <div className={styles.center}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.logo}
          >
            AZENTRIX
          </Link>
        </div>

        <div className={styles.right}>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
            activeClass={styles.active}
          >
            Skills
            <span className={styles.indicator}></span>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
            activeClass={styles.active}
          >
            Projects
            <span className={styles.indicator}></span>
          </Link>
          
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.contactBtn}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
