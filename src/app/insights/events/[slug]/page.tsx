import EventsDetailsPage from "@/components/pages/insights-page/events-page/event-details";
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
      url: api.page.eventDetails(slug),
      siteUrl: `/insights/events/${slug}`,
    });
  } catch (error) {
    throw new Error("Error loading insights/events child meta data");
  }
}

// const EventsDetails = async ({ params }: Props) => {
//   // const data: any = await get(api.page.dummy.insights.event_detail);
//   const data: any = await get(api.page.eventDetails(params.slug));
//   const settingsData: any = await get(api.settings);
//   return (
//     <div>
//       <EventsDetailsPage data={data?.data} settingsData={settingsData?.data} />
//     </div>
//   )
// }

// export default EventsDetails

const EventsDetails = async ({ params }: Props) => {
  try {
    // Fetch event details
    const data: any = await get(api.page.eventDetails(params.slug));
    const eventData = data?.data;

    // Fetch settings
    const settingsData: any = await get(api.settings);
    const settings = settingsData?.data;

    // If either is missing, throw an error to trigger error.tsx
    if (!eventData || !settings) {
      throw new Error("Event details or settings not found");
    }

    return (
      <div>
        <EventsDetailsPage data={eventData} settingsData={settings} />
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching event details:", error);
    // Throw error so Next.js renders error.tsx
    throw new Error("Failed to load event details");
  }
};

export default EventsDetails;
