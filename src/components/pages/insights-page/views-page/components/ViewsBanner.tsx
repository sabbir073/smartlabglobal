import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const ViewsBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner
    //   containerClassName="min-h-[25.99vw] md:min-h-[32.04vw]"
    //   bgImage={data.cover}
    //   videoUrl={data?.video}
    // >
    //   <ContentContainer className="flex flex-col justify-center md:py-16 md:mb-0 mb-44">
    //     <Heading1 ><SafeHtml content={data.headline} /></Heading1>
    //     <Content className="max-w-[400px] w-full ">
    //       <SafeHtml content={data.excerpt} />
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default ViewsBanner;
