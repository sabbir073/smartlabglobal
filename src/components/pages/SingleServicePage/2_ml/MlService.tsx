"use client";
import React from "react";

import Faq from "@/components/sections/faq";

import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import ServiceBanner from "../components/ServiceBanner";
import ServiceHighlight from "../components/ServiceHighlight";
import ServiceAreaOfFocus from "../components/ServiceAreaOfFocus";
import ServiceDeliverPurpose from "../components/ServiceDeleveryPurpose";
import ServiceSetApart from "../components/ServiceSetApart";
import ServiceApproach from "../components/ServiceApproach";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceExplore from "../components/ServiceExplore";
import ServiceInsight from "../components/ServiceInsight";
import ServiceAtGlanceTopRightSplit from "../components/ServiceAtGlanceTopRightSplit";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";
import JoinTeam from "@/components/sections/JoinTeam";

type Props = {
  data: any;
};
const MlService = ({ data }: Props) => {
  return (
    <div>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}

      {data?.highlight?.status && (
        <ServiceHighlight
          containerClassName="md:!flex-row-reverse section-pt"
          data={convertToPageSectionData(data?.highlight)}
        />
      )}

      {data?.focus?.status && (
        <ServiceAreaOfFocus
          containerClassName="section-pt"
          data={convertToPageSectionData(data?.focus)}
        />
      )}

      {/* <OverflowSectionWrapper bottomBgClassName='bg-[#E6E7E8] dark:bg-[#0D0D0D] h-[55%]' > */}
      {data?.purpose?.status && (
        <ServiceDeliverPurpose
          containerClassName="section-py"
          data={convertToPageSectionData(data.purpose)}
          cardClassName="!text-red"
        />
      )}
      {/* </OverflowSectionWrapper> */}
      {data?.glance?.status && (
        <ServiceAtGlanceTopRightSplit
          containerClassName=""
          data={convertToPageSectionData(data.glance)}
        />
      )}

      {data?.apart?.status && (
        <ServiceSetApart
          containerClassName="section-py"
          data={convertToPageSectionData(data.apart)}
        />
      )}

      {data?.approach?.status && (
        <KeyHighlight
          containerClassName="md:py-[98px] pt-[50px] pb-[66px]"
          data={convertToPageSectionData(data.approach)}
        />
      )}

      {data?.insights?.status && (
        <ServiceInsight
          containerClassName="section-pt"
          data={convertToPageSectionData(data.insights)}
        />
      )}
      {data?.case_study?.status && (
        <ServiceCaseStudy
          containerClassName="section-py"
          data={convertToPageSectionData(data.case_study)}
        />
      )}
      {data?.explore?.status && (
        <ServiceExplore
          containerClassName=""
          data={convertToPageSectionData(data?.explore)}
        />
      )}
      {data?.faq?.status && (
        <section className="section-pt">
          <Faq data={convertToPageSectionData(data?.faq)} />
        </section>
      )}
      <JoinTeam />
    </div>
  );
};

export default MlService;
