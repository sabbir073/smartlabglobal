import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TargetInput = string | HTMLElement | React.RefObject<HTMLElement>;

type UseSlideInFromLeftOptions = {
  target: TargetInput;
  offset?: number;
  delay?: number;
  duration?: number;
  start?: string;
  end?: string;
  ease?: string;
};

export function useSlideInFromLeft({
  target,
  offset = -100,
  delay = 0,
  duration = 0.6,
  start = 'top 80%',
  end = 'bottom 20%',
  ease = 'power2.out',
}: UseSlideInFromLeftOptions) {
  const internalRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
    if (typeof target === 'string') {
      internalRef.current = document.querySelector(target);
    } else if ('current' in target) {
      internalRef.current = target.current;
    } else {
      internalRef.current = target;
    }
  }, [target]);

  useGSAP(() => {
    if (!internalRef.current) return;

    gsap.fromTo(
      internalRef.current,
      {
        x: offset,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay,
        duration,
        ease,
        scrollTrigger: {
          trigger: internalRef.current,
          start,
          end,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [internalRef]);
}
