import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(text: string, speed: number = 50, startDelay: number = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    setIsTyping(true);
    let i = 0;
    
    const timeoutId = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length - 1) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          setDisplayedText((prev) => prev + text.charAt(i));
          clearInterval(timer);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(timer);
    }, startDelay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, startDelay, isVisible]);

  return { displayedText, isTyping, elementRef };
}
