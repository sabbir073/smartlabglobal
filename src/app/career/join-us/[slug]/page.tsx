import JobDetailsPageComponent from "@/components/pages/career/jobDetails";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    return await GetMetaData({
      url: api.page.joinUsDetails(slug),
      siteUrl: `/career/join-us/${slug}`,
    });
  } catch (error) {
    throw new Error(`Error loading ${slug} meta data`);
  }
}

const page = async ({ params }: Props) => {
  const { slug } = params;
  const { data }: any = await get(api.page.joinUsDetails(slug));
  return (
    <div>
      <JobDetailsPageComponent data={data} slug={slug} />
    </div>
  );
};

export default page;
