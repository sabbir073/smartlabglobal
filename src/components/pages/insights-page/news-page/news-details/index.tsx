"use client"
import ContentContainer from "@/components/layout/container/contentContainer";
import "../../styles.scss";
import ImageComponent from "@/components/common/image";
import NewsDetailBanner from "@/assets/images/dummy/insights/news-details-bg.png"
import JoinTeam from "@/components/sections/JoinTeam";
import SafeHtml from "@/components/common/safeHtml";
import { Heading1 } from "@/components/common/typography";

export default function NewsDetailsPage({ data }: any) {
    return (
        <div className="details">
            <ContentContainer className="">
                <Heading1 className="pt-10 pb-20 md:w-[90%] !mb-0">
                    <SafeHtml content={data?.title} />
                </Heading1>
            </ContentContainer>
            <div className="relative z-0">
                <ImageComponent src={data?.cover} alt="" className="w-full h-auto " />

            </div>
            <ContentContainer className="relative z-10 ">
                <div className="bg-[#ffffffED] dark:bg-[#1C1C1FED] -mt-[125px] lg:-mt-[280px] px-3 py-10 lg:px-11 lg:py-24">
                    {/* <div dangerouslySetInnerHTML={{ __html: eventDetails }} /> */}
                    <SafeHtml content={data?.content} />
                </div>
            </ContentContainer>
            <JoinTeam />
        </div>
    )
}

