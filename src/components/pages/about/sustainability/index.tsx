"use client";
import React from "react";
import JoinTeam from "@/components/sections/JoinTeam";
import SustainabilityBanner from "./components/banner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import SustainabilityComitment from "./components/commitment";
import SustainabilityQuote from "./components/quote";
import SustainabilityVision from "./components/ourVision";
import SustainabilityKeyPillars from "./components/keyPillars";
import SustainabilityInitiatives from "./components/initiatives";
type Props = {
  data: any;
};

const SustainabilityPage = ({ data }: Props) => {
  return (
    <div>
      <SustainabilityBanner data={convertToPageSectionData(data)} />

      <SustainabilityComitment
        containerClassName="section-py"
        data={convertToPageSectionData(data?.commitment)}
      />

      <SustainabilityQuote data={convertToPageSectionData(data?.quote)} />

      <SustainabilityVision data={convertToPageSectionData(data?.vision)} />

      <SustainabilityKeyPillars
        data={convertToPageSectionData(data?.pillars)}
      />

      <SustainabilityInitiatives
        data={convertToPageSectionData(data?.initiatives)}
      />

      <JoinTeam />
    </div>
  );
};

export default SustainabilityPage;


