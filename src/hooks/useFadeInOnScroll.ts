import { useEffect, useRef, useState, CSSProperties, RefObject } from 'react';

export interface FadeInOnScrollOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // distance in pixels
}

export interface FadeInOnScrollResult<T extends HTMLElement = HTMLDivElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  style: CSSProperties;
  className: string;
}

export function useFadeInOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: FadeInOnScrollOptions = {}
): FadeInOnScrollResult<T> {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 700,
    direction = 'up',
    distance = 24,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const getTransformOffset = () => {
    if (isVisible || direction === 'none') return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformOffset(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  const className = `transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  return {
    ref,
    isVisible,
    style,
    className,
  };
}
