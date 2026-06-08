import ServicesPageComponent from "@/components/pages/servicesPage";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.capabilities,
      siteUrl: `/capabilities`,
    });
  } catch (error) {
    throw new Error("Error loading capabilities meta data");
  }
}

const page = async () => {
  const { data }: any = await get(api.page.capabilities);

  return (
    <div>
      <ServicesPageComponent data={data} />
    </div>
  );
};

export default page;
