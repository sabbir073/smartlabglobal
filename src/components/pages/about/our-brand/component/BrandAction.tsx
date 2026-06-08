import React, { useState } from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading1, Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import { useDarkMode } from "@/hooks/useDarkMode";
import CarouselComponent from "@/components/common/slider/slider";
import SustainabilityCommitment from "@/assets/images/dummy/about/sustainability-comitment.png";
import SafeHtml from "@/components/common/safeHtml";
type Props = {
  data: IPageSectionData;
};
export default function BrandAction({ data }: Props) {
  return (
    <ContentContainer className="section-py dark:bg-[#1C1C1F] bg-[#E6E7E8]">
      <Heading2>
        <SafeHtml content={data?.headline} />
      </Heading2>
      <CarouselComponent
        controlClassName="md:-top-20 lg:-top-20 top-[102%]  z-[10] 2xl:right-0 lg:right-0"
        slideClassName="md:pb-0 pb-5"
        containerClassName="md:mb-0 mb-16"
      >
        {data?.items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-[61px] gap-[40px] items-center md:flex-row  justify-between"
          >
            <div className="md:w-auto w-full pr-0 md:max-w-[528px] max-w-auto">
              {/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
              <h3 className="heading-3 !font-[600] !text-[14px] md:!text-[18px] italic">
                <SafeHtml content={item.title} />
              </h3>
              <Content className="md:mt-8 mt-4">
                <SafeHtml content={item.excerpt} />
              </Content>
            </div>
            <div className="md:w-auto w-full md:aspect-[607/500] aspect-[350/276]">
              <ImageComponent
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
}
