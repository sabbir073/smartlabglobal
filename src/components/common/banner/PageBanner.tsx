import ContentContainer from "@/components/layout/container/contentContainer";
import LayeredBanner from "@/components/sections/banner/LayeredBanner";
import React from "react";
import SafeHtml from "../safeHtml";
import { Content, Heading1 } from "../typography";
import { cn } from "@/utils/helpers/cn";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
  contentClassName?: string;
  headingClassName?: string;
};

const PageBanner = ({
  data,
  containerClassName,
  contentClassName,
  headingClassName,
}: Props) => {
  return (
    <LayeredBanner
      bgImage={data.cover}
      containerClassName={cn(
        "w-full 3xl:aspect-[1920/499] aspect-auto",
        containerClassName,
      )}
      videoUrl={data?.video}
    >
      <ContentContainer className="flex flex-col justify-center py-14 aspect-auto">
        <div className="md:mb-0 mb-[140px] 2xl:w-[27vw] lg:w-[38vw] md:w-[40vw] w-[90vw] ">
          <Heading1 className={cn("break-words", headingClassName)}>
            <SafeHtml content={data.headline} />
          </Heading1>
          <Content className={cn("", contentClassName)}>
            <SafeHtml content={data.excerpt} />
          </Content>
        </div>
      </ContentContainer>
    </LayeredBanner>
  );
};

export default PageBanner;
