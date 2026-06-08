"use client";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import HoverExpandSlider from "@/components/common/slider/HoverExpandSlider";
import { Heading2 } from "@/components/common/typography";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const PreviousEvents = ({ data }: any) => {
  const router = useRouter();
  const handleRedirect = (slug: string) => () => {
    router.push(`/insights/events/${slug}`);
  };

  return (
    <div className="pb-10">
      <div className="md:mb-10 mb-24 md:text-left text-start">
        <Heading2>
          <SafeHtml content={data?.headline} />
        </Heading2>
      </div>

      {data?.items && data?.items.length > 0 && (
        <HoverExpandSlider
          items={data.items}
          controlClassName="!-top-[2rem] md:-top-24 top-[100%] z-[10]"
        >
          {(index, isActive) => {
            const item = data.items[index];
            return (
              <div
                onClick={handleRedirect(item.slug)}
                className="relative w-full h-full overflow-hidden group cursor-pointer"
              >
                <ImageComponent
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div
                    className={
                      " pt-4 transition-all duration-700 ease-out " +
                      (isActive
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-4 lg:opacity-0 lg:translate-y-4")
                    }
                  >
                    <h3 className="text-[14px] font-medium leading-relaxed text-g[#F3F3F3]">
                      {item.subtitle}
                    </h3>
                    <h3 className="text-lg font-medium leading-relaxed text-[#F3F3F3]">
                      {item.title}
                    </h3>
                    <h3 className="text-lg font-medium leading-relaxed text-[#F3F3F3]">
                      {item.content}
                    </h3>
                  </div>
                </div>
              </div>
            );
          }}
        </HoverExpandSlider>
      )}
    </div>
  );
};

export default PreviousEvents;
