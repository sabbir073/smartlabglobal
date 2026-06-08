"use client";
import React from "react";

import JoinTeam from "@/components/sections/JoinTeam";
import GetInTouch from "@/components/sections/form/GetInTouch/GetInTouch";
import IndustryDetailsBanner from "./components/IndustryDetailsBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import ForcesOfChange from "./components/ForcesOfChange";
import IndustryDetailsCapability from "./components/IndustryDetailsCapability";
import IndustryDetailsInitiatives from "./components/Initiatives";
import IndustryServed from "./components/IndustryServed";
import IndustryDetailsPerspective from "./components/IndustryDetailsPerspective";
import IndustryExploreMoreSection from "./components/IndustryExploreMoreSection";
import IndustryCaseStudies from "./components/IndustryCaseStudies";

type Props = {
  slug: string;
  data: any;
};

const IndustryDetailsPageComponent = ({ slug, data }: Props) => {
  // console.log({ industryData: data })
  return (
    <div>
      <IndustryDetailsBanner data={convertToPageSectionData(data)} />

      <ForcesOfChange data={convertToPageSectionData(data?.highlight)} />

      <IndustryDetailsCapability
        data={convertToPageSectionData(data?.our_service)}
      />

      <IndustryDetailsInitiatives
        data={convertToPageSectionData(data?.initiative)}
      />

      <IndustryServed data={convertToPageSectionData(data?.industry_serve)} />

      <IndustryCaseStudies data={convertToPageSectionData(data?.case_study)} />

      <IndustryDetailsPerspective
        data={convertToPageSectionData(data?.perspective)}
      />
      <IndustryExploreMoreSection
        data={convertToPageSectionData(data?.explore_more)}
      />

      <GetInTouch className="" />

      <section>
        <JoinTeam />
      </section>
    </div>
  );
};

export default IndustryDetailsPageComponent;
