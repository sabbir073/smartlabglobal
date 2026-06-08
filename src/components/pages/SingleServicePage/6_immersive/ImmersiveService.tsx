"use client";
import React from "react";
import Faq from "@/components/sections/faq";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import JoinTeam from "@/components/sections/JoinTeam";
import ServiceBanner from "../components/ServiceBanner";
import ServiceHighlight from "../components/ServiceHighlight";
import ServiceDeliverPurpose from "../components/ServiceDeleveryPurpose";
import ServiceAreaOfFocus from "../components/ServiceAreaOfFocus";
import ServiceApproach from "../components/ServiceApproach";
import ServiceSetApart from "../components/ServiceSetApart";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceExplore from "../components/ServiceExplore";
import ServiceAtGlanceTopLeftSplit from "../components/ServiceAtGlanceTopLeftSplit";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";

type Props = {
  data: any;
};
const ImmersiveService = ({ data }: Props) => {
  return (
    <>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}
      {data?.highlight?.status && (
        <ServiceHighlight
          containerClassName="section-py md:flex-row-reverse md:gap-[142px]"
          imageClassName="md:!aspect-[492/499] aspect-[350/360]"
          contentClassName="md:max-w-[566px] w-full"
          data={convertToPageSectionData(data?.highlight)}
        />
      )}
      {data?.glance?.status && (
        <ServiceAtGlanceTopLeftSplit
          data={convertToPageSectionData(data.glance)}
        />
      )}
      {data?.focus?.status && (
        <ServiceAreaOfFocus
          containerClassName="section-pt"
          data={convertToPageSectionData(data.focus)}
        />
      )}
      {data?.purpose?.status && (
        <ServiceDeliverPurpose
          containerClassName="section-py"
          cardClassName="!text-[#D9D9D9]"
          data={convertToPageSectionData(data.purpose)}
        />
      )}

      {data?.approach?.status && (
        <KeyHighlight
          containerClassName="py-16"
          data={convertToPageSectionData(data.approach)}
        />
      )}
      {data?.apart?.status && (
        <OverflowSectionWrapper
          topBgClassName=" !bg-[#E6E7E8] dark:!bg-[#1E1E1E]"
          bottomBgClassName="!bg-[#1E1E1E] dark:!bg-[#0D0D0D] h-[30%]"
        >
          <ServiceSetApart
            containerClassName="section-pt"
            data={convertToPageSectionData(data.apart)}
          />
        </OverflowSectionWrapper>
      )}
      {data?.case_study?.status && (
        <ServiceCaseStudy
          containerClassName="section-pt pb-[62px] bg-[#1E1E1E] dark:bg-[#0D0D0D]"
          data={convertToPageSectionData(data.case_study)}
          headingClass="!text-white"
        />
      )}
      {data?.explore?.status && (
        <ServiceExplore
          containerClassName="section-py"
          data={convertToPageSectionData(data?.explore)}
        />
      )}
      {data?.faq?.status && (
        <div className="">
          {" "}
          <Faq data={convertToPageSectionData(data?.faq)} />
        </div>
      )}
      <JoinTeam />
    </>
  );
};

export default ImmersiveService;
