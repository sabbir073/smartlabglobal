import NewsDetailsPage from "@/components/pages/insights-page/news-page/news-details";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    return await GetMetaData({
      url: api.page.newsDetails(slug),
      siteUrl: `/insights/news/${slug}`,
    });
  } catch (error) {
    throw new Error("Error loading insights/news child meta data");
  }
}

// export default async function NewsDetails({ params }: Props) {
//     const { slug } = params;

//     const res: any = await get(api.page.newsDetails(slug))

//     return (
//         <NewsDetailsPage data={res?.data} />
//     )
// }

export default async function NewsDetails({ params }: Props) {
  const { slug } = params;

  try {
    const res: any = await get(api.page.newsDetails(slug));
    const newsData = res?.data;

    // If no data is returned, throw an error to trigger error.tsx
    if (!newsData) {
      throw new Error("News not found");
    }

    return <NewsDetailsPage data={newsData} />;
  } catch (error: any) {
    console.error("Error fetching news details:", error);
    // Throw error to trigger Next.js error page
    throw new Error("Failed to load news details");
  }
}
