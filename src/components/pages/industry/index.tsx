"use client";
import React from "react";
import JoinTeam from "@/components/sections/JoinTeam";
import IndustryBanner from "./components/IndustryBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import IndustryList from "./components/Industries";

type Props = {
  data: any;
};

const IndustryPageComponent = ({ data }: Props) => {
  return (
    <div>
      <IndustryBanner data={convertToPageSectionData(data)} />

      <IndustryList data={convertToPageSectionData(data.industries)} />

      <JoinTeam />
    </div>
  );
};

export default IndustryPageComponent;
