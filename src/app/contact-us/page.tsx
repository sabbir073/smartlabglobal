import ContactUsPageComponent from "@/components/pages/contactUs";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from "react";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.contact_us,
      siteUrl: `/contact-us`,
    });
  } catch (error) {
    throw new Error("Error loading contact-us meta data");
  }
}

const page = async (props: Props) => {
  const data = await get(api.page.contact_us);
  return (
    <div>
      <ContactUsPageComponent data={data} />
    </div>
  );
};

export default page;
