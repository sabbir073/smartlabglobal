import CareerPage from "@/components/pages/career";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.career,
      siteUrl: `/career`,
    });
  } catch (error) {
    throw new Error("Error loading career meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.career);
  return <CareerPage data={data?.data} />;
};

export default page;
