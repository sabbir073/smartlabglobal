"use client";
import ThemedIconCard from "@/components/common/cards/ThemedIconCard";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import MobileSwiperTabs from "@/components/common/slider/mobileSwiper/MobileSwiperTabs";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import TopLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/topLeftSplitedBanner";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";

const EmployeeBenefits = ({ data }: { data: any }) => {
  return (
    <div>
      <TopLeftSplitedBanner bgImage={data.cover}>
        <div className="relative lg:h-auto ">
          <div className="  bg-[#FFFFFFDE] dark:bg-[#1C1C1FDE] p-2 md:p-8">
            <Heading2 className="!mb-5">
              <SafeHtml content={data.headline} />
            </Heading2>
            <Content>
              <SafeHtml content={data.excerpt} />
            </Content>
            <div className="lg:pb-8 lg:mt-8">
              <div className="lg:flex flex-wrap 2xl:gap-8 gap-4 hidden">
                {data.items.map((item: any, i: number) => (
                  <ThemedIconCard data={item} key={i} className="px-4" />
                ))}
              </div>
              <div className="absolute md:pb-16 top-full left-0 w-full  lg:hidden block bg-[#FFFFFFDE] dark:bg-[#1f1c1cde]">
                <MobileSwiperTabs data={data} />
                {/* <CarouselComponent
                  pagination={true}
                  modules={[Pagination]}
                  controlClassName="!hidden"
                  slideClassName="flex justify-center items-center"
                >
                  {data.items.map((item: any, i: number) => (
                    <ThemedIconCard data={item} key={i} />
                  ))}
                </CarouselComponent> */}
              </div>
            </div>
          </div>
        </div>
      </TopLeftSplitedBanner>
    </div>
  );
};

export default EmployeeBenefits;
