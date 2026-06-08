import PrimaryButton from "@/components/common/button/PrimaryButton";
import CarouselComponent from "@/components/common/slider/slider";
import ContentContainer from "@/components/layout/container/contentContainer";
import HoverRevealCard from "@/components/common/cards/HoverRevealCard";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import { useState } from "react";

type props = {
  data: IPageSectionData;
};

export default function Capabilities({ data }: props) {
  const { headline, excerpt, items } = data;
  return (
    <div className="  mx-auto  ">
      <ContentContainer>
        <div className="md:mb-10 mb-28 md:text-left text-center">
          <Heading2 >
            <SafeHtml content={headline as string} />
          </Heading2>
          <Content className="lg:max-w-[35vw] max-w-[600px] md:mb-[50px] my-[30px] ">
            <SafeHtml content={excerpt as string} />
          </Content>

          <NavLink href={routes.capabilities}>
            <PrimaryButton>Explore Our Services</PrimaryButton>
          </NavLink>
        </div>
      </ContentContainer>

      <ContentContainer disablePR>
        <CarouselComponent
          controlClassName="md:left-[58vw]"
          slideClassName="xl:!w-[247px] !w-[185px] md:!aspect-[247/320] aspect-auto"
        >
          {items?.map((service, index: number) => (
            <NavLink href={routes.serviceDetail(service.slug)} key={index} className="w-full">
              <HoverRevealCard
                banner={service.thumb}
                title={service.title}
                content={service.subtitle}
              />
            </NavLink>
          ))}
        </CarouselComponent>
      </ContentContainer>
    </div>
  );
}
