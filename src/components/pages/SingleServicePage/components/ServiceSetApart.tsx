import { Content, Heading2 } from "@/components/common/typography"
import ContentContainer from "@/components/layout/container/contentContainer"
import OverviewColumns from "@/components/common/cards/OverviewColumns"
type Props = {
  data: IPageSectionData;
  containerClassName?: string;
}
export default function ServiceSetApart({ data, containerClassName }: Props) {
  return (
    <ContentContainer className={containerClassName}>
      <div className="mx-auto  ">
        <div className="mb-10 md:text-start text-center">
          <Heading2>{data.headline}</Heading2>
          <Content className=' md:w-2/3 w-full '>{data?.excerpt}</Content>
        </div>
        <OverviewColumns
          containerClassName=" md:flex-row flex-col "
          cardClassName="md:text-left text-center md:px-8 px-0 md:mx-0 mx-7  "
          data={data?.items?.map((item) => ({
            title: item?.title,
            content: item?.excerpt
          }))}
        />
      </div>
    </ContentContainer>
  )
}
