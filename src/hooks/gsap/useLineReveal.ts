import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useLineReveal(
  target: string | React.RefObject<HTMLElement>
) {

  useGSAP(() => {
    let container: HTMLElement | null = null;

    if (typeof target === 'string') {
      container = document.querySelector(target);
    } else if ('current' in target && target.current) {
      container = target.current;
    }

    if (!container) return;

    const elements = [...Array.from(container.querySelectorAll('*'))];
    const splits: SplitText[] = [];
    const triggers: ScrollTrigger[] = [];

    // elements.forEach(el => console.log({ el: el.textContent }))

    elements.forEach((el) => {
      if (!el.textContent?.trim()) return;

      const split = new SplitText(el, {
        type: 'lines',
        linesClass: 'split-line',
      });
      splits.push(split);

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.fromTo(
            split.lines,
            { y: 30, opacity: 0, skewY: 1 },
            {
              y: 0,
              opacity: 1,
              skewY: 0,
              duration: 0.8,
              ease: 'power4.out',
              stagger: {
                amount: 0.3,
              },
            }
          );
        },
      });

      triggers.push(trigger);
    });

    return () => {
      // Cleanup ScrollTriggers
      triggers.forEach((t) => t.kill());

      // Revert DOM
      splits.forEach((split) => split.revert());
    };
  }, [target]);
}
