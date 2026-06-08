"use client";
import CaseStudies from "./components/CaseStudies";
import NewsHighlights from "./components/NewsHighlights";
import FeaturedEvents from "./components/FeaturedEvents";
import JoinTeam from "@/components/sections/JoinTeam";
import InsightBanner from "./components/InsightBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";

export default function InsightsPage({ data }: any) {
  // console.log(data, "data");
  return (
    <>
      <InsightBanner data={convertToPageSectionData(data)} />
      <section className="section-py">
        <CaseStudies data={convertToPageSectionData(data.case_studies)} />
      </section>
      <section>
        <NewsHighlights data={convertToPageSectionData(data?.news_highlight)} />
      </section>
      <section className="section-py">
        <FeaturedEvents data={convertToPageSectionData(data?.events)} />
      </section>

      <JoinTeam />
    </>
  );
}
