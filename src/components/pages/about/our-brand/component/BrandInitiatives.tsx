import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import CarouselComponent from "@/components/common/slider/slider";
import SafeHtml from "@/components/common/safeHtml";

type Props = {
  data: IPageSectionData;
};
export default function BrandInitiatives({ data }: Props) {
  return (
    <ContentContainer className="section-py ">
      <Heading2>
        <SafeHtml content={data?.headline} />
      </Heading2>
      <CarouselComponent
        controlClassName="md:-top-20 lg:-top-20 top-[102%]  z-[10] 2xl:right-0 lg:right-0"
        slideClassName="md:pb-0 pb-5"
        containerClassName="mb-12"
      >
        {data?.items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col-reverse md:gap-[61px] gap-[40px] items-center md:flex-row  "
          >
            <div className="md:w-auto w-full md:aspect-[607/500] aspect-[350/276]">
              <ImageComponent
                src={item.cover}
                alt="Sustainability Commitment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-auto w-full pr-0 md:max-w-[528px] max-w-auto">
              <div>
                <h3 className=" !font-[600] md:not-italic italic md:text-[24px] text-[14px] text-[#414042] dark:text-[#F4F4F4]">
                  <SafeHtml content={item.title} />
                </h3>
                <Content className="md:mt-8 mt-4">
                  <SafeHtml content={item.excerpt} />
                </Content>
              </div>
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
}

