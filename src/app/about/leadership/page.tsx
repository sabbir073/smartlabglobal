import LeadershipComponent from "@/components/pages/about/leadership";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.leadership,
      siteUrl: `/about/leadership`,
    });
  } catch (error) {
    throw new Error("Error loading leadership meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.leadership);
  return (
    <div>
      <LeadershipComponent data={data?.data} />
    </div>
  );
};

export default page;
