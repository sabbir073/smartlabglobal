import SchemaWrapper from "@/components/layout/schemaWrapper/SchemaWrapper";
import SingleServicePage from "@/components/pages/SingleServicePage";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { getServiceWithFaqJsonLd } from "@/lib/metadata/jsonLdSchemas/serviceLd";
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
    return await GetMetaData({ url: api.page.capabilityDetails(slug), siteUrl: `/capabilities/${slug}` });
  } catch (error) {
    throw new Error("Error loading  meta data");
  }
}

const page = async ({ params }: Props) => {
  const { slug } = params;
  // const data: any = await get(api.page.dummy.capabilityDetails);
  const data: any = await get(api.page.capabilityDetails(slug));

  const service = data?.data

  const jsonLd = getServiceWithFaqJsonLd({
    slug: service.slug,
    title: service.description ?? service.title,
    description: service.subtitle ?? service.title,
    faqs: service?.faq?.items?.map((faq: any) => ({ question: faq.title, answer: faq.excerpt })) ?? [],
  });


  return <SchemaWrapper jsonLd={jsonLd}>
    <SingleServicePage data={data?.data} />
  </SchemaWrapper>;
};

export default page;
