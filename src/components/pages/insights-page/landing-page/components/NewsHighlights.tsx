// "use client";
import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading2 } from "@/components/common/typography";
import ImageComponent from "@/components/common/image";
import CarouselComponent from "@/components/common/slider/slider";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import NavLink from "@/components/common/link/NavLink";
import SafeHtml from "@/components/common/safeHtml";
import routes from "@/config/routes";
import { useIsMobile } from "@/hooks/useMobile";
import { useDarkMode } from "@/hooks/useDarkMode";

type Props = {
  data: IPageSectionData;
};

export default function NewsHighlights({ data }: Props) {
  const isMobile = useIsMobile();

  // console.log(isMobile, "isMobile");
  return (
    <ContentContainer className="">
      <Heading2 className="mb-0 md:mb-16">
        <SafeHtml content={data.headline} />
      </Heading2>
      <CarouselComponent
        controlClassName="md:-top-24 top-[100%]  z-[10] 2xl:right-0 lg:right-0"
        slideClassName="md:pb-0 pb-5"
      >
        {data?.items?.slice(0, 8)?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-4 gap-10 items-center w-full"
          >
            <div className="md:w-1/2 w-full md:order-1 order-2">
              <ImageComponent
                src={item.thumb}
                alt="Sustainability Commitment"
                className="w-full aspect-[676/769] object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 w-full pl-0 lg:pl-16 md:pl-8 md:order-2 order-1">
              {/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
              <h3 className="heading-3 !font-semibold !leading-[30px]">
                <SafeHtml content={item.title} />
              </h3>
              <Content className="md:mt-8 mt-4">
                <SafeHtml content={item.excerpt} />
              </Content>
              <NavLink href={routes.news}>
                {isMobile ? (
                  <div className="font-poppins text-[14px] font-[600] flex gap-2 items-center px-[0px] py-[14px] md:mt-10 border-none group text-[#414042] dark:text-[#F4F4F4]">
                    View All News <AddIcon />
                  </div>
                ) : (
                  <PrimaryButton
                    variant="outlined"
                    className="px-[30px] py-[14px] mt-10"
                  >
                    View All News
                  </PrimaryButton>
                )}
              </NavLink>
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
}

export const AddIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <path
        d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
        // className="fill-[#414042] group-hover:fill-[#f7f7f7] dark:fill-[#f7f7f7] dark:group-hover:fill-[#414042]"
        fill={isDarkMode ? "#f7f7f7" : "#414042"}
      />
    </svg>
  );
};
