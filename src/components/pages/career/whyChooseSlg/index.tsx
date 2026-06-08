import React from "react";
import Banner from "./components/Banner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import ActiveCardOnTopSlider from "./components/ActiveCardOnTopSlider";
import LifeAtSglSection from "./components/LifeAtSglSection";
import SuccessStories from "./components/SuccessStories";
import JoinTeam from "@/components/sections/JoinTeam";
import CoreValueSection from "./components/CoreValueSection";
import FeaturedProgramSection from "./components/FeaturedProgramSection";
import RecognitionSlider from "../../about/awards/components/RecognitionSlider";

type Props = { data: any };

const WhyChooseSlg = ({ data }: Props) => {
  return (
    <div>
      <Banner data={convertToPageSectionData(data)} videoUrl={data?.video} />
      <ActiveCardOnTopSlider data={convertToPageSectionData(data.highlight)} />
      <LifeAtSglSection data={convertToPageSectionData(data.life_slg)} />
      <FeaturedProgramSection data={convertToPageSectionData(data.programs)} />
      <SuccessStories data={convertToPageSectionData(data.success_stories)} />
      <CoreValueSection data={convertToPageSectionData(data.core_values)} />
      <RecognitionSlider data={convertToPageSectionData(data.recognitions)} />
      <JoinTeam />
    </div>
  );
};

export default WhyChooseSlg;
