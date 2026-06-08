"use client";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import { cn } from "@/utils/helpers/cn";
import { Heading2 } from "@/components/common/typography";
import ActiveImageShow from "@/components/common/slider/ActiveImageShow";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
};

const KeyHighlight = ({ data, containerClassName }: Props) => {
  return (
    <ContentContainer
      className={cn("relative h-full section-py", containerClassName)}
    >
      {/* Background */}
      <ImageComponent
        src={data?.cover}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-[#00000099] z-[-1]" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5.52vw] z-10 h-full">
        {/* Heading */}
        <Heading2 className="text-[#F4F4F4] capitalize text-center md:text-start">
          <SafeHtml content={data.headline} />
        </Heading2>

        <ActiveImageShow data={data} />
      </div>
    </ContentContainer>
  );
};

export default KeyHighlight;
