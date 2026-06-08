import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = { data: IPageSectionData };

const Banner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner bgImage={data?.cover} containerClassName="min-h-[30.042vw]" videoUrl={data?.video}>
    //   <ContentContainer className="flex flex-col justify-center md:py-16 pt-8 pb-[250px]">
    //     <h1 className="text-[#4D4D4F] heading-1 spacing-[5px]">
    //       {data?.headline}
    //     </h1>
    //     <Content className="max-w-[500px] w-full">{data?.excerpt}</Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default Banner;
