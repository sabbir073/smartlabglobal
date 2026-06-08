import ImageComponent from "@/components/common/image";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import UnionImage from "@/assets/images/dummy/service-page/union.png";
import Image from "next/image";
import React from "react";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";
type Props = {
  data: IPageSectionData;
  containerClassName?: string;
  headingClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
};
const ServiceHighlight = ({
  data,
  containerClassName,
  headingClassName,
  imageClassName,
  contentClassName
}: Props) => {
  return (
    <ContentContainer
      className={cn(
        "mx-auto flex md:flex-row flex-col-reverse items-center justify-between md:gap-[157px] gap-[40px] ",
        containerClassName,
      )}
    >
      {/* <div className=""> */}
      <div className=" md:w-auto w-full ">
        <ImageComponent
          src={data.cover}
          className={cn(
            "w-auto  md:!aspect-[492/499] aspect-[350/360]",
            imageClassName,
          )}
          alt={data.headline}
        />
      </div>
      <div className={cn("w-full md:w-[699px]", contentClassName)}>
        <Heading2 className={cn(headingClassName)}>
          <SafeHtml content={data.headline} />
        </Heading2>
        <Content className="lg:max-w-[35vw] max-w-[600px] mb-[2vw]">
          <SafeHtml content={data.excerpt} />
        </Content>
      </div>

      {/* </div> */}
    </ContentContainer>
  );
};

export default ServiceHighlight;
