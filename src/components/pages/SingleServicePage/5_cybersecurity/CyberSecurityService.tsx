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
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";

type Props = {
  data: any;
};
const CyberSecurity = ({ data }: Props) => {
  return (
    <>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}
      {data?.highlight?.status && (
        <ServiceHighlight
          containerClassName="section-py"
          data={convertToPageSectionData(data?.highlight)}
          imageClassName="md:!aspect-[342/460] mx-auto md:mx-0 !aspect-[250/360]  md:max-w-full"
        />
      )}
      {data?.glance?.status && (
        <ServiceAtGlance data={convertToPageSectionData(data.glance)} />
      )}

      {data?.purpose?.status && (
        <ServiceDeliverPurpose
          containerClassName="section-pt"
          data={convertToPageSectionData(data.purpose)}
        />
      )}
      {data?.focus?.status && (
        <ServiceAreaOfFocus
          containerClassName="section-py"
          data={convertToPageSectionData(data.focus)}
        />
      )}
      {data?.approach?.status && (
        <KeyHighlight
          containerClassName="py-16"
          data={convertToPageSectionData(data.approach)}
        />
      )}
      {data?.apart?.status && (
        <ServiceSetApart
          containerClassName="section-py"
          data={convertToPageSectionData(data.apart)}
        />
      )}
      {data?.case_study?.status && (
        <ServiceCaseStudy
          data={convertToPageSectionData(data.case_study)}
          containerClassName="section-pt"
        />
      )}
      {data?.explore?.status && (
        <ServiceExplore
          containerClassName="section-pt"
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

export default CyberSecurity;
