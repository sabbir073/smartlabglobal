import CaseStudyDetail from "@/components/pages/insights-page/case-study-page/case-study-details";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    return await GetMetaData({
      url: api.page.case_studyDetails(slug),
      siteUrl: `/insights/case-study/${slug}`,
    });
  } catch (error) {
    throw new Error("Error loading insights/case-study child meta data");
  }
}

// const detailPage = async ({ params }: Props) => {
//   const data: any = await get(api.page.case_studyDetails(params.slug));

//   return (
//     <div>
//       <CaseStudyDetail data={data?.data} />
//     </div>
//   );
// };

// export default detailPage;

const detailPage = async ({ params }: Props) => {
  try {
    const res: any = await get(api.page.case_studyDetails(params.slug));
    const data = res?.data;

    // Throw error if no data returned
    if (!data) {
      throw new Error("Case study not found");
    }

    return (
      <div>
        <CaseStudyDetail data={data} />
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching case study details:", error);
    // Throw error to trigger Next.js error.tsx
    throw new Error("Failed to load case study details");
  }
};

export default detailPage;
