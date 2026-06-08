import { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SafeHtml from "@/components/common/safeHtml";

gsap.registerPlugin(ScrollTrigger);

type DesktopBrandPillarsProps = {
  data: IPageSectionData;
  className?: string;
  sectionRef: React.RefObject<HTMLDivElement>;
};

const DesktopBrandPillarComponent = ({ data, className, sectionRef }: DesktopBrandPillarsProps) => {
  const waveRef = useRef<SVGPathElement>(null);
  const dotContentsRef = useRef<(HTMLElement | null)[]>([]);
  const dotsRef = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (!waveRef.current || !sectionRef.current) {
      // console.log('Refs not ready:', {
      //   waveRef: !!waveRef.current,
      //   sectionRef: !!sectionRef.current
      // });
      return;
    }


    const ctx = gsap.context(() => {
      const pathLength = waveRef.current!.getTotalLength();
      const dotPositions = [0.1, 0.49, 0.95];

      // Position dots along the path
      dotPositions.forEach((pos, i) => {
        const { x, y } = waveRef?.current?.getPointAtLength(pathLength * pos) ?? {};
        const dot = dotContentsRef.current[i];
        if (dot && x && y) {
          dot.style.left = `${x + 50}px`;
          dot.style.top = `${y + 70}px`;
        }
      });

      // Set up initial path state
      gsap.set(waveRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Main animation
      gsap.to(waveRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => {
            if (window.innerWidth >= 1600) return "top top";
            return "top -20%";
          },
          end: "+=100%",
          scrub: 0.5,
          pin: true,
          markers: false,
          onUpdate: (self) => {
            const progressLength = pathLength * self.progress;

            dotPositions.forEach((pos, i) => {
              const dotThreshold = pathLength * pos;
              const dot = dotContentsRef.current[i];
              if (!dot) return;

              const isVisible = progressLength >= dotThreshold;
              const wasVisible = dot.dataset.visible === "true";

              if (isVisible && !wasVisible) {
                gsap.fromTo(dot,
                  { y: 20, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
                );
                gsap.fromTo(dotsRef.current[i],
                  { y: 20, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
                );
                dot.dataset.visible = "true";
              }
              else if (!isVisible && wasVisible) {
                gsap.to(dot, { y: 20, opacity: 0, duration: 0.6, ease: "power2.in" });
                gsap.to(dotsRef.current[i], { y: 20, opacity: 0, duration: 0.6, ease: "power2.in" });
                dot.dataset.visible = "false";
              }
            });
          },
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [sectionRef.current, data]);

  // this useEffect to monitor when sectionRef becomes available, test purpose only
  useEffect(() => {
    if (!sectionRef.current) {
      // console.log('sectionRef is still null, waiting...');

      // Use a small timeout to check again
      const timeoutId = setTimeout(() => {
        if (sectionRef.current) {
          // console.log('sectionRef is now available!');
          // The main useEffect will handle the setup
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div>
      <div className={`relative w-full mb-20 max-w-[1200px] mx-auto ${className}`}>
        <div className="relative w-full h-[70dvh]">
          <svg width="1104" height="457" viewBox="0 0 1104 457" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={waveRef}
              d="M6.2852 304.445C51.6668 361.547 168.717 452.882 273.865 361.401C288.632 355.346 392.486 212.39 619.461 302.184C704.295 335.745 745.659 265.102 795.56 191.603C896.027 43.623 988.818 31.8721 1100.31 98.6663"
              stroke="#FF4306"
              strokeWidth="14"
            />

            <g ref={(el) => { dotsRef.current[0] = el }} className="opacity-0">
              <ellipse cx="157.996" cy="393.39" rx="25" ry="24.3899" fill="white" />
              <ellipse cx="157.995" cy="393.39" rx="11.6667" ry="11.382" fill="#4D4D4F" />
            </g>

            <g ref={(el) => { dotsRef.current[1] = el }} className="opacity-0">
              <ellipse cx="577.992" cy="289.39" rx="25" ry="24.3899" fill="white" />
              <ellipse cx="577.987" cy="289.39" rx="11.6667" ry="11.382" fill="#4D4D4F" />
            </g>

            <g ref={(el) => { dotsRef.current[2] = el }} className="opacity-0">
              <ellipse cx="980.316" cy="62.3899" rx="25" ry="24.3899" fill="white" />
              <ellipse cx="980.315" cy="62.3898" rx="11.6667" ry="11.382" fill="#4D4D4F" />
            </g>
          </svg>

          {/* Dots and content */}
          <BrandPillar
            ref={(el) => { dotContentsRef.current[0] = el }}
            containerClass="absolute left-[15%] top-[55%] xl:top-[60%] opacity-0"
            item={data?.items[0]}
            itemIndex={1}
            intexPosition="lg:-right-12 lg:top-6 2xl:-right-16 2xl:top-14"
          />
          <BrandPillar
            ref={(el) => { dotContentsRef.current[1] = el }}
            containerClass="absolute left-[60%] top-[40%] xl:top-[41%] opacity-0"
            item={data?.items[1]}
            itemIndex={2}
            intexPosition="lg:-right-20 lg:top-0 2xl:-right-24 2xl:top-14"
          />
          <BrandPillar
            ref={(el) => { dotContentsRef.current[2] = el }}
            containerClass="absolute left-[90%] top-[4%] xl:left-[98%] xl:top-[7%] opacity-0"
            item={data?.items[2]}
            itemIndex={3}
            intexPosition="lg:-right-20 lg:top-2 2xl:-right-24 2xl:top-5"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopBrandPillarComponent;

type BrandPillarProps = {
  containerClass?: string;
  item: {
    title: string;
    excerpt: string;
  };
  itemIndex: number;
  intexPosition?: string;
};

const BrandPillar = forwardRef<HTMLDivElement, BrandPillarProps>(
  ({ containerClass = "", item, itemIndex, intexPosition }, ref) => {
    return (
      <div className={`absolute ${containerClass}`} ref={ref}>
        <div className="flex flex-col items-center relative">
          <div className="absolute top-[100%] text-center w-[150px]">
            <h3 className="text-white font-semibold text-sm mb-2 relative">
              <p className={`absolute text-[#FFFFFF14] lg:text-[15vw] 2xl:text-[9vw] font-bold ${intexPosition}`}>
                {itemIndex}
              </p>
              {item.title}
            </h3>
            <div className="space-y-2 text-[#D9D9D9] text-[14px]">
              <SafeHtml content={item.excerpt} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

BrandPillar.displayName = "BrandPillar";