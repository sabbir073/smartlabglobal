import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const LeadershipPhilosophy = ({ data }: Props) => {
  return (
    <ContentContainer className="pt-[75px] pb-10 lg:py-24">
      <Heading2>
        <SafeHtml content={data?.headline} />
      </Heading2>
      <Content className="max-w-[936px] w-full">
        <SafeHtml content={data?.excerpt} />
      </Content>
    </ContentContainer>
  );
};

export default LeadershipPhilosophy;
