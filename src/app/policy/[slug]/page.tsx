import PolicyComponent from "@/components/pages/policy/PolicyComponent";
import api from "@/config/api/apiList";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    return await GetMetaData({
      url: api.page.policy(slug),
      siteUrl: `/policy/${slug}`,
    });
  } catch (error) {
    throw new Error("Error loading policy child meta data");
  }
}

const page = ({ params }: Props) => {
  const { slug } = params;
  return <PolicyComponent slug={slug} />;
};

export default page;
