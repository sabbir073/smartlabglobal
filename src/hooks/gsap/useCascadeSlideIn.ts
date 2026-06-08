import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TargetInput = string | HTMLElement | React.RefObject<HTMLElement>;

type UseCascadeSlideInOptions = {
  target: TargetInput;
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  end?: string;
  ease?: string;
};

export function useCascadeSlideIn({
  target,
  y = 40,
  x = 0,
  duration = 0.5,
  delay = 0,
  stagger = 0.1,
  start = "top 80%",
  end = "bottom 20%",
  ease = "power2.out",
}: UseCascadeSlideInOptions) {
  const internalRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    // resolve the actual target inside GSAP context
    let element: HTMLElement | null = null;

    if (typeof target === "string") {
      element = document.querySelector(target);
    } else if ("current" in target) {
      element = target.current;
    } else {
      element = target;
    }

    if (!element) return;

    const allChildren = element.querySelectorAll("*");
    if (!allChildren.length) return;

    gsap.from(allChildren, {
      ...(x && { x }),
      y,
      opacity: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    });
  },);

  return internalRef;
}
