import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import { useDarkMode } from "@/hooks/useDarkMode";
import CarouselComponent from "@/components/common/slider/slider";
import QuoteIcon from "@/assets/icons/QuoteIcon";
import SafeHtml from "@/components/common/safeHtml";
import { useIsMobile } from "@/hooks/useMobile";

type Props = {
  data: IPageSectionData;
};
export default function OurCulture({ data }: Props) {
  const { isDarkMode } = useDarkMode();
  const isMobile = useIsMobile();
  return (
    <ContentContainer className="">
      <Heading2>
        <SafeHtml content={data?.headline} />
      </Heading2>
      <Content className="md:max-w-[650px] mb-10">
        <SafeHtml content={data?.excerpt} />
      </Content>
      <CarouselComponent
        showPagination={true}
        controlClassName="md:-top-24 top-[100%] z-[10] 2xl:right-0 lg:right-0 hidden lg:flex"
        slideClassName=" md:pb-16"
        slidesPerView={isMobile ? 1.05 : 1}
      >
        {data?.items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-[61px] gap-[40px] items-center md:flex-row  "
          >
            <div className="md:w-auto w-full pr-0 md:max-w-[528px] max-w-auto flex flex-col items-center md:items-start">
              <span className="mb-3 inline-block">
                <QuoteIcon isDarkMode={isDarkMode} />
              </span>

              <Content className=" md:mt-8 mt-4 text-[#414042] dark:text-[#F4F4F4]">
                {/* <div>
                  <p class="text-[20px] text-center md:text-start">
                    "Innovation begins with people who care—about their work,
                    their team, and the world we're building together."
                  </p>
                  <p class="mt-2 flex items-center justify-center md:justify-start gap-1 text-center md:text-start">
                    <span class="w-[20px] h-[1px] dark:bg-[#F4F4F4] bg-[#414042]"></span>
                    Smart-Lab Global Team
                  </p>
                </div> */}

                <SafeHtml content={item.excerpt} />
              </Content>
            </div>
            <div className="md:w-auto w-full md:aspect-[607/500] aspect-[340/276]">
              <ImageComponent
                src={item.cover}
                alt="Sustainability Commitment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
}
