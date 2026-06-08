"use client";
import React from "react";

import Faq from "@/components/sections/faq";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";

import JoinTeam from "@/components/sections/JoinTeam";
import ServiceBanner from "../components/ServiceBanner";
import ServiceHighlight from "../components/ServiceHighlight";
import ServiceDeliverPurpose from "../components/ServiceDeleveryPurpose";
import ServiceApproach from "../components/ServiceApproach";
import ServiceAreaOfFocus from "../components/ServiceAreaOfFocus";
import ServiceSetApart from "../components/ServiceSetApart";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceExplore from "../components/ServiceExplore";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";
import ServiceAtGlanceBottomLeftSplit from "../components/ServiceAtGlanceBottomLeftSplit";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";

type Props = {
  data: any;
};
const AiService = ({ data }: Props) => {
  return (
    <>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}

      {data?.highlight?.status && (
        <ServiceHighlight
          containerClassName="section-pt"
          headingClassName="!max-w-[699px] !w-full"
          data={convertToPageSectionData(data?.highlight)}
          imageClassName="md:!aspect-[342/460] !aspect-[342/460]"
        />
      )}

      {data?.purpose?.status && (
        <OverflowSectionWrapper bottomBgClassName="bg-[#E6E7E8] dark:bg-[#0D0D0D] h-[55%]">
          <ServiceDeliverPurpose
            data={convertToPageSectionData(data.purpose)}
            containerClassName="section-pt"
            cardClassName="bg-white !text-[#4D4D4F] dark:!bg-[#414042] dark:!text-[#D9D9D9]"
          />
        </OverflowSectionWrapper>
      )}
      {data?.approach?.status && (
        <KeyHighlight
          containerClassName="section-pt"
          data={convertToPageSectionData(data.approach)}
        />
      )}
      {data?.focus?.status && (
        <ServiceAreaOfFocus
          containerClassName="section-pt"
          data={convertToPageSectionData(data?.focus)}
        />
      )}

      {data?.glance?.status && (
        <ServiceAtGlanceBottomLeftSplit
          data={convertToPageSectionData(data.glance)}
        />
      )}

      {data?.apart?.status && (
        <OverflowSectionWrapper
          topBgClassName="bg-[#E6E7E8] dark:bg-[#1C1C1F] h-[65%]"
          bottomBgClassName="bg-[#1E1E1E] dark:bg-[#0D0D0D] h-[35%]"
        >
          <ServiceSetApart
            containerClassName="section-pt"
            data={convertToPageSectionData(data.apart)}
          />
        </OverflowSectionWrapper>
      )}

      {data?.case_study?.status && (
        <ServiceCaseStudy
          headingClass="text-[#FFFFFF]"
          containerClassName="bg-[#1E1E1E] section-py"
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
        <div className="section-pt">
          <Faq data={convertToPageSectionData(data?.faq)} />
        </div>
      )}

      <JoinTeam />
    </>
  );
};

export default AiService;
