import OurBrandPage from "@/components/pages/about/our-brand";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.ourBrand,
      siteUrl: `/about/our-brand`,
    });
  } catch (error) {
    throw new Error("Error loading our-brand meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.ourBrand);
  return (
    <div>
      <OurBrandPage data={data?.data} />
    </div>
  );
};

export default page;
