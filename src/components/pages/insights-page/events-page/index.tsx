"use client";

import EventsWrapper from "./components/EventsWrapper";
import JoinTeam from "@/components/sections/JoinTeam";
import EventBanner from "./components/EventBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
export default function EventsPage({ data }: any) {
  return (
    <>
      <div>
        <EventBanner data={convertToPageSectionData(data)} />
        <section className="md:pt-[100px] md:pb-[200px] pt-8 pb-[76px]">
          <EventsWrapper
            data={data?.event}
            filterItems={data?.filter_param?.year ?? []}
          />
        </section>
        <JoinTeam />
      </div>
    </>
  );
}
