import React from "react";
import Banner from "./components/Banner";
import KeyAlliance from "./components/KeyAlliance";
import JoinTeam from "@/components/sections/JoinTeam";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";

type Props = { data: any };

const strategicAlliances = ({ data }: Props) => {
  return (
    <div>
      <Banner data={convertToPageSectionData(data)} />

      {/*
       There’s no need to convert the alliances data using convertToPageSectionData, as the API structure for this data is different
      */}
      <KeyAlliance data={data.key_alliances} />
      <JoinTeam />
    </div>
  );
};

export default strategicAlliances;
