import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  milestones: ISectionItem[];
  setActiveEventIndex: (index: number) => void;
  parentRef: React.RefObject<HTMLDivElement>;
  setProgress: Dispatch<SetStateAction<number>>;
};

const DesktopMilestone = ({
  milestones,
  setActiveEventIndex,
  parentRef,
  setProgress,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [lineWidth, setLineWidth] = useState(0);
  const [lastPassedIndex, setLastPassedIndex] = useState(-1);




  useGSAP(
    () => {
      if (!containerRef.current || milestones.length === 0) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef?.current,
          start: "top 60px",
          end: `+=${milestones.length * 500}`,
          pin: true,
          scrub: 1.5,
          id: "desktop-milestone",
          // markers: true,
          onUpdate: (self) => {
            const p = self.progress; // 0..1
            setProgress(p);

            const lineWidthPercent = p * 100;
            if (lineWidthPercent >= 100) {
              setLineWidth(107);
            } else {
              setLineWidth(lineWidthPercent);

            }

            const numMilestones = milestones.length;
            let newActiveIndex = -1;
            if (numMilestones > 1) {
              for (let i = 0; i < numMilestones; i++) {
                const dotPositionPercent = (i / (numMilestones - 1)) * 100;
                if (lineWidthPercent >= dotPositionPercent) {
                  newActiveIndex = i;
                }
              }
            } else if (lineWidthPercent >= 100) {
              newActiveIndex = 0;
            }

            setActiveEventIndex(newActiveIndex);
            setLastPassedIndex(newActiveIndex);
          },
        },
      });

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        timeline.to(
          el,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          i,
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef, dependencies: [milestones] },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto my-8"
    >
      <div className="relative overflow-x-auto scrollbar-hide py-2">
        <div className="flex justify-between items-center relative px-5">
          {/* Animated Progress Line */}
          <div className="absolute top-[3.80rem] left-1/2 -translate-x-1/2 w-[90%] h-[3px] z-[999] ">
            <div
              style={{ width: `${lineWidth}%` }}
              className="h-full bg-[#FF4306] transition-all duration-300 z-[999]"
            />
          </div>

          {/* Base Line */}
          <div className="absolute top-[3.92rem] md:w-[85%] lg:w-[88%] mx-auto left-0 right-0 h-[2px] bg-[#4D4D4D] -translate-y-1/2 z-[0]" />

          {/* Timeline Items */}
          {milestones.map((milestone, index) => {
            const isActive = index <= lastPassedIndex;
            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el!;
                }}
                className="relative flex flex-col justify-end items-center flex-shrink-0 opacity-100 scale-100"
              >
                <span
                  className={`mt-0 text-lg font-montserrat font-medium text-[24px] sm:text-[31.92px] leading-[100%] tracking-[0%] text-center pb-5 transition-colors duration-300 ${isActive
                    ? "text-[#FF4306]"
                    : "text-[#414042] dark:text-[#F4F4F4]"
                    }`}
                >
                  {milestone.title}
                </span>
                <div className="w-5 h-5 relative z-10 flex items-center justify-center">
                  <div
                    className={`rounded-full transition-colors duration-300 flex justify-center items-center ${isActive ? "bg-[#FF4306] size-5" : "bg-[#4D4D4D] size-3"
                      }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopMilestone;
