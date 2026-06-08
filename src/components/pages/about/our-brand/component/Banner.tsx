import React from "react";
import PageBanner from "@/components/common/banner/PageBanner";

type Props = {
  data: IPageSectionData;
};
export default function Banner({ data }: Props) {
  return (
    <PageBanner data={data} />
    // <LayeredBanner
    //   bgImage={data?.cover}
    //   containerClassName="min-h-[60.042vh]"
    //   videoUrl={data?.video}
    // >
    //   <ContentContainer className="flex flex-col justify-center md:py-16 pt-8 pb-[250px]">
    //     <Heading1 className="">
    //       <SafeHtml content={data.headline} />
    //     </Heading1>
    //     <Content className="md:max-w-[43%] w-full">
    //       <SafeHtml content={data.excerpt} />
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
}
