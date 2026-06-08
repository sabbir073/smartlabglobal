import ImageComponent from "@/components/common/image";
import CarouselComponent from "@/components/common/slider/slider";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import SustainabilityBannerImg from "@/assets/images/dummy/about/sustainability-banner.png";

import React from "react";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
};

const SustainabilityComitment = ({ data, containerClassName }: Props) => {
  return (
    <ContentContainer className={cn("dark:bg-[#1C1C1F]", containerClassName)}>
      <Heading2 className="md:mb-[10px]">{data?.headline}</Heading2>
      <CarouselComponent controlClassName="z-[10] lg:top-[-13%] md:top-[-15%] top-[100%] ">
        {data.items.map((item, index) => (
          <div className="flex flex-col md:gap-[62px] gap-[40px]   items-center md:flex-row pl-1">
            <div className="md:w-auto w-full max-w-[530px]">
              {/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
              <SafeHtml content={item.excerpt} />
            </div>
            <div className="md:w-auto w-full md:aspect-[605/530] aspect-[350/276]">
              <ImageComponent
                src={item.cover}
                alt="Sustainability Commitment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};
export default SustainabilityComitment;
