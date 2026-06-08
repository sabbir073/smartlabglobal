import StrategicAlliancesPage from "@/components/pages/about/strategicAlliances";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.strategicAlliances,
      siteUrl: `/about/strategic-alliance`,
    });
  } catch (error) {
    throw new Error("Error loading strategic-alliance meta data");
  }
}

const page = async (props: Props) => {
  const { data }: any = await get(api.page.strategicAlliances);
  return (
    <div>
      <StrategicAlliancesPage data={data} />
    </div>
  );
};

export default page;
