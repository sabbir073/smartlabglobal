import EventsPage from "@/components/pages/insights-page/events-page";
import api from '@/config/api/apiList';
import { get } from '@/lib/metadata/fetch';
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { Metadata } from "next";
import React from 'react'

type Props = {}

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.events,
      siteUrl: `/insights/events`,
    });
  } catch (error) {
    throw new Error("Error loading events meta data");
  }
}

const Events = async (props: Props) => {
  // const data: any = await get(api.page.dummy.insights.event);
  const data: any = await get(api.page.events);
  return (
    <div>
      <EventsPage data={data?.data} />
    </div>
  )
}

export default Events