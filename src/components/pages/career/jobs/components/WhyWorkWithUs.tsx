import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import ListIcon from "@/assets/images/listIcon.png";

type Props = { data: IPageSectionData };

const WhyWorkWithUs = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py">
      <Heading2>
        <SafeHtml content={data?.headline} />
      </Heading2>
      <Content className="max-w-[856px]">
        <SafeHtml
          content={data?.excerpt}
        />
      </Content>
      <div className="content-text mt-[50px] ">
        <ul className="space-y-3 items-center justify-center">
          {data?.items?.map((item, index) => (
            <li key={index} className="flex items-center gap-2 ">
              <ImageComponent
                src={ListIcon}
                alt="List Icon"
                className="w-[10px]"
              />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </ContentContainer>
  );
};

export default WhyWorkWithUs;
