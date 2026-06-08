import IndustryPageComponent from "@/components/pages/industry";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.industry,
      siteUrl: `/industries`,
    });
  } catch (error) {
    throw new Error("Error loading industries meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.industry);
  return (
    <div>
      <IndustryPageComponent data={data?.data} />
    </div>
  );
};

export default page;
