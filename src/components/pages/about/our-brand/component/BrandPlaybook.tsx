import ContentContainer from "@/components/layout/container/contentContainer";
import { Heading1, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import ExpandableContent from "@/components/common/expandableContent";
type Props = {
  data: IPageSectionData;
};
export default function BrandPlaybook({ data }: Props) {
  return (
    <ContentContainer className="section-py">
      <div className="flex gap-[5vw] md:flex-row flex-col md:justify-between ">
        <Heading2 className="md:w-[371px] w-full !mb-0">
          <SafeHtml content={data.headline} />
        </Heading2>

        <div className="md:w-[50%] w-full ">
          {/* <Content className={`${showMore ? "" : "line-clamp-[4]"} transition-all duration-500 ease-in-out `} >
            <SafeHtml content={data.excerpt} />
          </Content>
          <div className='mt-4'>
            <ButtonComponent
              className='p-0 transition-all duration-500 ease-in-out'
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Less -" : "More +"}
            </ButtonComponent>
          </div> */}
          <ExpandableContent>
            <SafeHtml content={data.excerpt} />
          </ExpandableContent>
        </div>
      </div>
    </ContentContainer>
  );
}

