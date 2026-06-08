import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import ListIcon from "@/assets/images/listIcon.png";

type Props = { data: any };

const InternshipSection = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py">
      <Heading2>
        <SafeHtml content={data.title} />
      </Heading2>
      <h3 className="font-poppins font-semibold lg:text-[18px] text-[14px]  mb-6">
        <SafeHtml content={data.excerpt} />
      </h3>
      <div className="content-text mt-[10px] ">
        <ul className="space-y-3 items-center justify-center pl-2">
          {data.items?.map((item: any, index: number) => (
            <li key={index} className="flex items-center gap-2 ">
              <ImageComponent
                src={ListIcon}
                alt="List Icon"
                className="w-[10px]"
              />
              <span>
                <SafeHtml content={item.title} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ContentContainer>
  );
};

export default InternshipSection;
