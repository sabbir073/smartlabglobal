import WhyChooseSlg from "@/components/pages/career/whyChooseSlg";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.whySmartLab,
      siteUrl: `/career/why-smart-lab`,
    });
  } catch (error) {
    throw new Error("Error loading why-smart-lab meta data");
  }
}

const page = async (props: Props) => {
  const { data }: any = await get(api.page.whySmartLab);
  return <WhyChooseSlg data={data} />;
};

export default page;
