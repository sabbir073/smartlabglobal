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
};
const chunkArray = <T,>(arr: T[], size: number): T[][] =>
  arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, [] as T[][]);
const ServiceAreaOfFocus = ({ data, containerClassName }: Props) => {
  const chunkedItems = chunkArray(data?.items || [], 9);
  return (
    <div className={cn("mx-auto", containerClassName)}>
      <ContentContainer>
        <div className=" md:text-left sm:text-center ">
          <Heading2>
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className="max-w-[700px] md:mx-0 mx-auto mb-[40px]">
            <SafeHtml content={data.excerpt} />
          </Content>
        </div>
      </ContentContainer>
      <div className="">
        <ContentContainer>
          <div className="md:flex hidden flex-wrap gap-7 items-stretch">
            <CarouselComponent
              controlClassName=" "
              showPagination={true}
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
              {chunkedItems?.map((chunk, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className="grid grid-cols-3 gap-[30px] items-stretch "
                >
                  {chunk?.map((service, index: number) => (
                    <div
                      className={`text-white w-full  h-auto relative cursor-pointer overflow-hidden group`}
                      key={index}
                    >
                      <ImageComponent
                        src={service.cover}
                        alt={service?.title}
                        className="absolute top-0 left-0  object-cover w-full h-full transform transition-all  duration-[1000ms] ease-in group-hover:scale-110 z-[-1]"
                      />
                      <div className="bg-[#000000CC] dark:text-[#F4F4F4] p-[30px] z-50 text-[14px] h-full flex flex-col gap-[30px] ">
                        <p
                          className={`text-[18px] font-medium leading-[1.2] transition-all  duration-[1000ms] ease-in-out overflow-hidden z-10`}
                        >
                          {service?.title}
                        </p>
                        <Content className="text-[#F4F4F4] text-[14px]">
                          {service?.excerpt}
                        </Content>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </CarouselComponent>
          </div>
          <div className="md:hidden block relative">
            <CarouselComponent
              controlClassName="-bottom-12 top-auto md:block hidden"
              showPagination
              containerClassName=""
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
              {data?.items.map((service: any, index: number) => (
                // <SwiperSlide className="transition-all duration-[1500ms] ease-in-out" key={index}>
                <div
                  className={`text-white lg:w-[calc(100%/3-19px)] md:w-[calc(100%/2-14px)] flex relative h-auto cursor-pointer`}
                  key={index}
                >
                  <ImageComponent
                    src={service.cover}
                    alt={`service-${index}`}
                    className="absolute top-0 left-0  object-cover w-full h-full transform transition-all  duration-[1000ms] ease-in-out z-[-1]"
                  />
                  <div className="bg-[#000000CC] dark:text-[#F4F4F4]  p-[30px] z-50 text-[14px] flex flex-col gap-[30px] ">
                    <p
                      className={`text-[18px] font-medium leading-[1.2] transition-all duration-[1000ms] ease-in-out overflow-hidden z-10 min-h-10`}
                    >
                      {service?.title}
                    </p>
                    <Content className="text-[#F4F4F4] text-[14px] flex-grow h-full">
                      {service?.excerpt}
                    </Content>
                  </div>
                </div>
              ))}
            </CarouselComponent>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};

export default ServiceAreaOfFocus;
