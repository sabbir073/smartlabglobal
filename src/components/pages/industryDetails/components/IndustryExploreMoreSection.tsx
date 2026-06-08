import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import HoverExpandSlider from "@/components/common/slider/HoverExpandSlider";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = { data: any };

const IndustryExploreMoreSection = ({ data }: Props) => {
  return (
    <ContentContainer
      disablePR
      className="mx-auto section-pb dark:bg-[#0D0D0D]"
    >
      <div className="md:mb-10 mb-24 md:text-left text-start">
        <Heading2>
          <SafeHtml content={data?.title || "Explore More"} />
        </Heading2>
      </div>

      {data?.items && data?.items.length > 0 && (
        <HoverExpandSlider
          items={data.items}
          controlClassName="md:-top-24 top-[100%] z-[10]"
        >
          {(index, isActive) => {
            const item = data.items[index];
            return (
              <div className="relative w-full h-full overflow-hidden group cursor-pointer">
                <ImageComponent
                  src={item.cover}
                  alt={`service-${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div
                    className={
                      "border-t border-white/30 pt-4 transition-all duration-700 ease-out " +
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
            );
          }}
        </HoverExpandSlider>
      )}
    </ContentContainer>
  );
};

export default IndustryExploreMoreSection;
