import CaseStudyPage from "@/components/pages/insights-page/case-study-page";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.case_study,
      siteUrl: `/insights/case-study`,
    });
  } catch (error) {
    throw new Error("Error loading insights/case-study meta data");
  }
}

const CaseStudy = async () => {
  const data: any = await get(api.page.case_study);
  return (
    <div>
      <CaseStudyPage data={data?.data} />
    </div>
  );
};

export default CaseStudy;
