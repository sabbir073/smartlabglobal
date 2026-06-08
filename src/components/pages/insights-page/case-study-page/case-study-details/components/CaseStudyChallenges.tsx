import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const CaseStudyChallenges = ({ data }: Props) => {
  return (
    <ContentContainer>
      <div className="flex md:flex-row flex-col  section-pb">
        <div className="md:w-[50%] w-full pb-6">
          <div className="md:max-w-[80%]">
            <Heading2 className="md:w-[70%] w-full ">{data?.headline}</Heading2>
            <SafeHtml content={data?.excerpt} />
            <ul className="icon-list mt-10 flex flex-col gap-6 text-sm ">
              {data?.items.map((item: any, index: number) => (
                <li key={index}>
                  <SafeHtml content={item?.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <ImageComponent
            src={data?.cover}
            alt=""
            className="aspect-[605/530]"
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default CaseStudyChallenges;
