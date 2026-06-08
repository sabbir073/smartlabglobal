"use client";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import { Pagination } from "swiper/modules";

type Props = { data: IPageSectionData };

const LifeAtSglSection = ({ data }: Props) => {
  return (
    <ContentContainer className="mx-auto bg-[#FFFFFF] dark:bg-[#1C1C1F] section-pt">
      <div className="text-left md:max-w-[80%] w-full pb-9 md:pb-16">
        <Heading2 className="capitalize  !mb-5 text-start">
          <SafeHtml content={data?.headline} />
        </Heading2>
        <Content className="text-left">
          <SafeHtml content={data?.excerpt} />
        </Content>
      </div>
      <CarouselComponent
        controlClassName=" hidden lg:flex"
        slideClassName="mb-4"
        slidesPerView={1.1}
        pagination
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
      >
        {data.items?.map((service, index: number) => (
          <div
            key={index}
            className="relative group md:aspect-[390/420] aspect-[340/276]  overflow-hidden text-white  cursor-pointer"
          >
            <div className="relative w-full h-full  mx-auto">
              <ImageComponent
                src={service?.cover}
                alt={`service-${index}`}
                className="object-cover w-full h-full capability-bg transform transition-all duration-[1000ms] ease-in-out "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full text-white p-6 overflow-hidden flex flex-col justify-start">
              {/* Title always visible */}
              <div className="w-full !aspect-[280/52]">
                <h3 className="heading-3 !font-medium !text-white !not-italic !leading-[120%]">
                  {service?.title}
                </h3>
              </div>

              {/* Excerpt reveals on hover */}
              <div className=" transition-all duration-[500ms] ease-in-out overflow-hidden z-10 transform   lg:group-hover:opacity-100 opacity-100 lg:opacity-0">
                <Content className=" !text-white">
                  <SafeHtml content={service?.excerpt} />
                </Content>
              </div>
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};

export default LifeAtSglSection;
