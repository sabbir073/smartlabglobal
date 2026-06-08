"use client";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import Modal from "@/components/common/modal/modal";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading1, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import BottomRightSplitedBanner from "@/components/sections/banner/SplitedBanner/bottomRightSplitedBanner";
import React, { useState } from "react";
import EventRegisterForm from "./EventRegisterForm";

type Props = {
  // data: IPageSectionData;
  data: any;
};

const EventDetailsBanner = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <ContentContainer className="">
        <Heading1 className="pt-10 pb-20 md:w-[90%] !mb-0">
          <SafeHtml content={data.title} />
        </Heading1>
      </ContentContainer>
      <BottomRightSplitedBanner containerClassName="" bgImage={data?.cover}>
        <div className="2xl:max-w-[30.417vw] max-w-[584px] w-full ml-auto text-[#FFFFFF] bg-[#212121] xl:px-[46px] xl:py-[100px] p-[30px] ">
          <p className="text-sm font-medium mb-[10px]">Details</p>
          <div className="font-semibold xl:text-[30px] text-[18px] mb-10">
            <SafeHtml content={data.headline} />
            <SafeHtml
              content={formatEventDate(data?.start_date, data?.end_date)}
            />
            <p> {data.location}</p>
          </div>
          <PrimaryButton
            onClick={() => setIsModalOpen(true)}
            variant="outlined"
            className="border-white text-white hover:bg-[#F4F4F4] hover:text-[#414042]"
          >
            Register Now
          </PrimaryButton>
        </div>

        <div>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            className="bg-[#4D4D4F] text-white md:max-w-[70vw] p-5 md:p-10 lg:p-20"
          >
            <div className="max-h-[90dvh] overflow-y-auto py-5">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[40%]">
                  <Heading2 className=" !text-white ">Register Now</Heading2>
                  <Content className="text-sm !text-white mb-4 max-w-[374px] text-start">
                    We believe in turning ideas into reality and we're ready to
                    join your journey.
                  </Content>
                </div>
                <div className="w-full md:w-[60%]">
                  <EventRegisterForm
                    slug={data?.slug}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </BottomRightSplitedBanner>
    </div>
  );
};

export default EventDetailsBanner;

export function formatEventDate(start_date: string, end_date: string): string {
  const start = new Date(start_date);
  const end = new Date(end_date);

  // Options for formatting
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Dhaka",
  };

  // Dates
  const sameMonth = start.getMonth() === end.getMonth();
  const sameYear = start.getFullYear() === end.getFullYear();

  let dateStr = "";
  if (sameMonth && sameYear) {
    dateStr = `${start.getDate()}-${end.getDate()} ${start.toLocaleDateString(
      "en-US",
      { month: "long" },
    )}, ${start.getFullYear()}`;
  } else {
    dateStr = `${start.toLocaleDateString(
      "en-US",
      dateOptions,
    )} - ${end.toLocaleDateString("en-US", dateOptions)}`;
  }

  // Times
  const startTime = start
    .toLocaleTimeString("en-US", timeOptions)
    .toLowerCase();
  const endTime = end.toLocaleTimeString("en-US", timeOptions).toLowerCase();

  const timeStr = `${startTime} - ${endTime} BST`;

  return `<p>${dateStr}</p>\n<p>${timeStr}</p>`;
}
