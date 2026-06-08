import TopRightSplitedBanner from "@/components/sections/banner/SplitedBanner/topRighSplitedBanner";
import React from "react";
import SustainabilityBg from "@/assets/images/dummy/about/sustainability-bg.png";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import routes from "@/config/routes";
import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";

type Props = { data: any };

const Sustainability = ({ data }: Props) => {
  return (
    <TopRightSplitedBanner
      bgImage={data.cover}
      contentClassName="dark:bg-[#0D0D0D] bg-[#E6E7E8]"
    >
      <div className="md:mb-0 mb-24 text-center md:text-start">
        <Heading2 ><SafeHtml content={data.headline} /></Heading2>
        <Content className="lg:max-w-[28vw] !max-w-[500px] mb-[5vw] md:mb-[2vw]">
          <SafeHtml content={data.excerpt} />
        </Content>
        <PrimaryButton href={routes.brandSustainability} >
          See Our Eco Journey
        </PrimaryButton>
      </div>
    </TopRightSplitedBanner>
  );
};

export default Sustainability;
