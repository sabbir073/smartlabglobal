import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import CarouselComponent from "@/components/common/slider/slider";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import routes from "@/config/routes";
import SafeHtml from "@/components/common/safeHtml";
import { AddIcon } from "./NewsHighlights";
import { useIsMobile } from "@/hooks/useMobile";
import NavLink from "@/components/common/link/NavLink";
type Props = {
  data: IPageSectionData;
};

export default function FeaturedEvents({ data }: Props) {
  const isMobile = useIsMobile();
  return (
    <ContentContainer>
      <Heading2 className="mb-0 md:mb-16">
        <SafeHtml content={data.headline} />
      </Heading2>
      <CarouselComponent
        controlClassName="md:-top-24 top-[100%]  z-[10] 2xl:right-0 lg:right-0"
        slideClassName="md:pb-0 pb-5"
      >
        {data?.items?.slice(0, 8)?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-4 gap-10 items-center md:flex-row  w-full"
          >
            <div className="md:w-1/2 w-full pr-0 lg:pr-16 md:pr-8">
              <h3 className="heading-3 !font-semibold !leading-[30px]">
                <SafeHtml content={item.title} />
              </h3>
              <Content className="md:mt-8 mt-4">
                <SafeHtml content={item.excerpt} />
              </Content>

              <NavLink href={routes.events}>
                {isMobile ? (
                  <div className="font-poppins text-[14px] font-[600] flex gap-2 items-center px-[0px] py-[14px] mt-5 md:mt-10 border-none group text-[#414042] dark:text-[#F4F4F4]">
                    Explore All Events <AddIcon />
                  </div>
                ) : (
                  <PrimaryButton
                    variant="outlined"
                    className="px-[30px] py-[14px] mt-10"
                  >
                    Explore All Events
                  </PrimaryButton>
                )}
              </NavLink>
            </div>
            <div className="md:w-1/2 w-full">
              <ImageComponent
                src={item?.thumb ? item.thumb : item.cover}
                alt="Sustainability Commitment"
                className="w-full aspect-[676/769] object-cover object-center"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
}
