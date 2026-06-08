import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const IndustryDetailsInitiatives = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py dark:bg-[#1C1C1F]">
      <Heading2 className="">
        <SafeHtml content={data?.headline} />
      </Heading2>

      <CarouselComponent
        controlClassName="md:-top-[70px] top-[calc(100%+16px)]  z-[10]"
        containerClassName="md:mb-0 mb-16"
      >
        {data?.items.map((item, index) => (
          <div
            className="flex flex-col gap-4 items-center justify-between md:flex-row w-full"
            key={index}
          >
            <div className="md:w-1/2 w-full pr-0 md:pr-16">
              <div
                className=""
              // dangerouslySetInnerHTML={{ __html: item.content }}
              >
                <h3 className="heading-3 !font-semibold !mt-0 !mb-[30px]">
                  <SafeHtml content={item.title} />
                </h3>
                <Content className=" md:mt-8 mt-4">
                  <SafeHtml content={item.excerpt} />
                </Content>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <ImageComponent
                src={item.cover}
                alt=""
                className="w-full aspect-[605/530]"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};

export default IndustryDetailsInitiatives;
