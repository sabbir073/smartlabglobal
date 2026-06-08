"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "./style.scss";
import ContentContainer from "@/components/layout/container/contentContainer";
import { cn } from "@/utils/helpers/cn";
import { useRef } from "react";
import { useScrollBarFill } from "@/hooks/gsap/useScrollBarFill";
import { useScrollSlideUp } from "@/hooks/gsap/useScrollSlideUp";
import AtGlanceBackdrop from "@/components/pages/SingleServicePage/components/common/AtGlanceBackdrop";
type Props = {
  bgImage: StaticImageData;
  children?: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  contentContainerClassName?: string;
  showBackDrop?: boolean;
  backDropClassName?: string;
};
export default function TopRightSplitedBanner({
  bgImage,
  children,
  containerClassName = "",
  contentClassName = "",
  contentContainerClassName = "",
  showBackDrop = false,
  backDropClassName = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<any>(null);

  useScrollBarFill(containerRef, barRef);
  useScrollSlideUp({ targetRef: imgRef, containerRef, scrub: 3.5, scale: 1.3 });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[42.656vw] flex flex-col  dark:bg-[#0D0D0D] bg-[#E6E7E8] overflow-hidden",
        containerClassName,
      )}
    >
      {showBackDrop && <AtGlanceBackdrop className={cn("z-[1]", backDropClassName)} />}

      <Image
        src={bgImage}
        width={1920}
        height={818}
        quality={100}
        alt="banner-image"
        className="absolute right-0 top-0 object-cover h-full w-full object-bottom z-0"
        ref={imgRef}

      />

      <div className="flex md:flex-row flex-col h-full flex-grow z-10 transform translate-y-0">
        <div className=" py-16 md:order-1 order-2"></div>
        <div className=" w-full  relative">
          <div className="absolute md:right-4 right-0 bottom-0 z-0 h-full w-full scale-105 md:scale-105 xl:scale-125 topRight-overlay-banner">
            <div
              ref={barRef}
              className="w-full bg-banner_bar absolute bottom-0"
            ></div>
          </div>

          <div
            className={cn(
              "topRight-overlay-banner absolute -top-1 left-0 w-full  h-full overflow-hidden bg-[#FFFFFF]  dark:bg-[#1C1C1F]",
              contentClassName,
            )}
          >

          </div>
          <ContentContainer
            className={cn("relative z-10 flex flex-col pt-16 xl:pb-[400px] lg:pb-[300px] md:pb-40 pb-20 items-end  ", contentContainerClassName)}
          >
            {children}
          </ContentContainer>
        </div>
      </div>
    </div>

    // <div
    //   className={cn(
    //     "relative min-h-[42.656vw] flex flex-col  dark:bg-[#0D0D0D] bg-[#E6E7E8] overflow-hidden",
    //     containerClassName,
    //   )}
    // >
    //   <Image
    //     src={bgImage}
    //     width={1920}
    //     height={818}
    //     quality={100}
    //     alt="banner-image"
    //     className="absolute right-0 top-0 object-cover h-full w-full object-bottom z-0"
    //   />
    //   <div className="flex md:flex-row flex-col h-full flex-grow z-10">
    //     <div className=" py-16 md:order-1 order-2"></div>
    //     <div className=" w-full  relative">
    //       <div className="absolute right-4 bottom-0 z-0 h-full w-full scale-105 lg:scale-125 topRight-overlay-banner">
    //         <div className="w-full h-1/2 bg-green-600 absolute bottom-0"></div>
    //       </div>

    //       <div
    //         className={cn(
    //           "w-full topRight-overlay-banner overflow-hidden bg-[#FFFFFF] h-full dark:bg-[#1C1C1F]",
    //           contentClassName,
    //         )}
    //       >
    //         <ContentContainer className="flex flex-col pt-16 xl:pb-[400px] lg:pb-[300px] md:pb-40 pb-20 items-end  ">
    //           {children}
    //         </ContentContainer>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
