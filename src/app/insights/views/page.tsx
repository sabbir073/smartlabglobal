import ViewsPage from "@/components/pages/insights-page/views-page";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.views,
      siteUrl: `/insights/views`,
    });
  } catch (error) {
    throw new Error("Error loading insights/views meta data");
  }
}

const Views = async () => {
    // const data: any = await get(api.page.dummy.insights.views);
    const data: any = await get(api.page.views);

    return (
        <ViewsPage data={data?.data} />
    )
}
export default Views;