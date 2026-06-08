import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const LeadershipBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner bgImage={data.cover} containerClassName="min-h-[60.04vh]" videoUrl={data?.video} >
    //   <ContentContainer className='flex flex-col justify-center md:py-16 pt-8 pb-[250px] md:w-[50%] w-full'>
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

export default LeadershipBanner;
