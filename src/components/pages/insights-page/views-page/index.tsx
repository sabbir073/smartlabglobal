"use client";
import JoinTeam from "@/components/sections/JoinTeam";
import ViewsWrapper from "./components/ViewsWrapper";
import ViewsBanner from "./components/ViewsBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
export default function ViewsPage({ data }: any) {
  return (
    <>
      <div>
        <ViewsBanner data={convertToPageSectionData(data)} />
        <section className="md:py-[5.521vw] py-[76px]">
          <ViewsWrapper
            data={data?.views}
            filterItems={data?.filter_param?.industries ?? []}
          />
        </section>
        <JoinTeam />
      </div>
    </>
  );
}
