"use client";
import "./styles.scss";
import HeroSection from "./component/HeroSection";
import Capabilities from "./component/Capabilities";
import SprintScale from "./component/SprintScale";
import SustainableFuture from "./component/SustainableFuture";
import Spark from "./component/Spark";
import ExploreSlider from "./component/exploreSlider";
import Industries from "./component/Industries";
import SpotLight from "./component/Spotlight";
import CaseStudies from "./component/CaseStudies";
import JoinTeam from "@/components/sections/JoinTeam";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
type Props = {
  data: any;
};

const HomepageComponent = ({ data }: Props) => {
  return (
    <>
      <section>
        <HeroSection data={convertToPageSectionData(data)} />
      </section>
      <section className="md:pt-[5.208vw] pb-[34px] pt-[76px]">
        <Capabilities data={convertToPageSectionData(data?.capabilities)} />
      </section>
      <section className="md:mt-0 -mt-16">
        <SprintScale data={convertToPageSectionData(data?.sprint)} />
      </section>
      <section>
        <Industries data={convertToPageSectionData(data?.industries)} />
      </section>
      <section>
        <SustainableFuture data={convertToPageSectionData(data?.sustainable)} />
      </section>
      <section className="">
        <SpotLight data={convertToPageSectionData(data?.spotlight)} />
      </section>
      <section className="md:pt-[11.74vw] pt-[460px] dark:bg-[#0D0D0D] bg-[#E6E7E8]">
        <CaseStudies data={convertToPageSectionData(data?.case_studies)} />
      </section>
      <section>
        <Spark data={convertToPageSectionData(data?.spark)} />
      </section>
      <section className="md:py-[5.208vw] py-[76px]">
        <ExploreSlider data={convertToPageSectionData(data?.explore)} />
      </section>
      <section>
        <JoinTeam />
      </section>
    </>
  );
};

export default HomepageComponent;
