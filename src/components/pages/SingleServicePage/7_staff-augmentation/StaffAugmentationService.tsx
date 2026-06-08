"use client";
import React from "react";
import Faq from "@/components/sections/faq";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import JoinTeam from "@/components/sections/JoinTeam";
import ServiceBanner from "../components/ServiceBanner";
import ServiceHighlight from "../components/ServiceHighlight";
import ServiceAtGlance from "../components/ServiceAtGlance";
import ServiceDeliverPurpose from "../components/ServiceDeleveryPurpose";
import ServiceAreaOfFocus from "../components/ServiceAreaOfFocus";
import ServiceApproach from "../components/ServiceApproach";
import ServiceSetApart from "../components/ServiceSetApart";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceExplore from "../components/ServiceExplore";
import ServiceStaffing from "../components/ServiceStaffing";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";
import ServiceTalentPool from "../components/ServiceTalentPool";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";

type Props = {
  data: any;
};
const StaffAugmentationService = ({ data }: Props) => {
  return (
    <>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}
      {data?.highlight?.status && (
        <ServiceHighlight
          imageClassName="md:max-w-[492px]"
          containerClassName="section-pt"
          data={convertToPageSectionData(data?.highlight)}
        />
      )}

      {data?.purpose?.status && (
        <ServiceDeliverPurpose
          containerClassName="section-py"
          data={convertToPageSectionData(data?.purpose)}
        />
      )}
      {data?.approach?.status && (
        <KeyHighlight
          containerClassName="py-16"
          data={convertToPageSectionData(data.approach)}
        />
      )}
      {data?.focus?.status && (
        <ServiceAreaOfFocus
          containerClassName="section-py"
          data={convertToPageSectionData(data?.focus)}
        />
      )}
      {data?.staffing?.status && (
        <OverflowSectionWrapper bottomBgClassName="bg-[#E6E7E8] dark:bg-[#0D0D0D] h-[60%]">
          <ServiceStaffing
            containerClassName=""
            cardClassName="bg-white dark:bg-[#414042] text-[#4D4D4F] dark:text-[#D9D9D9]"
            data={convertToPageSectionData(data?.staffing)}
          />
        </OverflowSectionWrapper>
      )}

      {data?.talent?.status && (
        <ServiceTalentPool
          containerClassName="section-py bg-[#E6E7E8] dark:bg-[#0D0D0D] text-[#4D4D4F] dark:text-[#D9D9D9]"
          data={convertToPageSectionData(data?.talent)}
        />
      )}

      {data?.glance?.status && (
        <ServiceAtGlance data={convertToPageSectionData(data?.glance)} />
      )}
      {data?.case_study?.status && (
        <ServiceCaseStudy
          containerClassName="section-py"
          data={convertToPageSectionData(data?.case_study)}
        />
      )}
      {data?.apart?.status && (
        <ServiceSetApart
          containerClassName="section-pt"
          data={convertToPageSectionData(data?.apart)}
        />
      )}
      {data?.explore?.status && (
        <ServiceExplore
          containerClassName="section-py"
          data={convertToPageSectionData(data?.explore)}
        />
      )}
      {data?.faq?.status && <Faq data={convertToPageSectionData(data?.faq)} />}
      <JoinTeam />
    </>
  );
};

export default StaffAugmentationService;
