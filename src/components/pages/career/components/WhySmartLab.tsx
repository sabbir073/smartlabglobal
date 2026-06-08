import PrimaryButton from "@/components/common/button/PrimaryButton";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = { data: any };

const WhySmartLab = ({ data }: Props) => {
  return (
    <ContentContainer className="section-pt">
      <div
        className={
          "flex flex-col-reverse md:gap-[69px] gap-[40px] items-center md:flex-row "
        }
      >
        <div className={"md:w-auto w-full"}>
          <ImageComponent
            src={data.cover}
            alt="..."
            className={"w-auto md:aspect-[676/769] object-cover"}
          />
        </div>
        <div
          className={
            "md:auto w-full md:max-w-[455px] max-w-full  text-center md:text-start"
          }
        >
          <Heading2>
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className="md:mt-[43px] mt-[30px]">
            <SafeHtml content={data.excerpt} />
          </Content>
          <div className="md:pt-[58px] pt-[40px]">
            <PrimaryButton className="px-[30px]">Learn More</PrimaryButton>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default WhySmartLab;
