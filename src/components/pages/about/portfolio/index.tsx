import React from "react";
import Banner from "./components/Banner";
import GetInTouch from "@/components/sections/form/GetInTouch/GetInTouch";
import JoinTeam from "@/components/sections/JoinTeam";
import GlobalReach from "./components/GlobalReach";
import FeaturedClient from "./components/FeaturedClient";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";

type Props = { data: any };

const PortfolioPage = ({ data }: Props) => {
  return (
    <div>
      <Banner data={convertToPageSectionData(data)} />
      <FeaturedClient data={convertToPageSectionData(data.highlights)} />
      <GlobalReach data={convertToPageSectionData(data.global)} />
      <GetInTouch
        className="bg-[#4D4D4F]"
      />
      <JoinTeam />
    </div>
  );
};

export default PortfolioPage;
