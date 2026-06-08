import ImageComponent from "@/components/common/image";
import { Content } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import MediaIcons from "@/components/sections/banner/LayeredBanner/MediaIcons";
import { cn } from "@/utils/helpers/cn";
import React from "react";
type Props = {
  data: any,
  videoUrl?: string,
  bgImageClassName?: string
};

const Banner = ({ data, videoUrl, bgImageClassName }: Props) => {
  return (
    <div className="relative min-h-[156.25vw] md:min-h-[41.25vw] flex flex-col">
      <div className="absolute inset-0 bg-[#41404299] z-10" />
      {!videoUrl && <ImageComponent
        src={data.cover}
        width={1456}
        height={819}
        alt="hero-bg"
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
      />}
      {videoUrl && (
        <video
          className={cn(
            "absolute  right-0 top-[1px] object-cover h-[calc(100%-2px)] w-full  object-bottom z-0",
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

      <ContentContainer className="z-10 flex-1 flex flex-col pt-7 md:pt-0 md:justify-center items-start">
        <div className="max-w-[788px]">
          <h1 className="heading-1 !text-white">{data.headline}</h1>
          <Content className="!text-white">{data.excerpt}</Content>
        </div>
      </ContentContainer>

      <div className="absolute bottom-40 md:bottom-10 lg:bottom-20 right-5 lg:right-10 z-20">
        <MediaIcons />
      </div>
    </div>
  );
};

export default Banner;
