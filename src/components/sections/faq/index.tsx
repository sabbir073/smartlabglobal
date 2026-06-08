import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import FaqSection from "./FaqSection";
import { useState } from "react";

export default function Faq({ data }: { data: IPageSectionData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };
  return (
    <div className="section-py bg-[#E6E7E8] dark:bg-[#1C1C1F] ">
      <ContentContainer>
        <Heading2 className="text-center text-[#414042] dark:text-white">
          FAQ
        </Heading2>
        <div className="flex flex-col gap-6 max-w-[794px] mx-auto">
          {data?.items?.map((faq, index) => (
            <FaqSection
              active={activeIndex === index}
              setActive={() => handleToggle(index)}
              key={index}
              faq={{
                title: faq?.title,
                content: faq?.excerpt ?? faq?.description ?? "",
              }}
              id={index}
            />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
}
