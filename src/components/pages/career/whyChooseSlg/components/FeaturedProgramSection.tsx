"use client";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = { data: any };

const FeaturedProgramSection = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py dark:bg-[#1C1C1F] ">
      <Heading2 className="">
        <SafeHtml content={"Featured Programs"} />
      </Heading2>
      <CarouselComponent controlClassName="md:-top-24 top-[100%] z-[10]">
        {data.items.map((item: any, index: number) => (
          <div
            className="flex flex-col md:gap-[69px] gap-[40px] items-center md:flex-row w-full "
            key={index}
          >
            <div className="md:auto w-full md:max-w-[455px] max-w-full text-start">
              <h3 className="font-poppins font-[600] text-[18px] italic tracking-normal leading-6 text-[#414042] dark:text-[#F4F4F4] pb-4">
                {item?.title}
              </h3>
              <SafeHtml content={item.excerpt} />
            </div>
            <div className="w-auto md:aspect-[676/647] object-cover">
              <ImageComponent
                src={item.cover}
                alt="Sustainability Commitment"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};

export default FeaturedProgramSection;
