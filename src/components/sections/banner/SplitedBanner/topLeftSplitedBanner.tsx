"use client";
import ImageComponent from "@/components/common/image";
import { StaticImageData } from "next/image";
import "./style.scss";
import ContentContainer from "@/components/layout/container/contentContainer";
import { useRef } from "react";
import { useScrollBarFill } from "@/hooks/gsap/useScrollBarFill";
import { cn } from "@/utils/helpers/cn";
import { useScrollSlideUp } from "@/hooks/gsap/useScrollSlideUp";
import AtGlanceBackdrop from "@/components/pages/SingleServicePage/components/common/AtGlanceBackdrop";
type Props = {
  bgImage: StaticImageData;
  children?: React.ReactNode;
  containerClassName?: string;
  splitClassName?: string;
  showBackDrop?: boolean;
  backDropClassName?: string;
  imageComponentClassName?: string;
};

export default function TopLeftSplitedBanner({
  bgImage,
  children,
  containerClassName = "",
  splitClassName = "",
  showBackDrop = false,
  backDropClassName = "",
  imageComponentClassName = "",
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
        "relative min-h-[42.656vw] flex flex-col  dark:bg-[#0D0D0D] bg-[#e8e6e6] overflow-hidden",
        containerClassName,
      )}
    >
      {showBackDrop && (
        <AtGlanceBackdrop className={cn("z-[1]", backDropClassName)} />
      )}
      <ImageComponent
        src={bgImage}
        width={1920}
        height={818}
        quality={100}
        alt="banner-image"
        className={cn(
          "absolute right-0 bottom-0 object-cover h-full w-full object-bottom z-0 max-h-[350px] md:max-h-full",
          imageComponentClassName,
        )}
        ref={imgRef}
      />
      <div className="flex md:flex-row flex-col h-full flex-grow z-10 transform translate-y-[-1px]">
        <div className="w-full relative">
          <div className="absolute md:left-4 left-0  bottom-0 z-0 h-full w-full scale-105 md:scale-105 xl:scale-125  topLeft-overlay-banner">
            <div
              ref={barRef}
              className="w-full bg-banner_bar absolute bottom-0"
            />
          </div>

          <div
            className={cn(
              "topLeft-overlay-banner absolute -top-[1px] left-0 w-full h-full  overflow-hidden bg-[#FFFFFF]  dark:bg-[#1C1C1F]",
              splitClassName,
            )}
          />

          <ContentContainer className="relative z-10 flex flex-col pt-16 2xl:pb-16 lg:pb-40 md:pb-36 pb-20  ">
            {children}
          </ContentContainer>
        </div>
        <div className=" md:py-16 py-24"></div>
      </div>
    </div>
  );
}
