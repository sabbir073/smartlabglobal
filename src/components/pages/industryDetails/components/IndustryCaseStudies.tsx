import CoverFlowSlider from "@/components/common/slider/CoverFlowSlider";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const IndustryCaseStudies = ({ data }: Props) => {
  return (
    <ContentContainer className="bg-[#1E1E1E] dark:bg-[#1E1E1E] section-pt md:pb-16 pb-[40px] px-0">
      <CoverFlowSlider
        headline={"Case Studies"}
        headlineClassName="text-[#FFFFFF]"
        items={data.items}
        arrowHasWhiteBorder
      />
    </ContentContainer>
  );
};

export default IndustryCaseStudies;
