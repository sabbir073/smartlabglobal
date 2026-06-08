"use client";
import ImageComponent from "@/components/common/image";
import CarouselComponent from "@/components/common/slider/slider";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import { Pagination } from "swiper/modules";
import "./styles.scss";
import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
type Props = { data: any };

const FeaturedClient = ({ data }: Props) => {
  return (
    <div className="mx-auto section-py">
      <ContentContainer>
        <div className="text-left ">
          <Heading2 className="capitalize">
            <SafeHtml content={data.headline} />
          </Heading2>
        </div>
      </ContentContainer>
      <div className="client-highlight">
        <ContentContainer>
          <CarouselComponent
            controlClassName="right-0 lg:pr-0 pr-0 lg:mr-0 mr-0 hidden lg:flex"
            slideClassName="lg:!pb-0 !pb-12 "
            slidesPerView={1.05}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              991: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              600: {
                slidesPerView: 1.1,
                spaceBetween: 0,
              },
            }}
          >
            {data.items?.map((service: ISectionItem, index: number) => (
              <div
                className="relative group w-full md:!aspect-[400/380] !aspect-[340/400] overflow-hidden text-white cursor-default"
                key={index}
              >
                <div className="relative w-full h-full">
                  <ImageComponent
                    src={service?.cover}
                    alt={`service-${index}`}
                    className="object-cover w-full h-full capability-bg transform transition-all duration-500 ease-in-out absolute bottom-0 left-0  z-[-1] sm:grayscale group-hover:grayscale-0 "
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute bottom-0 left-0 w-full text-[#FFFFFF] dark:text-[#FFFFFF] md:p-[30px] p-[20px] ">
                    {/* <div className="w-full pb-10 z-1">
                      <ImageComponent
                        src={isDarkMode ? service?.icon_dark : service?.icon}
                        alt={`service-${index}`}
                        className="object-cover w-auto h-[52px]  transform transition-all duration-[1000ms] ease-in-out"
                      />
                    </div> */}
                    <Content className="!text-[#FFFFFF] sm:translate-y-0 group-hover:translate-y-0 transition-all duration-500 ease-in-out sm:invisible sm:opacity-0 group-hover:opacity-100 group-hover:visible">
                      <SafeHtml content={service?.excerpt} />
                    </Content>
                  </div>
                </div>
              </div>
            ))}
          </CarouselComponent>
        </ContentContainer>
      </div>
    </div>
  );
};

export default FeaturedClient;
