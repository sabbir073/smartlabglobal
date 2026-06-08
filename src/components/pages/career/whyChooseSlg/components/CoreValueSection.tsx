"use client";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import TopLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/topLeftSplitedBanner";
import React from "react";
import ThemedIconCard from "@/components/common/cards/ThemedIconCard";
import MobileSwiperTabs from "@/components/common/slider/mobileSwiper/MobileSwiperTabs";

type Props = { data: IPageSectionData };

const CoreValueSection = ({ data }: Props) => {
  return (
    <div>
      <TopLeftSplitedBanner bgImage={data.cover}>
        <div className="relative md:h-auto ">
          <div className="md:mb-0 md:pb-0   bg-[#FFFFFFDE] dark:bg-[#1C1C1FDE] p-8 max-w-[1090px] mx-auto backdrop-blur-md">
            <Heading2 className="!mb-5">
              <SafeHtml content={data.headline} />
            </Heading2>
            <Content>
              <SafeHtml content={data.excerpt} />{" "}
            </Content>
            <div className="py-8 md:block hidden ">
              <div className="grid grid-cols-3 md:gap-14 gap-4">
                {data.items.map((item: any, i: number) => (
                  <ThemedIconCard data={item} key={i} className="!px-4" />
                ))}
              </div>
            </div>

            <div className="absolute pb-8 top-full left-0 w-full  md:hidden block bg-[#FFFFFFDE] dark:bg-[#2a2a2cde]">
              <MobileSwiperTabs data={data} />
              {/* <CarouselComponent
                pagination={true}
                modules={[Pagination]}
                controlClassName="!hidden"
                slideClassName="flex justify-center items-center"
              >
                {data.items.map((item, i: number) => (
                  <div key={i} className="pb-4">
                    <ThemedIconCard data={item} />
                  </div>
                ))}
              </CarouselComponent> */}
            </div>
          </div>
        </div>
      </TopLeftSplitedBanner>
    </div>
  );
};

export default CoreValueSection;
