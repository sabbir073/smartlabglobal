import SustainabilityPage from "@/components/pages/about/sustainability";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.sustainability,
      siteUrl: `/about/sustainability`,
    });
  } catch (error) {
    throw new Error("Error loading sustainability meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.sustainability);
  return (
    <div>
      <SustainabilityPage data={data?.data} />
    </div>
  );
};

export default page;
