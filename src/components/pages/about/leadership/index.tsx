import React from "react";
import TeamMembers from "./sections/teamMembers";
import JoinTeam from "@/components/sections/JoinTeam";
import LeadershipPhilosophy from "./sections/philosophy";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import LeadershipBanner from "./sections/leadershipBanner";

type Props = { data: any };

const LeadershipComponent = ({ data }: Props) => {
  return (
    <div>
      <LeadershipBanner data={convertToPageSectionData(data)} />
      <LeadershipPhilosophy data={convertToPageSectionData(data.philosophy)} />
      <TeamMembers data={data.leadership} />
      <JoinTeam />
    </div>
  );
};

export default LeadershipComponent;
