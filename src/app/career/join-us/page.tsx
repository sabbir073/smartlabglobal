import CareerGlobalPageComponent from "@/components/pages/career/jobs";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.joinUs,
      siteUrl: `/career/join-us`,
    });
  } catch (error) {
    throw new Error("Error loading join-us meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.joinUs);
  return (
    <div>
      <CareerGlobalPageComponent data={data?.data} />
    </div>
  );
};

export default page;
