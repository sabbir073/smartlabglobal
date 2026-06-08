"use client";
import Faq from "@/components/sections/faq";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import JoinTeam from "@/components/sections/JoinTeam";
import ServiceBanner from "../components/ServiceBanner";
import ServiceHighlight from "../components/ServiceHighlight";
import ServiceDeliverPurpose from "../components/ServiceDeleveryPurpose";
import ServiceApproach from "../components/ServiceApproach";
import ServiceAreaOfFocus from "../components/ServiceAreaOfFocus";
import ServiceAtGlance from "../components/ServiceAtGlance";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceSetApart from "../components/ServiceSetApart";
import ServiceExplore from "../components/ServiceExplore";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";

type Props = {
  data: any;
};
const CloudService = ({ data }: Props) => {
  return (
    <>
      {data && <ServiceBanner data={convertToPageSectionData(data)} />}
      {data?.highlight?.status && (
        <ServiceHighlight
          containerClassName="md:!flex-row-reverse section-pt"
          data={convertToPageSectionData(data?.highlight)}
          imageClassName="md:!aspect-[342/460] mx-auto md:mx-0 !aspect-[250/360]  md:max-w-full"
        />
      )}

      {data?.purpose?.status && (
        <OverflowSectionWrapper bottomBgClassName="bg-[#E6E7E8] dark:bg-[#0D0D0D] h-[60%]">
          <ServiceDeliverPurpose
            containerClassName="section-py"
            cardClassName="bg-white dark:bg-[#414042] text-[#4D4D4F] dark:text-[#D9D9D9]"
            data={convertToPageSectionData(data?.purpose)}
          />
        </OverflowSectionWrapper>
      )}

      {data?.approach?.status && (
        <KeyHighlight
          containerClassName="py-16"
          data={convertToPageSectionData(data.approach)}
        />
      )}

      {data?.focus?.status && (
        <ServiceAreaOfFocus
          containerClassName="section-pt"
          data={convertToPageSectionData(data?.focus)}
        />
      )}

      {data?.apart?.status && (
        <ServiceSetApart
          containerClassName="section-py"
          data={convertToPageSectionData(data?.apart)}
        />
      )}

      {data?.glance?.status && (
        <ServiceAtGlance data={convertToPageSectionData(data?.glance)} />
      )}
      {data?.case_study?.status && (
        <ServiceCaseStudy
          containerClassName="bg-[#1E1E1E] dark:bg-[#0D0D0D] pt-[100px] pb-[62px]"
          headingClass="text-[#FFFFFF]"
          data={convertToPageSectionData(data?.case_study)}
          arrowHasWhiteBorder
        />
      )}
      {data?.explore?.status && (
        <ServiceExplore
          containerClassName="section-py "
          data={convertToPageSectionData(data?.explore)}
        />
      )}
      {data?.faq?.status && <Faq data={convertToPageSectionData(data?.faq)} />}
      <JoinTeam />
    </>
  );
};

export default CloudService;
