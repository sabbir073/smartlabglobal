"use client";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React, { useState } from "react";

type Props = { data: IPageSectionData };

const KeyHighlight = ({ data }: Props) => {
  const [selectedKeyHighlight, setSelectedKeyHighlight] = useState<any>(
    data?.items[0]
  );
  return (
    <section className="relative  overflow-hidden mb-20">
      <ImageComponent
        src={data.cover}
        width={1456}
        height={819}
        alt="hero-bg"
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <ContentContainer>
        <div className="relative z-10  mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left: Key Highlights Title */}
            <div className="text-center lg:text-left">
              <Heading2 className=" !text-white text-center md:text-start">
                <SafeHtml content={data.headline} />
              </Heading2>
            </div>

            {/* Center: Circular Element */}
            <div className="flex justify-center">
              <div className="w-[208px] h-[208px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden">
                <ImageComponent
                  src={selectedKeyHighlight?.cover || ""}
                  width={280}
                  height={280}
                  alt="hero-bg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Highlights List */}
            <div className="space-y-6">
              {data?.items.map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedKeyHighlight(item)}
                  className="group cursor-pointer transform transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center md:justify-start items-center space-x-4 p-4 backdrop-blur-sm border-b border-[#FFFFFF66] hover:border-white/20 transition-all duration-300">
                    <span className="text-white font-[400] font-poppins text-[24px] ">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

// export default KeyHighlight;
