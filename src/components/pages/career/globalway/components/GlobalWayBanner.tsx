import React from "react";
import { Content, Heading1, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import SafeHtml from "@/components/common/safeHtml";
import LayeredBanner from "@/components/sections/banner/LayeredBanner";
import PageBanner from "@/components/common/banner/PageBanner";

type Props = {
  data: IPageSectionData;
};

const GlobalWayBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner bgImage={data.cover} containerClassName="min-h-[32.656vw]" videoUrl={data?.video}>
    //   <ContentContainer className="md:py-32 pt-8 pb-32 lg:max-w-[60vw] md:max-w-[51vw]">
    //     <Heading1>
    //       <SafeHtml content={data?.headline} />
    //     </Heading1>
    //     <Content>
    //       <SafeHtml content={data?.excerpt} />
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default GlobalWayBanner;
