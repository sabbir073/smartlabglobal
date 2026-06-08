import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const ForcesOfChange = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py relative dark:bg-[#1C1C1F]">
      <div className="flex md:flex-row justify-between flex-col-reverse md:gap[123px] gap-[40px]">
        <div className="md:w-auto w-full">
          <ImageComponent
            className="aspect-[547/460] object-contain"
            src={data?.cover}
            alt=""
          />
        </div>

        <div className="md:w-[530px] w-full flex flex-col justify-center">
          <Heading2>
            <SafeHtml content={data?.headline} />
          </Heading2>
          <Content>
            <SafeHtml content={data?.excerpt} />
          </Content>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Shape />
      </div>
    </ContentContainer>
  );
};

export default ForcesOfChange;

const Shape = () => {
  return (
    <svg
      width="225"
      height="336"
      viewBox="0 0 225 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M112.285 213.357L56.4219 153.974L58.1465 152.096L114.01 211.479L112.285 213.357Z"
        fill="#414042"
        fill-opacity="0.03"
      />
      <path
        d="M224.946 213.276L113.145 212.397V95.9082L224.946 213.276Z"
        fill="#414042"
        fill-opacity="0.03"
      />
      <path
        d="M111.201 335.678H0L113.151 212.396L224.952 213.275L111.201 335.678Z"
        fill="#4D4D4F"
        fill-opacity="0.04"
      />
      <path
        d="M111.764 95.9083H0L87.1688 0H198.932L111.764 95.9083Z"
        fill="#414042"
        fill-opacity="0.03"
      />
      <path
        d="M0 95.9082H111.764L56.5754 154.133L0 95.9082Z"
        fill="#4D4D4F"
        fill-opacity="0.04"
      />
    </svg>
  );
};
