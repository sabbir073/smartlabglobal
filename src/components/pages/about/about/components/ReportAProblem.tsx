import React from "react";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import ImageComponent from "@/components/common/image";
import routes from "@/config/routes";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";

type Props = { data: IPageSectionData };

const ReportAProblem = ({ data }: Props) => {
  return (
    <ContentContainer className="section-pb">
      <div className="flex md:flex-row flex-col justify-between items-center">
        {/* Left Content */}
        <div className="md:mb-0 mb-16 ">
          <div className="text-center lg:text-start">
            <Heading2 className="">{data.headline}</Heading2>
            <Content className="max-w-[534px] mx-auto ">{data.excerpt}</Content>
          </div>

          <div className="text-center lg:text-start w-full">
            <PrimaryButton className="md:mt-[58px] md:mb-[14px] mt-[30px] mb-[16px]" href={routes.contact} >SUBMIT REPORT</PrimaryButton>
            <p className="text-[#414042] dark:text-[#D9D9D9] text-[10px] font-medium italic text-center lg:text-start w-full">
              All reports are confidential. We're committed to resolving issues
              with integrity and care.
            </p>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative w-[205px] lg:w-[342px] h-[275px] lg:h-[460px] ">
          <ImageComponent src={data.cover} alt="Report a Problem Background" />
        </div>
      </div>
    </ContentContainer>
  );
};

export default ReportAProblem;
