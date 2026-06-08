"use client"
import JoinTeam from "@/components/sections/JoinTeam"
import NewsWrapper from "./components/NewsWrapper"
import NewsBanner from "./components/NewsBanner"
import convertToPageSectionData from "@/utils/helpers/convertToSectionData"


export default function NewsPage({ data }: any) {
    return (
        <>
            <div>
                <NewsBanner data={convertToPageSectionData(data)} />
                <section className="md:py-[5.521vw] py-[76px]">
                    <NewsWrapper data={data?.news} filterItems={data?.filter_param?.year ?? []} />
                </section>
                <JoinTeam />
            </div>
        </>
    )
}