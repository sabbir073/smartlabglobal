import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useScrollSlideUp({
  targetRef,
  containerRef,
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = 2.5,
  y = 100,
  markers = false,
  ...props
}: {
  targetRef: React.RefObject<HTMLElement | null>;
  containerRef: React.RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  y?: number;
  markers?: boolean,
  [key: string]: any
}) {
  useGSAP(
    () => {
      const target = targetRef.current;
      const container = containerRef.current;
      if (!target || !container) return;

      gsap.fromTo(
        target,
        { y, ...props },
        {
          y: 0,
          scrollTrigger: {
            trigger: container,
            start,
            end,
            scrub,
            markers
          },
        },
      );
    },
    { scope: containerRef, dependencies: [start, end, scrub, y] },
  );
}
