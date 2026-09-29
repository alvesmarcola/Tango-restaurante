import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
};

export function Reveal({ children, delay, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    // Fallback: ensure content is never permanently hidden
    const fallback = setTimeout(() => setVisible(true), 1500);

    // If IntersectionObserver isn't available, show immediately
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      clearTimeout(fallback);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
            clearTimeout(fallback);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
