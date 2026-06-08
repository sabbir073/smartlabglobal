import AboutUsPageComponent from "@/components/pages/about/about";
import api from "@/config/api/apiList";
import routes from "@/config/routes";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({ url: api.page.about, siteUrl: routes.about });
  } catch (error) {
    throw new Error("Error loading about meta data");
  }
}

export default async function page() {
  const { data }: any = await get(api.page.about);

  return (
    <div>
      <AboutUsPageComponent data={data} />
    </div>
  );
}
