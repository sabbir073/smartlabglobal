"use client";
import TabBar from "@/components/common/tab-bar";
import ContentContainer from "@/components/layout/container/contentContainer";
import React, { useLayoutEffect, useRef, useState } from "react";
import ImageComponent from "@/components/common/image";
import gsap from "gsap";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Heading2 } from "@/components/common/typography";
type Logo = {
  title?: string;
  thumb?: string;
  thumbSd?: string;
};

type Alliance = {
  name: string;
  logos: Logo[];
};

type Props = {
  data: any;
};

const KeyAlliance = ({ data }: Props) => {
  const allianceList: Alliance[] = transformAllianceData(data);
  const [selectedAlliance, setSelectedAlliance] = useState(allianceList[0]);
  const logoGridRef = useRef<HTMLDivElement | null>(null);
  const logos = selectedAlliance?.logos || [];

  const { isDarkMode } = useDarkMode();

  // console.log({ data })

  // Animate logos on mount or selectedAlliance change
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo-item", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      });
    }, logoGridRef);

    return () => ctx.revert(); // Clean up GSAP
  }, [selectedAlliance]);

  return (
    <section>
      <ContentContainer className="section-py">
        <Heading2 className="text-center pb-[22px]">{data.title}</Heading2>

        <TabBar
          data={allianceList}
          displayKey="name"
          value={selectedAlliance}
          onItemClick={({ item }) => setSelectedAlliance(item)}
        />

        <div
          ref={logoGridRef}
          // key={selectedAlliance.slug} // force DOM remount on tab switch
          className="flex flex-wrap gap-8 justify-center md:pt-[54px] pt-[30px]"
        >
          {logos.map((logo: any, index: number) => (
            <div
              key={index}
              className="logo-item w-[25%] sm:w-1/4 md:w-1/6  flex items-center justify-center transition-shadow duration-200 group relative "
            >
              <ImageComponent
                alt=""
                className="w-full h-auto object-contain"
                src={isDarkMode ? logo?.thumbSd : logo?.thumb}
              />
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default KeyAlliance;

const transformAllianceData = (keyAlliances: any): Alliance[] => {
  return (
    keyAlliances?.items?.map((group: any) => ({
      name: group.title,
      logos: group.alliance_items?.map((item: any) => ({
        title: item.title,
        thumb: item.thumb || "",
        thumbSd: item.thumbSd || "",
      })),
    })) || []
  );
};
