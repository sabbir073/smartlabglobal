"use client";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const CorePillars = ({ data }: Props) => {
  return (
    <div className="section-pt">
      <ContentContainer>
        <div className="text-left pb-10 lg:pb-[58px]">
          <Heading2>
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className="max-w-[790px] w-full md:mx-0 mx-auto ">
            <SafeHtml content={data.excerpt} />
          </Content>
        </div>

        <div className="md:hidden block relative">
          <CarouselComponent
            controlClassName="-bottom-12 top-auto md:block hidden"
            showPagination
            containerClassName=""
            slidesPerView={1.1}
            breakpoints={{
              768: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
            }}
          >
            {data?.items?.map((service: any, index: number) => (
              <CorePillarsCard key={index} item={service} />
            ))}
          </CarouselComponent>
        </div>

        <div className="grid-cols-1  md:grid-cols-3 gap-5 hidden md:grid">
          {data?.items?.map((item, index) => (
            <CorePillarsCard key={index} item={item} />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};

export default CorePillars;

const CorePillarsCard = ({ item }: { item: any }) => {
  return (
    <div className="  w-full min-h-[274px] relative ">
      <ImageComponent
        src={item.cover}
        alt="bg"
        className="object-cover w-full h-full absolute top-0 left-0 z-1"
      />
      <div className="bg-[#4D4D4FF2] absolute w-full h-full top-0 left-0 p-6 pb-12 z-2" >
        <h3 className="!text-[#F4F4F4] !not-italic mb-8 heading-3 !font-[600]">
          {item.title}
        </h3>
        <Content className="text-[#F4F4F4]">
          <SafeHtml content={item.excerpt} />
        </Content>
      </div>

    </div>
  );
};
