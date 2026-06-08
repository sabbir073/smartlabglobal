"use client";
import MediaCard from "@/components/common/cards/MediaCard";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const ProgramInitiatives = ({ data }: Props) => {
  return (
    <ContentContainer className="section-pt">
      <Heading2 className="!mb-1 lg:!mb-10">
        <SafeHtml content={data?.headline} />
      </Heading2>

      <CarouselComponent containerClassName="md:mb-0 mb-10" controlClassName="md:-top-24 top-[100%]  z-[10] 2xl:right-0 lg:right-0 lg:!pr-0">
        {data?.items?.map((item, index) => (
          <MediaCard
            key={index}
            data={item}
            // containerClassName="flex-col-reverse"
            containerClassName="flex-col-reverse md:gap-[69px] gap-[40px]"
            contentContainerClassName="md:auto w-full md:max-w-[455px] max-w-full  text-center md:text-start"
            imageContainerClassName="md:w-auto w-full md:aspect-[607/500] aspect-[350/276] object-cover"
          />
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};

export default ProgramInitiatives;
