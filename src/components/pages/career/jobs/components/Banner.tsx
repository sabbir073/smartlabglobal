import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = { data: IPageSectionData };

const Banner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner bgImage={data?.cover} containerClassName="min-h-[32.656vw]" videoUrl={data?.video}>
    //   <ContentContainer className="md:py-32 pt-8 pb-32 lg:max-w-[55vw] md:max-w-[51vw]">
    //     <Heading1>
    //       <SafeHtml content={data?.headline} />
    //     </Heading1>
    //     <Content>
    //       <SafeHtml
    //         content={`At Smart Lab Global, we deliver more than technology—we drive transformation. With future-ready solutions and a global mindset, we help businesses scale smarter and lead with confidence.`}
    //       />
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default Banner;
