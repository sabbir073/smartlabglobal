import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const IndustryDetailsBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} headingClassName="text-[30px]" />
    // <LayeredBanner bgImage={data.cover} containerClassName="min-h-[32.656vw]" videoUrl={data.video}>
    //   <ContentContainer className="md:py-32 pt-8 pb-32 lg:max-w-[53vw] md:max-w-[51vw]">
    //     <Heading1>
    //       <SafeHtml content={data.headline} />
    //     </Heading1>
    //     <Content>
    //       <SafeHtml content={data.excerpt} />
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default IndustryDetailsBanner;
