import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollBarFill(
  parentRef: React.RefObject<HTMLElement>,
  barRef: React.RefObject<HTMLElement>
) {

  // useGSAP(() => {
  //   if (!parentRef.current || !barRef.current) return;

  //   gsap.fromTo(
  //     barRef.current,
  //     {
  //       height: '0%',
  //     },
  //     {
  //       height: '100%',
  //       scrollTrigger: {
  //         // trigger: parentRef.current,
  //         // start: 'top 30%',
  //         // end: 'bottom 20%',
  //         trigger: document.body,
  //         start: 'top top',
  //         end: 'bottom bottom',
  //         scrub: 2.5,
  //         // markers: true,
  //       },
  //     }
  //   );
  // }, [parentRef, barRef]);


  useGSAP(() => {

    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      gsap.to(barRef.current, {
        height: `${scrollPercent * 100}%`,
        duration: 0.5,
        ease: "power3.out"
      });
    };
    window.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

}