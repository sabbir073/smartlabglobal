import MediaCard from "@/components/common/cards/MediaCard";
import SafeHtml from "@/components/common/safeHtml";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const LeadershipMessage = ({ data }: Props) => {
  return (
    <ContentContainer className="section-pt">
      <Heading2 className="!mb-[10px]">
        <SafeHtml content={data?.headline} />
      </Heading2>

      <MediaCard
        data={data}
        containerClassName="md:flex-row-reverse flex-col-reverse lg:gap-[69px] gap-[20px]"
        contentContainerClassName="md:auto w-full md:max-w-[455px] max-w-full text-start"
        imageContainerClassName="md:w-auto w-full  md:aspect-[676/769] object-cover"
        imageClassName="h-full"
      />
    </ContentContainer>
  );
};

export default LeadershipMessage;
