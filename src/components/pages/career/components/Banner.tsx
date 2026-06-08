import PageBanner from "@/components/common/banner/PageBanner";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading1 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import LayeredBanner from "@/components/sections/banner/LayeredBanner";
import React from "react";

type Props = { data: any };

const Banner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
    // <LayeredBanner bgImage={data.cover} containerClassName="min-h-[26.04vw]" videoUrl={data?.video}>
    //   <ContentContainer className="md:py-32 pt-8 pb-[150px] lg:max-w-[55vw] md:max-w-[51vw]">
    //     <Heading1>
    //       <SafeHtml content={data.title} />
    //     </Heading1>
    //     <Content>
    //       <SafeHtml content={data.excerpt} />{" "}
    //     </Content>
    //   </ContentContainer>
    // </LayeredBanner>
  );
};

export default Banner;
