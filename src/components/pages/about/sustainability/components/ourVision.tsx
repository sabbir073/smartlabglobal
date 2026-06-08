import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import BottomLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/bottomLeftSplitedBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const SustainabilityVision = ({ data }: Props) => {
  return (
    <BottomLeftSplitedBanner
      // imageClassName={"object-[15%_45%]"}
      bgImage={data.cover}
    >
      <Heading2 className="lg:mb-10 mb-[30px] mt-16 capitalize">
        <SafeHtml content={data.headline} />
      </Heading2>
      <Content className="md:w-[50%] md:max-w-[550px] w-full max-w-full pr-[5%]">
        <SafeHtml content={data.excerpt} />
      </Content>
      {/* <div className='md:w-[50%] md:max-w-[550px] w-full max-w-full pr-[5%]'
        dangerouslySetInnerHTML={{ __html: sustainabilityVisionContent }}
      /> */}
    </BottomLeftSplitedBanner>
  );
};

export default SustainabilityVision;
