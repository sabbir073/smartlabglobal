import ImageComponent from "@/components/common/image";
import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
type Props = { data: any };

const GlobalReach = ({ data }: Props) => {
  return (
    <ContentContainer>
      <div className="mx-auto  flex flex-col md:flex-row gap-5 justify-between items-center section-pb">
        <div className="max-w-[437px] w-full">
          <Heading2 className="!mb-[1.5rem]"> <SafeHtml content={data?.headline} /> </Heading2>
          <Content className=""> <SafeHtml content={data?.excerpt} /> </Content>
        </div>
        <div className="w-full h-auto lg:max-w-[463px] aspect-[463/528] relative">
          <ImageComponent
            src={data?.cover}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default GlobalReach;
