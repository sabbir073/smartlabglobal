"use client";

import Faq from "@/components/sections/faq";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import ServiceBanner from "../components/ServiceBanner";
import ServiceHighlight from "../components/ServiceHighlight";
import ServiceDeliverPurpose from "../components/ServiceDeleveryPurpose";
import ServiceApproach from "../components/ServiceApproach";
import ServiceAreaOfFocus from "../components/ServiceAreaOfFocus";
import ServiceAtGlance from "../components/ServiceAtGlance";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceSetApart from "../components/ServiceSetApart";
import ServiceExplore from "../components/ServiceExplore";
import JoinTeam from "@/components/sections/JoinTeam";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";

type Props = {
  data: any;
};
const SoftwareAppService = ({ data }: Props) => {
  return (
    <>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}
      {data?.highlight?.status && (
        <ServiceHighlight
          containerClassName="section-pt"
          imageClassName="md:max-w-[492px]"
          data={convertToPageSectionData(data?.highlight)}
        />
      )}
      {data?.purpose?.status && (
        <ServiceDeliverPurpose
          containerClassName="section-py"
          data={convertToPageSectionData(data.purpose)}
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
          data={convertToPageSectionData(data.focus)}
        />
      )}

      {data?.glance?.status && (
        <ServiceAtGlance
          containerClassName="py-16"
          data={convertToPageSectionData(data.glance)}
        />
      )}

      {data?.case_study?.status && (
        <ServiceCaseStudy
          containerClassName="section-py"
          data={convertToPageSectionData(data.case_study)}
        />
      )}

      {data?.apart?.status && (
        <ServiceSetApart
          containerClassName="section-pt"
          data={convertToPageSectionData(data.apart)}
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

export default SoftwareAppService;
