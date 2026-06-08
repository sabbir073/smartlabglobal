import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const SustainabilityBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner
    //   bgImage={data?.cover}
    //   containerClassName="min-h-[26.04vw]"
    //   videoUrl={data?.video}
    // >
    //   <ContentContainer className="flex flex-col justify-center md:py-16 pt-8 pb-[250px]">
    //     <Heading1 className="text-[#4D4D4F] spacing-[5px] capitalize">
    //       <SafeHtml content={data?.headline} />
    //     </Heading1>
    //     <Content className="max-w-[400px] w-full">
    //       <SafeHtml content={data.excerpt} />
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default SustainabilityBanner;
