import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";
import TopRightSplitedBanner from "@/components/sections/banner/SplitedBanner/topRighSplitedBanner";
import ContentContainer from "@/components/layout/container/contentContainer";
import AtGlanceCards from "./common/AtGlanceCards";
import AtGlanceBackdrop from "./common/AtGlanceBackdrop";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
}
export default function ServiceAtGlanceTopRightSplit({ data, containerClassName }: Props) {
  return (

    <TopRightSplitedBanner
      bgImage={data?.cover}
      contentClassName="bg-[#E6E7E8]"
      contentContainerClassName="xl:pb-[30px] lg:pb-[90px] md:pb-[90px] pb-[30px] pt-[15vw]"
      showBackDrop
      backDropClassName="bg-black/28 backdrop-blur-[0]"
    >
      <div className={cn("  w-full top-[40%] left-0 ", containerClassName)}>
        {/* <ImageComponent width={1000} height={1000} src={data?.cover} alt="background" className=" absolute top-0 left-0 object-cover w-full h-full z-[-1]" /> */}
        <div className="">
          <Heading2 className="lg:text-[#F4F4F4] text-[#414042]">
            {data?.headline}
          </Heading2>
          <Content className="mb-9 !mx-0 lg:text-[#D9D9D9] text-[#4D4D4F]">{data?.excerpt}</Content>
          <AtGlanceCards items={data?.items} />
        </div>
      </div>
    </TopRightSplitedBanner>

  )
}