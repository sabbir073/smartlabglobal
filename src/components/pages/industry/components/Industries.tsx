import HoverRevealCard from "@/components/common/cards/HoverRevealCard";
import NavLink from "@/components/common/link/NavLink";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const IndustryList = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py">
      <div className="flex flex-col  ">
        <Heading2 className="text-left md:mb-[43px] ">
          <SafeHtml content={data?.headline} />
        </Heading2>
        <Content className="max-w-[782px] w-full text-left  ">
          <SafeHtml content={data?.excerpt} />
        </Content>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {data?.items?.map((item, index) => (
          <NavLink
            key={index}
            href={routes.industryDetail(item.slug)}
            className="md:aspect-[287/360] aspect-[350/400] relative"
          >
            {/* <ImageComponent src={item.cover} alt={item.title} className='w-full h-full object-cover grayscale' />
            <p
              className='absolute w-full h-full top-0 left-0 bg-[#0C0C0CCC] md:p-6 p-4 text-wrap break-words text-[#F4F4F4]'
            >
              {item.title}
            </p> */}
            <HoverRevealCard
              banner={item.thumb ? item.thumb : item.cover}
              title={item.title}
              content={item.subtitle}
              contentClassName="md:justify-between justify-start"
            />
          </NavLink>
        ))}
      </div>
    </ContentContainer>
  );
};

export default IndustryList;
