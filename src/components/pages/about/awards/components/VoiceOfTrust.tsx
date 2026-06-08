"use client";
import TopRightSplitedBanner from "@/components/sections/banner/SplitedBanner/topRighSplitedBanner";
import React, { useRef } from "react";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import { useScrollSlideUp } from "@/hooks/gsap/useScrollSlideUp";
import SafeHtml from "@/components/common/safeHtml";
import { Heading2 } from "@/components/common/typography";
type Props = { data: any };

const VoiceOfTrust = ({ data }: Props) => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useScrollSlideUp({ targetRef, containerRef, scrub: 3.5, y: 50 });

  return (
    <div ref={containerRef}>
      <TopRightSplitedBanner
        bgImage={data?.cover}
        contentClassName="dark:bg-[#1C1C1F] bg-[#FFFFFF]"
      >
        <div
          ref={targetRef}
          className="md:mb-0 mb-24 bg-[#414042] w-[350px] lg:w-[491px] aspect-[350/180] lg:aspect-[491/514] flex flex-col justify-center items-center mx-auto lg:mx-0 "
        >
          <Heading2 className="!text-white z-20">
            <SafeHtml content={data?.headline} />
          </Heading2>
          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
          <PrimaryButton
            variant="light"
          >
            Learn More
          </PrimaryButton>
        </div>
      </TopRightSplitedBanner>
    </div>
  );
};

export default VoiceOfTrust;
