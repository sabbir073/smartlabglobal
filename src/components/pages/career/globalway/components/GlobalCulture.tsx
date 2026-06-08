"use client";
import ExpandableContent from "@/components/common/expandableContent";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const GlobalCulture = ({ data }: Props) => {
  return (
    <div className="section-pt">
      <ContentContainer>
        <div className=" md:text-left text-center  pb-[50px]">
          <Heading2>
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className="max-w-[790px] w-full md:mx-0 mx-auto md:mb-0 mb-[40px]">
            <ExpandableContent className="text-left">
              <SafeHtml content={data.excerpt} />
            </ExpandableContent>
          </Content>
        </div>

        <CarouselComponent
          controlClassName="  "
          slideClassName="!pb-0"
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {[...data?.items]?.map((service, index: number) => (
            <div key={index} className="text-white">
              <ImageComponent
                src={service.cover}
                alt={service.title}
                className="w-full object-cover md:aspect-[390/374] aspect-[350/276] capability-bg transform transition-all duration-[1000ms] ease-in-out"
              />
              <div className="bg-[#ffffff] dark:bg-[#1C1C1F] text-[#414042] dark:text-[#F4F4F4] pt-6">
                <p className="max-w-[310px] text-[18px] font-medium leading-[1.66] transition-all duration-[1000ms] ease-in-out overflow-hidden z-10">
                  <SafeHtml content={service.title} />
                </p>
              </div>
            </div>
          ))}
        </CarouselComponent>
      </ContentContainer>
    </div>
  );
};

export default GlobalCulture;
