import React, { useState } from 'react';
import styles from './ImageLoader.module.css';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.imageContainer} ${className}`}>
      {!isLoaded && <div className={styles.skeleton} aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
