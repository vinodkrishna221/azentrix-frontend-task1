import styles from './Skills.module.css';
import { ReactIcon, TSIcon, ViteIcon, NodeIcon, NextJSIcon, PythonIcon, FigmaIcon, TailwindIcon, PostgresIcon, GraphQLIcon, DockerIcon, AWSIcon, MongoDBIcon } from '../../components/Icons';

export const Skills = () => {
  return (
    <>
      <div className={styles.constellationCard} aria-label="Core Skills Constellation">
        <div className={styles.radarContainer}>
          <svg className={styles.radarLines} viewBox="0 0 400 400" aria-hidden="true">
            <polygon points="320,200 260,304 140,304 80,200 140,96 260,96" fill="none" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeWidth="1" />
            <line x1="200" y1="200" x2="320" y2="200" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="200" y1="200" x2="260" y2="304" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="200" y1="200" x2="140" y2="304" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="200" y1="200" x2="80" y2="200" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="200" y1="200" x2="140" y2="96" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="200" y1="200" x2="260" y2="96" stroke="var(--color-accent-primary)" strokeOpacity="0.3" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="3" fill="var(--color-accent-primary)" />
            <circle cx="320" cy="200" r="4" fill="var(--color-accent-primary)" />
            <circle cx="260" cy="304" r="4" fill="var(--color-accent-primary)" />
            <circle cx="140" cy="304" r="4" fill="var(--color-accent-primary)" />
            <circle cx="80" cy="200" r="4" fill="var(--color-accent-primary)" />
            <circle cx="140" cy="96" r="4" fill="var(--color-accent-primary)" />
            <circle cx="260" cy="96" r="4" fill="var(--color-accent-primary)" />
          </svg>

          <div className={styles.node} style={{ top: '24%', left: '35%' }}>
            <div className={styles.iconBox}><ReactIcon className={styles.nodeIcon} /></div>
            <div className={styles.nodeLabel}>React</div>
          </div>
          
          <div className={styles.node} style={{ top: '24%', left: '65%' }}>
            <div className={styles.iconBox}><TSIcon className={styles.nodeIcon} /></div>
            <div className={styles.nodeLabel}>TypeScript</div>
          </div>
          
          <div className={styles.node} style={{ top: '50%', left: '80%' }}>
            <div className={styles.iconBox}><ViteIcon className={styles.nodeIcon} /></div>
            <div className={styles.nodeLabel}>Vite</div>
          </div>
          
          <div className={styles.node} style={{ top: '76%', left: '65%' }}>
            <div className={styles.iconBox}><NodeIcon className={styles.nodeIcon} /></div>
            <div className={styles.nodeLabel}>Node.js</div>
          </div>

          <div className={styles.node} style={{ top: '76%', left: '35%' }}>
            <div className={styles.iconBox}><NextJSIcon className={styles.nodeIcon} /></div>
            <div className={styles.nodeLabel}>Next.js</div>
          </div>
          
          <div className={styles.node} style={{ top: '50%', left: '20%' }}>
            <div className={styles.iconBox}><PythonIcon className={styles.nodeIcon} /></div>
            <div className={styles.nodeLabel}>Python</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomCard} aria-label="Tech Stack Overflow">
        <div className={styles.bottomTitle}>
          <span className={styles.promptArrow}>&gt;_</span> TECH STACK OVERFLOW
        </div>
        
        <div className={styles.stackList}>
          <div className={styles.stackItem}>
            <FigmaIcon className={styles.stackIcon} />
            <span>Figma</span>
          </div>
          <div className={styles.stackItem}>
            <TailwindIcon className={styles.stackIcon} />
            <span>Tailwind CSS</span>
          </div>
          <div className={styles.stackItem}>
            <PostgresIcon className={styles.stackIcon} />
            <span>PostgreSQL</span>
          </div>
          <div className={styles.stackItem}>
            <GraphQLIcon className={styles.stackIcon} />
            <span>GraphQL</span>
          </div>
          <div className={styles.stackItem}>
            <DockerIcon className={styles.stackIcon} />
            <span>Docker</span>
          </div>
          <div className={styles.stackItem}>
            <AWSIcon className={styles.stackIcon} />
            <span>AWS</span>
          </div>
          <div className={styles.stackItem}>
            <MongoDBIcon className={styles.stackIcon} />
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </>
  );
};
