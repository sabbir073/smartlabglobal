"use client";
import SafeHtml from "@/components/common/safeHtml";
import ContentContainer from "@/components/layout/container/contentContainer";
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComponent from "@/components/common/image";
import DesktopBrandPillarComponent from "./BrandPillar/DesktopBrandPillarComponent";
import { Content, Heading2 } from "@/components/common/typography";
import MobileBrandPillars from "./BrandPillar/MobileBrandPillars";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  data: IPageSectionData;
};

const BrandPillars = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-hidden section-pt" ref={sectionRef}>
      <ImageComponent
        src={data?.cover}
        alt="Sustainability Commitment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <ContentContainer className="relative z-10 ">
        <div className="text-center md:text-start max-w-[760px]">
          <Heading2 className="!text-white !mb-6">
            <SafeHtml content={data?.headline} />
          </Heading2>
          <Content className="!text-white">
            <SafeHtml content={data?.excerpt} />
          </Content>
        </div>
        {/* <DesktopBrandPillars data={data} className="hidden lg:block" /> */}
        <DesktopBrandPillarComponent
          sectionRef={sectionRef}
          data={data}
          className="hidden lg:block"
        />
        <MobileBrandPillars data={data} className="lg:hidden" />
        {/* Wave SVG */}
      </ContentContainer>
    </div>
  );
};

export default BrandPillars;

type DesktopBrandPillarsProps = {
  data: any;
  className?: string;
};

