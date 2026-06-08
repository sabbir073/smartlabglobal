import { InvertedQuotationIcon } from "@/assets/icons";
import SafeHtml from "@/components/common/safeHtml";
import ContentContainer from "@/components/layout/container/contentContainer";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const SustainabilityQuote = ({ data }: Props) => {
  return (
    <OverflowSectionWrapper
      WrapperClassName="pt-12 pb-24"
      bottomBgClassName="bg-[#414042] h-[58%]"
      topBgClassName="bg-[#fff] dark:bg-[#1C1C1F]"
    >
      <ContentContainer className="relative z-[10] ">
        <div className="bg-[#F4F4F4] dark:bg-[#1C1C1F] pb-12 pt-8 px-8">
          <div className="md:mb-[40px] mb-[10px]">
            <InvertedQuotationIcon fill="#4D4D4F" />
          </div>
          <SafeHtml content={data.excerpt} />
          {/* <div className='mt-8' dangerouslySetInnerHTML={{ __html: sustainabilityQuoteText }} /> */}
        </div>
      </ContentContainer>
    </OverflowSectionWrapper>
  );
};

export default SustainabilityQuote;

const sustainabilityQuoteText = `
  <p class="quoteText">
    <span>As a globally connected organization, Smart-Lab Global is dedicated to embedding sustainability into every aspect of our  
    </span> 
    <span class="red-text">innovation, operations, and impact. </span>
  </p>
`;
