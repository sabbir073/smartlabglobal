"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import "../../styles.scss";
import ImageComponent from "@/components/common/image";

import JoinTeam from "@/components/sections/JoinTeam";
import { Content } from "@/components/common/typography";
import { useState } from "react";
import SafeHtml from "@/components/common/safeHtml";
import ExpandableContent from "@/components/common/expandableContent";
import { useDarkMode } from "@/hooks/useDarkMode";
export default function ViewsDetailsPage({ data }: any) {
  const [showMoreScale, setShowMoreScale] = useState(false);
  return (
    <div className="details">
      <ContentContainer className="">
        <h1 className="heading-1 pt-10 pb-20 md:w-[90%] !mb-0">
          <SafeHtml content={data?.title} />
        </h1>
      </ContentContainer>
      <div className="relative z-0">
        <ImageComponent
          src={data?.cover}
          alt=""
          className="w-full h-auto max-h-[820px]"
        />
      </div>
      <ContentContainer className="relative z-10 ">
        <div className="lg:py-[100px] lg:px-[43px] px-[10px] py-10 bg-[#ffffffED] dark:bg-[#1C1C1FED]  -mt-[125px] lg:-mt-[280px]">
          {/* <div dangerouslySetInnerHTML={{ __html: eventDetails }} /> */}
          <SafeHtml content={data?.content} />
          <div className="mt-7">
            <p className="text-lg font-poppins font-normal leading-[25px] align-middle text-[#000000] dark:text-[#F4F4F4]">
              About the Author
            </p>
            <div className="flex md:flex-row flex-col items-center border-t border-[#000000] dark:border-[#f4f4f4] pt-10 mt-10">
              <div className="w-full md:w-[25%] mb-auto">
                <ImageComponent
                  src={data?.author?.photo}
                  alt=""
                  className="aspect-square max-w-[170px] md:max-w-[200px] mx-auto md:mx-0 w-full h-full rounded-full"
                />
              </div>
              <div className="w-full md:w-[75%]">
                <Content>
                  <div className="flex items-center gap-24 text-[#2F2F34] dark:text-[#D9D9D9]">
                    <h3 className="font-poppins font-normal text-[16px] leading-[16px] tracking-normal align-middle py-3 text-[#2F2F34] dark:text-[#D9D9D9]">
                      {data?.author?.name}
                    </h3>
                    {data?.author?.linkedin_profile && (
                      <a
                        href={data.author.linkedin_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <LinkedinIcon />
                      </a>
                    )}
                  </div>
                  <h3 className="font-poppins font-normal text-[16px] leading-[16px] tracking-normal align-middle py-3">
                    {data?.author?.designation}
                  </h3>
                  {data?.author?.description?.length > 0 && (
                    // <ExpandableContent className="py-8 font-poppins">
                    <SafeHtml content={data?.author?.description} />
                    // {/* </ExpandableContent> */}
                  )}
                </Content>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
      <JoinTeam />
    </div>
  );
}

const LinkedinIcon = () => {
  const { isDarkMode } = useDarkMode();
  const fillColor = isDarkMode ? "#D9D9D9" : "#2F2F34";
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 -0.00976562C20.7969 -0.00976562 21.5 0.693359 21.5 1.53711V19.4902C21.5 20.334 20.7969 20.9902 20 20.9902H1.95312C1.15625 20.9902 0.5 20.334 0.5 19.4902V1.53711C0.5 0.693359 1.15625 -0.00976562 1.95312 -0.00976562H20ZM6.82812 17.9902V8.00586H3.73438V17.9902H6.82812ZM5.28125 6.59961C6.26562 6.59961 7.0625 5.80273 7.0625 4.81836C7.0625 3.83398 6.26562 2.99023 5.28125 2.99023C4.25 2.99023 3.45312 3.83398 3.45312 4.81836C3.45312 5.80273 4.25 6.59961 5.28125 6.59961ZM18.5 17.9902V12.5059C18.5 9.83398 17.8906 7.72461 14.75 7.72461C13.25 7.72461 12.2188 8.56836 11.7969 9.36523H11.75V8.00586H8.79688V17.9902H11.8906V13.0684C11.8906 11.7559 12.125 10.4902 13.7656 10.4902C15.3594 10.4902 15.3594 11.9902 15.3594 13.1152V17.9902H18.5Z"
        fill={fillColor}
      />
    </svg>
  );
};
