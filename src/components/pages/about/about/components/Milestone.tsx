"use client";

import React, { useEffect, useRef, useState } from "react";
import MobileMilestoneSlider from "./MobileMilestoneSlider";
import DesktopMilestone from "./MileStone/DesktopMilestone";
import { useIsMobile } from "@/hooks/useMobile";
import gsap from "gsap";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import { LeftArrowIcon } from "@/assets/icons";

gsap.registerPlugin(ScrollTrigger);

type Props = { data: IPageSectionData; parentRef: any };

const Milestone = ({ data, parentRef }: Props) => {
  const [mileStoneEvents, setMileStoneEvents] = useState<ISectionItem[]>([]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [prevActiveEventIndex, setPrevActiveEventIndex] = useState(0);

  // NEW: progress-based UI state
  const [progress, setProgress] = useState(0);
  const showGoUp = progress > 0.5;
  const showSkip = !showGoUp; // hide Skip when > 50%

  const isMobile = useIsMobile();
  const indexRef = useRef<any>(null);

  // --- helpers ---
  const getTrigger = () =>
    (ScrollTrigger.getById("desktop-milestone") as ScrollTrigger | null) ||
    null;

  const getScroller = (st: ScrollTrigger | null) =>
    (st && (st.scroller as any)) || window;

  const canUseScrollTo =
    (gsap as any).plugins && (gsap as any).plugins.ScrollToPlugin;

  const smoothScrollTo = (scroller: any, y: number, duration = 0.8) => {
    if (canUseScrollTo) {
      gsap.to(scroller, {
        scrollTo: { y },
        duration,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      if (
        scroller === window ||
        scroller === document.documentElement ||
        scroller === document.body
      ) {
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (typeof scroller.scrollTo === "function") {
        scroller.scrollTo({ top: y, behavior: "smooth" });
      } else {
        scroller.scrollTop = y;
      }
    }
  };

  // NEW: actions
  const handleSkip = () => {
    const st = getTrigger();
    if (!st) return;
    const scroller = getScroller(st);
    const target = (st.end as number) + 700; // end + 700px
    smoothScrollTo(scroller, target);
  };

  const handleGoUp = () => {
    const st = getTrigger();
    if (!st) return;
    const scroller = getScroller(st);
    const target = Math.max(0, (st.start as number) - 800); // start - 600px (clamped)
    smoothScrollTo(scroller, target);
  };

  useEffect(() => {
    if (data?.items) setMileStoneEvents(data.items);
  }, [data]);
  // const parentRef: any = useRef();
  const activeMileStone = mileStoneEvents[activeEventIndex];

  useEffect(() => {
    if (activeEventIndex > prevActiveEventIndex) {
      animateChange(activeEventIndex, "down");
    }
    if (activeEventIndex < prevActiveEventIndex) {
      animateChange(activeEventIndex, "up");
    }
    setPrevActiveEventIndex(activeEventIndex);
  }, [activeEventIndex]);

  const animateChange = (newIndex: number, dir: "up" | "down") => {
    if (!indexRef.current) return;

    const xOffset = dir === "down" ? 40 : -40;

    // Exit animation
    gsap.fromTo(
      indexRef.current,
      { x: 0, opacity: 1 },
      {
        x: -xOffset,
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          setPrevActiveEventIndex(newIndex);

          // Enter animation
          gsap.fromTo(
            indexRef.current,
            { x: xOffset, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.25 },
          );
        },
      },
    );
  };

  return (
    <div className="dark:bg-[#0D0D0D] bg-[rgb(230,231,232)] px-4 section-pt  relative">
      {!isMobile && (
        <div className="absolute bottom-0 2xl:bottom-20 right-16 xl:right-40 z-[1000] flex justify-center items-center">
          <SkipButtonComponent
            showSkip={showSkip}
            showGoUp={showGoUp}
            handleSkip={handleSkip}
            handleGoUp={handleGoUp}
          />
        </div>
      )}
      <div ref={parentRef} className="max-w-5xl mx-auto md:pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading2>
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className="max-w-4xl mx-auto leading-relaxed font-[400] text-[14px]">
            <SafeHtml content={data.excerpt} />
          </Content>
        </div>

        {/* Desktop Timeline */}
        {!isMobile && (
          <div className="hidden lg:block mb-16">
            <DesktopMilestone
              milestones={mileStoneEvents}
              setActiveEventIndex={setActiveEventIndex}
              parentRef={parentRef}
              setProgress={setProgress}
            />
          </div>
        )}

        {/* Milestone Card */}
        <div
          ref={indexRef}
          className="dark:bg-[#1C1C1F] bg-[#FFFFFF] p-4 md:p-8 max-w-4xl mx-auto hidden lg:block min-h-[250px]"
        >
          <div className="text-center md:text-start">
            <div className="flex flex-col md:flex-row md:gap-4 justify-center md:justify-start">
              <div className="text-[24px] md:text-[32px] font-semibold text-[#FF4306] md:mb-6">
                {activeMileStone?.title}
              </div>
              <h3 className="text-[24px] md:text-[32px] font-semibold dark:text-[#F4F4F4] text-[#414042] mb-4 md:mb-6">
                {activeMileStone?.subtitle}
              </h3>
            </div>
            <p className="dark:text-[#D9D9D9] text-[#414042] leading-relaxed text-[14px] ">
              {activeMileStone?.excerpt}
            </p>
          </div>
        </div>

        {/* Mobile Timeline */}
        <section className="lg:hidden">
          <MobileMilestoneSlider data={data} />
        </section>
      </div>
    </div>
  );
};

export default Milestone;

type ISkipButtonComponent = {
  showSkip: boolean;
  showGoUp: boolean;
  handleSkip: () => void;
  handleGoUp: () => void;
};

const SkipButtonComponent = ({
  showSkip,
  showGoUp,
  handleSkip,
  handleGoUp,
}: ISkipButtonComponent) => {
  return (
    <>
      {/* Controls */}
      {showSkip && (
        <PrimaryButton
          onClick={handleSkip}
          variant={"outlined"}
          className="gap-1"
        >
          <span className={`-rotate-90`}>
            <LeftArrowIcon />
          </span>
          Continue
        </PrimaryButton>
      )}

      {showGoUp && (
        <PrimaryButton
          onClick={handleGoUp}
          variant={"outlined"}
          className="gap-1"
        >
          <span className={`rotate-90`}>
            <LeftArrowIcon />
          </span>
          Continue
        </PrimaryButton>
      )}
    </>
  );
};
