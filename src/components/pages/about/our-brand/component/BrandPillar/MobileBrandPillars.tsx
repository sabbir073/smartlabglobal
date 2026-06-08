"use client";
import React, { forwardRef, useEffect, useRef, ForwardedRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SafeHtml from "@/components/common/safeHtml";

gsap.registerPlugin(ScrollTrigger);

type MobileBrandPillarsProps = {
  data: {
    items: {
      title: string;
      excerpt: string;
    }[];
  };
  className?: string;
};

const MobileBrandPillars = ({ data, className }: MobileBrandPillarsProps) => {
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const mobileWaveRef = useRef<SVGPathElement>(null);
  const mobileDotsRef = useRef<any[]>([]);
  const mobileContentRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mobileSectionRef.current) return;

    const ctx = gsap.context(() => {
      // Wave animation
      if (mobileWaveRef.current) {
        const pathLength = mobileWaveRef.current.getTotalLength();
        gsap.set(mobileWaveRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(mobileWaveRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mobileSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            markers: false,
          },
        });
      }

      // Dots animation
      mobileDotsRef.current.forEach((dot, index) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: mobileSectionRef.current,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 1,
              markers: false,
            },
          },
        );
      });

      // Content animation
      mobileContentRef.current.forEach((content, index) => {
        if (!content) return;
        gsap.fromTo(
          content,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.4 + 0.5,
            scrollTrigger: {
              trigger: mobileSectionRef.current,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 1,
              //   markers: true,
            },
          },
        );
      });
    }, mobileSectionRef);

    return () => ctx.revert();
  }, []);

  const displayData = data;

  // Wave vertical centering
  const waveHeight = 659;
  const containerMinHeight = 600;
  const waveTopOffset = (containerMinHeight - waveHeight) / 2;

  return (
    <div
      ref={mobileSectionRef}
      className={`relative w-full min-h-[600px] mb-0 max-w-[400px] mx-auto overflow-hidden ${className}`}
    >
      {/* Wave SVG */}
      <svg
        width="64"
        height={waveHeight}
        viewBox="0 0 64 359"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 rotate-180 scale-x-[-1]"
        style={{ top: `${waveTopOffset}px` }}
      >
        <path
          ref={mobileWaveRef}
          d="M1.98978 354.397C23.0697 345.242 60.4128 317.066 41.1456 277.604C40.5069 272.616 5.46764 229.35 51.3062 167.593C68.439 144.51 50.312 126.16 32.012 104.979C-4.83253 62.3341 2.5923 32.4894 32.0132 4.00421"
          stroke="#FF4306"
          strokeWidth="10"
        />
      </svg>

      {/* Large Numbers */}
      <div className="absolute text-[100px] font-bold text-white/10 z-0 top-[50px] left-[60px]">
        1
      </div>
      <div className="absolute text-[100px] font-bold text-white/10 z-0 top-[200px] left-[60px]">
        2
      </div>
      <div className="absolute text-[100px] font-bold text-white/10 z-0 top-[350px] left-[60px]">
        3
      </div>

      {/* Pillars */}
      {displayData.items.map((item, index) => (
        <React.Fragment key={index}>
          {/* Dot */}
          <div
            ref={(el) => {
              mobileDotsRef.current[index] = el;
            }}
            className="absolute w-[24px] h-[24px] bg-[#4D4D4F] rounded-full border-[6px] border-white z-20"
            style={{
              left: index === 0 ? "30px" : index === 1 ? "30px" : "0",
              top: index === 0 ? "25%" : index === 1 ? "47%" : "67%",
            }}
          />

          {/* Content */}
          <MobileFloatingContentBlock
            ref={(el) => {
              mobileContentRef.current[index] = el;
            }}
            title={item.title}
            excerpt={item.excerpt}
            className="absolute"
            style={{
              left: "130px",
              top: index === 0 ? "50px" : index === 1 ? "220px" : "380px",
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileBrandPillars;

type FloatingContentBlockProps = {
  title: string;
  excerpt: string;
  className?: string;
  style?: React.CSSProperties;
};

const MobileFloatingContentBlock = forwardRef<
  HTMLDivElement,
  FloatingContentBlockProps
>(({ title, excerpt, className, style }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute text-left max-w-48 z-10 ${className || ""}`}
      style={style}
    >
      <h3 className="text-white font-semibold text-sm mb-2 capitalize">
        {title}
      </h3>
      <div className="space-y-2 text-[#D9D9D9] text-[14px]">
        <SafeHtml content={excerpt} />
      </div>
    </div>
  );
});

MobileFloatingContentBlock.displayName = "MobileFloatingContentBlock";
