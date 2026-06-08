import PrimaryButton from "@/components/common/button/PrimaryButton";
import HoverRevealCard from "@/components/common/cards/HoverRevealCard";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const IndustryDetailsCapability = ({ data }: Props) => {
  return (
    <div className="dark:bg-[#1C1C1F]">
      <ContentContainer>
        <div className="md:pb-16 pb-28 md:text-left text-center">
          <Heading2>
            <SafeHtml content={data?.headline} />
          </Heading2>
          <Content className="g:max-w-[35vw] max-w-[600px] mb-[2vw]">
            <SafeHtml content={data?.excerpt} />
          </Content>
          <PrimaryButton href={routes.capabilities}>
            Explore Our Services
          </PrimaryButton>
        </div>
      </ContentContainer>

      <ContentContainer disablePR>
        <CarouselComponent
          slideClassName="xl:!w-[247px] !w-[185px] md:aspect-[247/320] aspect-[185/240] pb-0"
          controlClassName="3xl:pr-[18.35vw] 2xl:pr-[15vw] xl:pr-[8vw] lg:pr-[3vw] pr-3"
        >
          {data?.items.map((service, index: number) => (
            <HoverRevealCard
              key={index}
              banner={service.thumb}
              title={service.title}
              content={service.excerpt}
              titleClassName="md:text-[18px] text-[14px]"
              contentClassName="gap-[30px] "
            />
          ))}
        </CarouselComponent>
      </ContentContainer>
    </div>
  );
};

export default IndustryDetailsCapability;
