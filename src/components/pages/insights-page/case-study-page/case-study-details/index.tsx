import JoinTeam from "@/components/sections/JoinTeam";
import PageBanner from "@/components/common/banner/PageBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import CaseStudyOverView from "./components/CaseStudyOverView";
import CaseStudyChallenges from "./components/CaseStudyChallenges";
import CaseStudyApproach from "./components/CaseStudyApproach";
import CaseStudyImpact from "./components/CaseStudyImpact";
import CaseStudyTechnology from "./components/CaseStudyTechnology";

export default function CaseStudyDetail({ data }: { data: any }) {
  return (
    <>
      <div>

        <PageBanner data={{ ...convertToPageSectionData(data), excerpt: "" }} />

        <CaseStudyOverView data={convertToPageSectionData(data)} />

        <CaseStudyChallenges data={convertToPageSectionData(data?.challenges)} />

        <CaseStudyApproach data={convertToPageSectionData(data?.approach)} />

        <CaseStudyImpact data={convertToPageSectionData(data?.community)} />

        <CaseStudyTechnology data={convertToPageSectionData(data?.banking)} pdfLink={data?.pdf} />



        <JoinTeam />
      </div>
    </>
  );
}
