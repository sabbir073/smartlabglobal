import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const BeliefQuote = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py">
      <Heading2>
        <SafeHtml content={data?.headline} />
      </Heading2>
      <Content className="font-[400] md:text-[30px] text-[14px] md:leading-[48px] leading-[28px] w-full">
        <SafeHtml content={data?.excerpt} />
      </Content>
    </ContentContainer>
  );
};

export default BeliefQuote;
