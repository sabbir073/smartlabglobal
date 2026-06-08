import OverviewColumns from "@/components/common/cards/OverviewColumns";
import SafeHtml from "@/components/common/safeHtml";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";
import { useCascadeSlideIn } from "@/hooks/gsap/useCascadeSlideIn";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  data: IPageSectionData;
};

const SustainabilityKeyPillars = ({ data }: Props) => {
  const targetRef = useRef(null);
  useCascadeSlideIn({
    target: targetRef,
    x: -100,
    y: 0,
    duration: 1,
    stagger: 0.04,
  });
  const [items, setItems] = useState<{ title: string; content: string }[]>([]);
  useEffect(() => {
    let dataItems = data?.items?.map((item) => ({
      title: item.title,
      content: item.excerpt,
    }));
    setItems(dataItems);
  }, [data]);

  return (
    <OverflowSectionWrapper
      WrapperClassName="relative md:py-10 pb-10"
      topBgClassName="bg-[#fff] dark:bg-[#1C1C1F]"
      bottomBgClassName="bg-[#fff] dark:bg-[#1C1C1F]"
    >
      <ContentContainer className="">
        <Heading2 className="relative text-center capitalize z-[10]">
          <SafeHtml content={data.headline} />
        </Heading2>
        <div ref={targetRef}>
          <OverviewColumns
            data={data?.items.map((item) => ({
              ...item,
              title: item.title,
              subtitle: item.subtitle,
              content: item.excerpt,
            }))}
            cardClassName=" text-center justify-start"
            titleClassName="md:!text-[24px] !text-[18px]"
          />
        </div>
      </ContentContainer>
    </OverflowSectionWrapper>
  );
};

export default SustainabilityKeyPillars;

const sustainabilityPillars = [
  {
    title: "Environmental Impact",
    content:
      "Ad litora torquent per conubia nostra inceptos him aeos. Tempus leo eu aean sed diam urna tepor.",
  },
  {
    title: "Social Responsibility",
    content:
      "Ad litora torquent per conubia nostra inceptos him aeos. Tempus leo eu aean sed diam urna tepor.",
  },
  {
    title: "Ethical Governance",
    content:
      "Ad litora torquent per conubia nostra inceptos him aeos. Tempus leo eu aean sed diam urna tepor.",
  },
  {
    title: "Innovation for Sustainability",
    content:
      "Ad litora torquent per conubia nostra inceptos him aeos. Tempus leo eu aean sed diam urna tepor.",
  },
];
