import PortfolioPage from "@/components/pages/about/portfolio";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.portfolio,
      siteUrl: `/about/our-client-portfolio`,
    });
  } catch (error) {
    throw new Error("Error loading our-client-portfolio meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.portfolio);
  return (
    <div>
      <PortfolioPage data={data?.data} />
    </div>
  );
};

export default page;
