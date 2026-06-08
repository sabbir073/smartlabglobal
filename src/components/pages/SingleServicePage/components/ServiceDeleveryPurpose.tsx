import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import CarouselComponent from "@/components/common/slider/slider";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";
type Props = {
  data: IPageSectionData;
  containerClassName?: string;
  cardClassName?: string;
};
const ServiceDeliverPurpose = ({
  data,
  cardClassName,
  containerClassName,
}: Props) => {
  return (
    <div className={cn("", containerClassName)}>
      <ContentContainer className=" md:text-left text-center  pb-16">
        <Heading2>
          <SafeHtml content={data.headline} />
        </Heading2>
        <Content className="max-w-[748px] md:mx-0 mx-auto md:mb-0 mb-[40px]">
          <SafeHtml content={data.excerpt} />
        </Content>
      </ContentContainer>
      <div className="">
        <ContentContainer>
          <CarouselComponent
            controlClassName="md:!right-0 !pr-0 "
            showPagination={true}
            slidesPerView={1.1}
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
            {data?.items?.map((service, index: number) => (
              // <SwiperSlide className="transition-all duration-[1500ms] ease-in-out" key={index}>
              <div
                className={`text-white flex flex-col w-full h-auto group `}
                key={index}
              >
                <ImageComponent
                  src={service.cover}
                  alt={`service-${index}`}
                  className="object-cover w-full !aspect-[390/240] capability-bg  transform transition-all  duration-[1000ms] ease-in-out grayscale group-hover:grayscale-0"
                />
                <div
                  className={cn(
                    "bg-[#414042] p-[25px] text-white  flex-1 flex flex-col !gap-[30px]",
                    cardClassName,
                  )}
                >
                  <p
                    className={`text-[18px] font-medium leading-[1.66] transition-all  duration-[1000ms] ease-in-out overflow-hidden z-10  `}
                  >
                    <SafeHtml content={service.title} />
                  </p>
                  {/* <Content> */}
                  <p className="!text-[14px]">
                    <SafeHtml
                      className="cursor-default"
                      content={service.excerpt}
                    />
                  </p>
                  {/* </Content> */}
                </div>
              </div>
            ))}
          </CarouselComponent>
        </ContentContainer>
      </div>
    </div>
  );
};

export default ServiceDeliverPurpose;
