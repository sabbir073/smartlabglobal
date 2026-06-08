"use client";
import React from "react";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import HoverExpandSlider from "@/components/common/slider/HoverExpandSlider";
import ImageComponent from "@/components/common/image";
import ServiceExplore from "../../SingleServicePage/components/ServiceExplore";
import NavLink from "@/components/common/link/NavLink";

type Props = {
  data: IPageSectionData;
};
const ExploreSlider = ({ data }: Props) => {
  return (
    <>
      <ContentContainer
        disablePR
        className="  mx-auto  "
      >
        <div className="md:mb-10 mb-24 md:text-left text-start ">
          <Heading2>Explore More</Heading2>
        </div>

        <HoverExpandSlider
          items={data.items}
          controlClassName="md:-top-24 top-[100%] z-[10]"
        >
          {(index, isActive) => {
            const item: any = data.items[index];
            const href = item?.parent?.parent_slug ? `${item.parent.parent_slug}/${item.slug}` : `/${item.slug}`;
            return (
              <NavLink href={href}>
                <div className="relative w-full h-full overflow-hidden group cursor-pointer ">
                  <ImageComponent
                    src={item.cover}
                    alt={`service-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div
                      className={
                        "border-t border-[#F4F4F4] pt-4 transition-all duration-700 ease-out " +
                        (isActive
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform translate-y-4 lg:opacity-0 lg:translate-y-4")
                      }
                    >
                      <h3 className="text-lg font-medium leading-relaxed text-gray-200">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          }}
        </HoverExpandSlider>
      </ContentContainer>
    </>
  );
};

export default ExploreSlider;
