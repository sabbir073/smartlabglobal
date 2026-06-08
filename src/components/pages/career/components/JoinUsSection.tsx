import PrimaryButton from "@/components/common/button/PrimaryButton";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import TopLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/topLeftSplitedBanner";
import React from "react";

type Props = { data: any };

const JoinUsSection = ({ data }: Props) => {
  return (
    <TopLeftSplitedBanner bgImage={data.cover}>
      <div className="md:mb-0 mb-24 max-w-[570px] md:p-8 text-center md:text-start">
        <Heading2 className="!mb-5">
          <SafeHtml content={data.headline} />
        </Heading2>
        <Content className="">
          <SafeHtml content={data.excerpt} />{" "}
        </Content>
        <div className="md:pt-[58px] pt-[40px]">
          <PrimaryButton className="px-[30px]">
            Join Us
          </PrimaryButton>
        </div>
      </div>
    </TopLeftSplitedBanner>
  );
};

export default JoinUsSection;
