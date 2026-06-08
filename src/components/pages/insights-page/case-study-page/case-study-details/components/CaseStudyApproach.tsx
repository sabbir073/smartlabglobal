"use client";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const CaseStudyApproach = ({ data }: Props) => {
  return (
    <ContentContainer className="section-pb">
      <div className="flex md:flex-row flex-col mb-8 md:mb-16 ">
        <div className="md:w-[50%] w-full">
          <Heading2 className=" md:w-[60%] w-full md:!mb-0 mb-5">
            <SafeHtml content={data?.headline} />
          </Heading2>
        </div>
        <div className="md:w-[50%] w-full ">
          <Content>
            <SafeHtml content={data?.excerpt} />
          </Content>
        </div>
      </div>

      <div className="md:hidden block relative">
        <CarouselComponent
          controlClassName="-bottom-12 top-auto md:block hidden"
          showPagination
          containerClassName=""
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {data?.items.map((service: any, index: number) => (
            <ApproachCard key={index} item={service} />
          ))}
        </CarouselComponent>
      </div>
      <div className="flex-wrap md:gap-[30px] gap-5 mt-[50px] mb-[100px] hidden md:flex">
        {data?.items?.map((item, index: number) => (
          <ApproachCard key={index} item={item} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default CaseStudyApproach;

const ApproachCard = ({ item }: { item: any }) => {
  return (
    <div className="bg-[#F4F4F4] dark:bg-[#4D4D4F] px-5 py-7 lg:w-[calc(100%/3-20px)] md:w-[calc(100%/2-15px)] w-full">
      <h4 className="heading-3 !not-italic !font-medium mb-4 !leading-[1.3]">
        <SafeHtml content={item?.title} />
      </h4>
      <Content>
        <SafeHtml content={item?.excerpt} />
      </Content>
    </div>
  );
};
