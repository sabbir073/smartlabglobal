import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const CaseStudyImpact = ({ data }: Props) => {
  return (
    <ContentContainer className="relative section-py">
      <div className=" ">
        <ImageComponent
          src={data?.cover}
          alt=""
          className="absolute top-0 left-0 h-full w-full -z-[2]"
        />
        <div className="absolute top-0 left-0 h-full w-full -z-[1] bg-[#000000E0]"></div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-[50%] w-full">
            <div className="md:max-w-[60%]">
              <Heading2 className=" !text-[#ffffff]">
                <SafeHtml content={data?.headline} />
              </Heading2>
              <Content className="!text-[#ffffff] mb-3 md:mb-5">
                <SafeHtml content={data?.excerpt} />
              </Content>
            </div>
          </div>
          <div className="md:w-[50%] w-full">
            {/* <SafeHtml content={data?.excerpt} /> */}
            <ul className="icon-list mt-4 md:mt-10 flex flex-col gap-6 text-sm text-[#F0F0F0] ">
              {data?.items.map((item: any, index: number) => (
                <li key={index}>
                  <SafeHtml content={item?.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CaseStudyImpact;
