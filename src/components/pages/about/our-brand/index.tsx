"use client";
import React from "react";
import JoinTeam from "@/components/sections/JoinTeam";
import Banner from "./component/Banner";
import BrandPlaybook from "./component/BrandPlaybook";
import BrandAction from "./component/BrandAction";
import VideoSection from "./component/videoSection/VideoSection";
import "./component/styles.scss";
import BrandInitiatives from "./component/BrandInitiatives";
import OurCulture from "./component/OurCulture";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import BrandPromise from "./component/BrandPromise";
import CulturalHighlights from "./component/CulturalHighlights";
import ExploreSlider from "../../homepage/component/exploreSlider";
import BrandPillars from "./component/BrandPillars";

type Props = {
  data: any;
};

const OurBrandPage = ({ data }: Props) => {
  return (
    <div>
      <Banner data={convertToPageSectionData(data)} />
      <BrandPlaybook data={convertToPageSectionData(data?.global)} />
      <BrandPromise data={convertToPageSectionData(data?.sprint)} />
      <BrandPillars data={convertToPageSectionData(data?.pillars)} />
      <BrandAction data={convertToPageSectionData(data?.action)} />
      <VideoSection data={convertToPageSectionData(data?.video_section)} />
      <BrandInitiatives data={convertToPageSectionData(data?.initiatives)} />
      <OurCulture data={convertToPageSectionData(data?.culture)} />
      <CulturalHighlights data={convertToPageSectionData(data?.highlights)} />
      <section className="section-pb">
        <ExploreSlider data={convertToPageSectionData(data?.explore)} />
      </section>
      <JoinTeam />
    </div>
  );
};

export default OurBrandPage;