const DesktopBrandPillars = ({ data, className }: DesktopBrandPillarsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate wave path drawing
      if (waveRef.current) {
        const pathLength = waveRef.current.getTotalLength();
        gsap.set(waveRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(waveRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "bottom 30%",
            scrub: 1,
            // markers: true,
          },
        });
      }

      // Animate dots and content appearing
      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.3,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 100%",
                end: "bottom 90%",
                scrub: 1,
              },
            },
          );
        }
      });

      contentRef.current.forEach((content, index) => {
        if (content) {
          gsap.fromTo(
            content,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.4 + 0.5,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 100%",
                end: "bottom 80%",
                scrub: 1,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-96 mb-20 max-w-[1200px] mx-auto ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1104 356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={waveRef}
          d="M6.29301 252.445C51.6746 309.547 168.725 400.882 273.873 309.401C288.639 303.346 392.494 160.39 619.468 250.184C704.303 283.745 745.667 213.102 795.568 139.603C896.035 -8.37704 988.826 -20.1279 1100.32 46.6663"
          stroke="#FF4306"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {/* Dots and content */}
      <div className="absolute inset-0">
        {/* First pillar */}
        <div className="absolute flex flex-col items-center left-[5%] top-[78%] xl:left-[8%] xl:top-[92%]">
          <div
            ref={(el) => {
              dotsRef.current[0] = el;
            }}
            className="w-12 h-12 bg-[#4D4D4F] rounded-full border-[12px] border-white mb-4"
          />
          <div
            ref={(el) => {
              contentRef.current[0] = el;
            }}
            className="text-center max-w-48"
          >
            <h3 className="text-white font-semibold text-sm mb-2">
              {data.items[0].title}
            </h3>
            <div className="space-y-2 text-[#D9D9D9] text-[14px]">
              <SafeHtml content={data.items[0].excerpt} />
            </div>
          </div>
        </div>

        {/* Second pillar */}
        <div className="absolute flex flex-col items-center  left-[50%] top-[59%] xl:left-[52%] xl:top-[66%]">
          <div
            ref={(el) => {
              dotsRef.current[1] = el;
            }}
            className="w-12 h-12 bg-[#4D4D4F] rounded-full border-[12px] border-white mb-4"
          />
          <div
            ref={(el) => {
              contentRef.current[1] = el;
            }}
            className="text-center max-w-48"
          >
            <h3 className="text-white font-semibold text-sm mb-2">
              {data.items[1].title}
            </h3>
            <div className="space-y-2 text-[#D9D9D9] text-[14px]">
              <SafeHtml content={data.items[1].excerpt} />
            </div>
          </div>
        </div>

        {/* Third pillar */}
        <div className="absolute flex flex-col items-center  left-[80%] top-[10%] xl:left-[81%] xl:top-[-3%]">
          <div
            ref={(el) => {
              dotsRef.current[2] = el;
            }}
            className="w-12 h-12 bg-[#4D4D4F] rounded-full border-[12px] border-white mb-4"
          />
          <div
            ref={(el) => {
              contentRef.current[2] = el;
            }}
            className="text-center max-w-48"
          >
            <h3 className="text-white font-semibold text-sm mb-2">
              {data.items[2].title}
            </h3>
            <div className="space-y-2 text-[#D9D9D9] text-[14px]">
              <SafeHtml content={data.items[2].excerpt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type MobileBrandPillarsProps = {
  data: any;
  className?: string;
};

// const MobileBrandPillars = ({ data, className }: MobileBrandPillarsProps) => {
//   const mobileSectionRef = useRef<HTMLDivElement>(null);
//   const mobileWaveRef = useRef<SVGPathElement>(null);
//   const mobileDotsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const mobileContentRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate wave path drawing
//       if (mobileWaveRef.current) {
//         const pathLength = mobileWaveRef.current.getTotalLength();
//         gsap.set(mobileWaveRef.current, {
//           strokeDasharray: pathLength,
//           strokeDashoffset: pathLength,
//         });

//         gsap.to(mobileWaveRef.current, {
//           strokeDashoffset: 0,
//           duration: 2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: mobileSectionRef.current,
//             start: "top 55%",
//             end: "bottom 70%",
//             scrub: 1,
//             // markers: true, // Uncomment for debugging scroll trigger
//           },
//         });
//       }

//       // The delay is based on the index to create a staggered effect from top to bottom
//       mobileDotsRef.current.forEach((dot, index) => {
//         if (dot) {
//           gsap.fromTo(
//             dot,
//             { scale: 0, opacity: 0 },
//             {
//               scale: 1,
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.3,
//               scrollTrigger: {
//                 trigger: mobileSectionRef.current,
//                 start: "top 100%",
//                 end: "bottom 90%",
//                 scrub: 1,
//               },
//             },
//           );
//         }
//       });
//       mobileContentRef.current.forEach((content, index) => {
//         if (content) {
//           gsap.fromTo(
//             content,
//             { y: 30, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 0.6,
//               delay: index * 0.4 + 0.5,
//               scrollTrigger: {
//                 trigger: mobileSectionRef.current,
//                 start: "top 100%",
//                 end: "bottom 100%",
//                 scrub: 1,
//               },
//             },
//           );
//         }
//       });
//     }, mobileSectionRef);
//     return () => ctx.revert();
//   }, []);

//   const displayData = data;

//   // Calculate wave vertical center for positioning
//   const waveHeight = 659;
//   const containerMinHeight = 600;
//   const waveTopOffset = (containerMinHeight - waveHeight) / 2; // Centers the wave vertically
//   return (
//     <div
//       ref={mobileSectionRef}
//       className={`relative w-full min-h-[600px] mb-20 max-w-[400px] mx-auto overflow-hidden ${className}`}
//     >
//       <svg
//         width="64"
//         height={waveHeight}
//         viewBox="0 0 64 359"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute left-0 rotate-180 scale-x-[-1]"
//         style={{ top: `${waveTopOffset}px` }}
//       >
//         <path
//           ref={mobileWaveRef}
//           d="M1.98978 354.397C23.0697 345.242 60.4128 317.066 41.1456 277.604C40.5069 272.616 5.46764 229.35 51.3062 167.593C68.439 144.51 50.312 126.16 32.012 104.979C-4.83253 62.3341 2.5923 32.4894 32.0132 4.00421"
//           stroke="#FF4306"
//           strokeWidth="10"
//         />
//       </svg>

//       {/* Large Numbers (1, 2, 3) - positioned absolutely behind content */}
//       <div className="absolute text-[100px] font-bold text-white/10 z-0 top-[50px] left-[50px]">
//         1
//       </div>
//       <div className="absolute text-[100px] font-bold text-white/10 z-0 top-[200px] left-[50px]">
//         2
//       </div>
//       <div className="absolute text-[100px] font-bold text-white/10 z-0 top-[350px] left-[50px]">
//         3
//       </div>

//       {/* Pillar 1 (Top) - Dot and Content */}
//       <div
//         ref={(el) => {
//           mobileDotsRef.current[0] = el;
//         }}
//         className="absolute size-[24px] bg-[#4D4D4F] rounded-full border-[6px] border-white z-20 left-[30px] top-[25%] "
//       />
//       <MobileFloatingContentBlock
//         ref={(el) => {
//           mobileContentRef.current[0] = el;
//         }}
//         className="left-[120px] top-[50px]"
//         title={displayData.items[0].title}
//         excerpt={displayData.items[0].excerpt}
//       />

//       {/* Pillar 2 (Middle) - Dot and Content */}
//       <div
//         ref={(el) => {
//           mobileDotsRef.current[1] = el;
//         }}
//         className="absolute size-[24px] bg-[#4D4D4F] rounded-full border-[6px] border-white z-20 left-[30px] top-[47%] "
//       />
//       <MobileFloatingContentBlock
//         ref={(el) => {
//           mobileContentRef.current[1] = el;
//         }}
//         className="left-[120px] top-[220px]"
//         title={displayData.items[1].title}
//         excerpt={displayData.items[1].excerpt}
//       />

//       {/* Pillar 3 (Bottom) - Dot and Content */}
//       <div
//         ref={(el) => {
//           mobileDotsRef.current[2] = el;
//         }}
//         className="absolute size-[24px] bg-[#4D4D4F] rounded-full border-[6px] border-white z-20 left-[0px] top-[67%] "
//       />
//       <MobileFloatingContentBlock
//         ref={(el) => {
//           mobileContentRef.current[2] = el;
//         }}
//         className="left-[120px] top-[380px]"
//         title={displayData.items[2].title}
//         excerpt={displayData.items[2].excerpt}
//       />
//     </div>
//   );
// };

type FloatingContentBlockProps = {
  title: string;
  excerpt: string;
  className?: string;
};

const MobileFloatingContentBlock = forwardRef(
  (
    { title, excerpt, className }: FloatingContentBlockProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={`absolute text-left max-w-48 z-10 ${className || ""}`}
      >
        <h3 className="text-white font-semibold text-sm mb-2 capitalize">
          {title}
        </h3>
        <div className="space-y-2 text-[#D9D9D9] text-[14px]">
          <SafeHtml content={excerpt} />
        </div>
      </div>
    );
  },
);
MobileFloatingContentBlock.displayName = "MobileFloatingContentBlock";
