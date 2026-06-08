import PrimaryButton from "@/components/common/button/PrimaryButton";
import SafeHtml from "@/components/common/safeHtml";
import CoverFlowSlider from "@/components/common/slider/CoverFlowSlider";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
import React from "react";

type Props = { data: any };

const SuccessStories = ({ data }: Props) => {
  return (
    <div className="mx-auto dark:bg-[#414042] bg-[#414042] section-pt">
      <ContentContainer className=" md:text-left text-center section-pb pt-16">
        <CoverFlowSlider headline={'Success Stories'} headlineClassName=" !text-white !dark:text-white" items={data?.items} arrowHasWhiteBorder={true} />
        <div className="flex justify-center">
          <PrimaryButton
            variant="outlined"
            href={routes.caseStudies}
            className="border-[#fff] hover:bg-[#F4F4F4] hover:text-[#414042] text-[#F4F4F4]  px-[30px] py-[14px] mt-10"
          >
            View More
          </PrimaryButton>
        </div>
      </ContentContainer>

    </div>
  );
};

export default SuccessStories;
