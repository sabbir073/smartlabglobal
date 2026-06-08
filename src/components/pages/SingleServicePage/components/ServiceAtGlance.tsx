import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";
import AtGlanceCards from "./common/AtGlanceCards";
import AtGlanceBackdrop from "./common/AtGlanceBackdrop";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
}
export default function ServiceAtGlance({ data, containerClassName }: Props) {
  return (

    <div className={cn("relative", containerClassName)}>
      <ImageComponent
        width={1000}
        height={1000}
        src={data?.cover}
        alt="background"
        className=" absolute top-0 left-0 object-cover w-full h-full z-[-1]"
      />
      <AtGlanceBackdrop />

      <ContentContainer className="bg-[#00000057]">
        <div className='md:pt-[150px] md:pb-[200px] py-20'>
          <Heading2 className="text-white">
            {data?.headline}
          </Heading2>
          <Content className="mb-9 !mx-0 text-white">{data?.excerpt}</Content>
          <AtGlanceCards items={data?.items} />
        </div>
      </ContentContainer>
    </div>

  )
}