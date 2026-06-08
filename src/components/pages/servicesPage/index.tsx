"use client";
import React from "react";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import HoverRevealCard from "@/components/common/cards/HoverRevealCard";
import JoinTeam from "@/components/sections/JoinTeam";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import SafeHtml from "@/components/common/safeHtml";
import routes from "@/config/routes";
import PageBanner from "@/components/common/banner/PageBanner";

type Props = {
  data: any;
};

const ServicesPageComponent = ({ data }: Props) => {
  const serviceData = convertToPageSectionData(data);
  const core = convertToPageSectionData(data.capabilities);
  return (
    <div>
      <section>
        <PageBanner data={serviceData} />
      </section>

      <section>
        <ContentContainer className="section-pt">
          <Heading2>
            <SafeHtml content={core.headline} />
          </Heading2>
          <Content>
            <SafeHtml content={core.excerpt} />
          </Content>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[17px] mt-8">
            {core?.items?.map((service, index: number) => (
              <HoverRevealCard
                key={index}
                banner={service.thumb}
                title={service.title}
                content={service.subtitle}
                slug={routes.serviceDetail(service.slug)}
                className="w-full h-full md:aspect-[287/360] aspect-[350/360] !px-0 !py-0"
                contentClassName="md:justify-between justify-start p-[30px] "
              />
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="section-pt">
        <JoinTeam />
      </section>
    </div>
  );
};

export default ServicesPageComponent;
