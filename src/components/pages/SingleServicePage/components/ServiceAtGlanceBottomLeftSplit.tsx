import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";
import BottomLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/bottomLeftSplitedBanner";
import AtGlanceCards from "./common/AtGlanceCards";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
}
export default function ServiceAtGlanceBottomLeftSplit({ data, containerClassName }: Props) {
  return (

    <BottomLeftSplitedBanner
      bgImage={data?.cover}
      splitClassName="bg-[#E6E7E8]"
      showBackDrop
      backDropClassName="bg-black/28 backdrop-blur-[0]"
    >
      <div className={cn("relative", containerClassName)}>
        {/* <ImageComponent width={1000} height={1000} src={data?.cover} alt="background" className=" absolute top-0 left-0 object-cover w-full h-full z-[-1]" /> */}
        <div>
          <Heading2 className="text-[#414042]">
            {data?.headline}
          </Heading2>
          <Content className="mb-9 !mx-0 text-[#4D4D4F]">{data?.excerpt}</Content>
          <AtGlanceCards items={data?.items} />
        </div>
      </div>
    </BottomLeftSplitedBanner>

  )
}