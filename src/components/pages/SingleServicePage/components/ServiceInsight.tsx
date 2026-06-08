import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import CarouselComponent from "@/components/common/slider/slider";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import NavLink from "@/components/common/link/NavLink";
import SafeHtml from "@/components/common/safeHtml";
import routes from "@/config/routes";

type Props = {
  data: IPageSectionData;
  containerClassName?: string;
};
const linkBuilder = (type: string, slug: string) => {
  if (type === "news") {
    return routes.newsDetails(slug);
  } else if (type === "view") {
    return routes.blogDetail(slug);
  } else if (type === "event") {
    return routes.eventsDetail(slug);
  }
  return "";
};
export default function ServiceInsight({ data, containerClassName }: Props) {
  return (
    <ContentContainer className={containerClassName}>
      <Heading2 className="md:!text-start !text-center ">
        <SafeHtml content={data?.headline} />{" "}
      </Heading2>
      <CarouselComponent
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.1 },
          1024: { slidesPerView: 1 },
        }}
        controlClassName="md:-top-24 top-[100%]  z-[10] 2xl:right-0 lg:right-0"
        slideClassName="md:pb-0 pb-5"
      >
        {data?.items?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-4 gap-10 items-center w-full md:text-start text-center"
          >
            <div className="md:w-1/2 w-full md:order-1 order-2">
              <ImageComponent
                src={item.thumb}
                alt="Sustainability Commitment"
                className="w-full aspect-[628/499] object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 w-full pl-0 lg:pl-16 md:pl-8 md:order-2 order-1">
              <p className="font-semibold text-sm ">
                {item?.category?.title}
              </p>
              <Heading2 className=" !font-medium my-[43px]">
                <SafeHtml content={item.title} />
              </Heading2>
              <PrimaryButton
                href={linkBuilder(
                  item?.category?.slug as string,
                  item?.slug as string,
                )}
                variant="dark"
                className=""
              >
                Know More
              </PrimaryButton>
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
}
