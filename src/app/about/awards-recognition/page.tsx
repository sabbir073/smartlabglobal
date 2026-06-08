import AwardsPage from "@/components/pages/about/awards";
import api from "@/config/api/apiList";
import routes from "@/config/routes";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.awards,
      siteUrl: `/about/awards-recognition`,
    });
  } catch (error) {
    throw new Error("Error loading awards-recognition meta data");
  }
}

const page = async (props: Props) => {
  // const { data }: any = await get(api.page.dummy.about.awards);
  const { data }: any = await get(api.page.awards);

  return (
    <div>
      <AwardsPage data={data} />
    </div>
  );
};

export default page;
