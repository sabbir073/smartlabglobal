"use client";
import ImageComponent from "@/components/common/image";
import { cn } from "@/utils/helpers/cn";
import { StaticImageData } from "next/image";
import "./style.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import MediaIcons from "./MediaIcons";
import scrollDownIcon from "@/assets/icons/scrollDownIcon.svg";
import { usePathname } from "next/navigation";

type Props = {
  bgImage: StaticImageData;
  videoUrl?: string;
  children?: React.ReactNode;
  containerClassName?: string;
  bgImageClassName?: string;
  layer1ClassName?: string;
  layer2ClassName?: string;
  layer3ClassName?: string;
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function LayeredBanner({
  bgImage,
  videoUrl,
  children,
  containerClassName = "",
  bgImageClassName = "",
  layer1ClassName = "",
  layer2ClassName = "",
  layer3ClassName = "",
}: Props) {
  const containerRef: any = useRef(null);

  const pathname = usePathname();

  const isHome = pathname === "/";
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const div1 = containerRef.current?.querySelector(".overlay-section-1");
      const div2 = containerRef.current?.querySelector(".overlay-section-2");
      const div3 = containerRef.current?.querySelector(".overlay-banner-3");
      const children = div3?.querySelectorAll("*");

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.5,
      })
        .from(div2, {
          yPercent: 100,
          opacity: 1,
          duration: 0.6,
        })
        .from(
          div1,
          {
            yPercent: 100,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.4",
        );

      if (children?.length) {
        tl.from(
          children,
          {
            y: 10,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: children,
              start: "top 50%",
              end: "bottom 50%",
            },
          },
          "<",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[42.656vh] flex flex-col  dark:bg-[#0D0D0D] bg-[#E6E7E8] opacity-0",
        containerClassName,
      )}
    >
      {!videoUrl && (
        <ImageComponent
          src={bgImage as StaticImageData}
          width={1456}
          height={819}
          alt="hero-bg"
          className={cn(
            "absolute right-0 top-[1px] object-cover h-[calc(100%-2px)] min-w-[60%] md:w-auto w-full object-bottom z-0 ",
            bgImageClassName,
          )}
        />
      )}
      {videoUrl && (
        <video
          className={cn(
            "absolute  right-0 top-[1px] object-cover h-[calc(100%-2px)] min-w-[60%] md:w-auto w-full object-bottom z-0",
            bgImageClassName,
          )}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="flex md:flex-row flex-col h-full flex-grow z-10">
        <div className=" w-full  ">
          <div
            className={cn(
              "overlay-banner-1 relative overflow-hidden  h-full",
              layer3ClassName,
            )}
          >
            <div className="absolute w-full h-full bg-[#FFFFFF1C]  dark:bg-[#FFFFFF0D] overlay-section-1" />
            <div
              className={cn(
                "overlay-banner-2 relative overflow-hidden  h-full",
                layer2ClassName,
              )}
            >
              <div className="absolute w-full h-full bg-[#FFFFFF4D]  dark:bg-[#1E1E1F80] overlay-section-2" />
              <div
                className={cn(
                  "overlay-banner-3 relative overflow-hidden bg-[#E6E7E8] h-full dark:bg-[#0D0D0D] ",
                  layer1ClassName,
                )}
              >
                <div className="pb-32">{children}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-20 pt-[9rem]">
          <div className="absolute bottom-5 md:bottom-10 right-4 lg:right-10 z-20 flex flex-col items-center gap-6 text-white">
            <MediaIcons />
            <div
              className={`flex flex-col items-center gap-4 ${
                isHome ? "md:flex" : "md:hidden"
              }`}
            >
              <div className="w-px h-20 md:h-28 bg-white my-2"></div>
              <div className="flex items-center gap-2 relative">
                <span className="absolute -left-24 top-1/2 -translate-y-1/2 font-medium text-[14px] leading-[100%] tracking-[0] font-poppins">
                  Scroll Down
                </span>
                <div className="w-[38px] h-[60px] rounded-full flex items-center justify-center animate-bounce">
                  <ImageComponent
                    src={scrollDownIcon}
                    width={20}
                    height={20}
                    alt="Scroll Down"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
