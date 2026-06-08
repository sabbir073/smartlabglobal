import React from "react";
import GlobalWayBanner from "./components/GlobalWayBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import BeliefQuote from "./components/BeliefQuote";
import LeadershipMessage from "./components/LeadershipMessage";
import GlobalCulture from "./components/GlobalCulture";
import ProgramInitiatives from "./components/ProgramInitiatives";
import CorePillars from "./components/CorePillars";
import JoinTeam from "@/components/sections/JoinTeam";
import ExploreSlider from "../../homepage/component/exploreSlider";
import KeyHighlight from "@/components/sections/keyHighlight/KeyHighlight";
type Props = {
  data: any;
};

const GlobalWayPageComponent = ({ data }: Props) => {
  return (
    <div className="dark:bg-[#1C1C1F]">
      <GlobalWayBanner data={convertToPageSectionData(data)} />
      <BeliefQuote data={convertToPageSectionData(data?.belief)} />
      <KeyHighlight containerClassName="" data={convertToPageSectionData(data?.highlight)} />
      <LeadershipMessage data={convertToPageSectionData(data?.leadership)} />
      <GlobalCulture data={convertToPageSectionData(data?.culture)} />
      <CorePillars data={convertToPageSectionData(data?.pillars)} />
      <ProgramInitiatives data={convertToPageSectionData(data?.initiative)} />
      <div className="section-py">
        <ExploreSlider data={data.explore} />
      </div>
      <JoinTeam />
    </div>
  );
};

export default GlobalWayPageComponent;
