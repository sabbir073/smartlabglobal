"use client";
import React from "react";
import Banner from "./components/Banner";
import RecognitionSlider from "./components/RecognitionSlider";
import JoinTeam from "@/components/sections/JoinTeam";
import Awards from "./components/awardsItem/Awards";
import VoiceOfTrust from "./components/VoiceOfTrust";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";

type Props = { data: any };

const AwardsPage = ({ data }: Props) => {
  return (
    <div>
      <Banner data={convertToPageSectionData(data)} />
      <RecognitionSlider
        data={convertToPageSectionData(data.recognition)}
        imageHighlight="thumb"
      />
      <Awards data={convertToPageSectionData(data?.["award-accolades"])} />
      <VoiceOfTrust data={convertToPageSectionData(data.voice)} />
      <JoinTeam />
    </div>
  );
};

export default AwardsPage;
