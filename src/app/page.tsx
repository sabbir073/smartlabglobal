import HomepageComponent from "@/components/pages/homepage";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({ url: api.page.home, siteUrl: `/` });
  } catch (error) {
    throw new Error("Error loading  meta data");
  }
}
export default async function Home() {
  const data: any = await get(api.page.home);



  return (
    <div>
      <HomepageComponent data={data?.data} />
    </div>
  );
}
