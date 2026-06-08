import { Heading2 } from "@/components/common/typography";
import React from "react";
import CoverFlowSlider from "@/components/common/slider/CoverFlowSlider";
import ContentContainer from "@/components/layout/container/contentContainer";
// import CaseStudyData from "@/dummyData/caseStudiesData";
type Props = { data: any };

const CaseStudies = ({ data }: Props) => {
  return (
    <div className="mx-auto md:-mt-[6.09vw] -mt-[390px]">
      <ContentContainer className="md:text-left text-center px-0">
        {/* <Heading2>Case Studies</Heading2> */}
        <CoverFlowSlider
          headline={"Case Studies"}
          headlineClassName="text-[#414042] dark:text-[#F4F4F4] "
          items={data?.items}
        />
      </ContentContainer>
    </div>
  );
};

export default CaseStudies;
