import CoverFlowSlider from "@/components/common/slider/CoverFlowSlider";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import { cn } from "@/utils/helpers/cn";
import React from "react";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
  headingClass?: string;
  arrowHasWhiteBorder?: boolean;
};

const ServiceCaseStudy = ({
  data,
  containerClassName,
  headingClass,
  arrowHasWhiteBorder = false,
}: Props) => {
  return (
    <ContentContainer
      className={cn(
        "py-16 bg-[#E6E7E8] dark:bg-[#1C1C1F] p-0",
        containerClassName,
      )}
    >
      <Heading2
        className={cn("md:text-start text-center pb-5 md:pb-0", headingClass)}
      >
        {data?.title}
      </Heading2>
      <CoverFlowSlider
        items={data?.items}
        arrowHasWhiteBorder={arrowHasWhiteBorder}
      />
    </ContentContainer>
  );
};

export default ServiceCaseStudy;
