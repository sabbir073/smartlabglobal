import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import { useDarkMode } from "@/hooks/useDarkMode";

import SafeHtml from "@/components/common/safeHtml";
import ExpandableContent from "@/components/common/expandableContent";
type Props = {
  data: IPageSectionData;
};
export default function BrandPromise({ data }: Props) {
  const { isDarkMode } = useDarkMode();
  return (
    <ContentContainer className="section-pb">
      <div className="flex gap-[5vw] md:flex-row flex-col md:justify-between">
        <div className="md:w-[50%] w-full">
          <Content>
            <SafeHtml content={data.subtitle} />
          </Content>

          <Heading2 className="md:w-[45%] w-full mb-4">
            <SafeHtml content={data.headline} />
          </Heading2>

          <ExpandableContent>
            <SafeHtml content={data.excerpt} />
          </ExpandableContent>
        </div>
        <div className="md:w-[45%] w-full max-w-[384px] pt-10 md:pt-0 flex justify-center items-center">
          <ImageComponent
            className="w-full"
            src={isDarkMode ? data.thumbSd : data.thumb}
            alt="logo"
          />
        </div>
      </div>
    </ContentContainer>
  );
}
