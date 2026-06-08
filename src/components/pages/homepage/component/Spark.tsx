import { Content, Heading2 } from "@/components/common/typography";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import TopRightSplitedBanner from "@/components/sections/banner/SplitedBanner/topRighSplitedBanner";
import SafeHtml from "@/components/common/safeHtml";
import { useLineReveal } from "@/hooks/gsap/useLineReveal";
import routes from "@/config/routes";
import { useCascadeSlideIn } from "@/hooks/gsap/useCascadeSlideIn";

type Props = {
    data: IPageSectionData
}
export default function Spark({ data }: Props) {
    // useLineReveal(".line-reveal")
    useCascadeSlideIn({
        target: ".line-reveal",
        y: 40,
        duration: 0.5,
    });
    return (
        <TopRightSplitedBanner bgImage={data?.cover} contentClassName="dark:bg-[#0D0D0D] bg-[#E6E7E8] ">
            <div className='md:mb-0 mb-24 md:text-start text-center line-reveal '>
                <Heading2><SafeHtml content={data.headline} /></Heading2>
                <Content className="lg:max-w-[28vw] !max-w-[500px] mb-[2vw] ">
                    <SafeHtml content={data.excerpt} />
                </Content>
                <PrimaryButton href={routes.capabilities} className="mt-4">Explore Our Services</PrimaryButton>
            </div>
        </TopRightSplitedBanner>
    )
}
