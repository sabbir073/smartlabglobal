import NewsPage from "@/components/pages/insights-page/news-page";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.news,
      siteUrl: `/insights/news`,
    });
  } catch (error) {
    throw new Error("Error loading insights/news meta data");
  }
}

const News = async () => {
   // const data: any = await get(api.page.dummy.insights.news);
   const data: any = await get(api.page.news);
   return (
      <NewsPage data={data?.data} />
   )
}
export default News