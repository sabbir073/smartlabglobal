"use client";

import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import { formatDateParts } from "@/utils/formatDateParts";
import { formatTime12Hour } from "@/utils/formatTime12Hour";

export default function EventAgenda({ data }: any) {
  return (
    <div className="py-10 md:py-20">
      <Heading2 className="!mb-5">
        <SafeHtml content={data?.headline} />
      </Heading2>
      <div className="md:block hidden">
        {data?.items.map((item: any, index: number) => {
          const { day, month, weekday, year } = formatDateParts(
            item.start_date,
          );
          return (
            <div
              key={index}
              className="flex md:flex-row flex-col justify-between items-center gap-8 border-b border-[#D3D3D3] py-[30px]"
            >
              <div className="flex items-center gap-3 md:w-1/3 w-full">
                <span className="text-[26px] font-semibold">{day}</span>
                <span className="flex flex-col items-center">
                  <span className="text-base capitalize">{month}</span>
                  <span className="text-sm lowercase">{weekday}</span>
                </span>
                <span className="text-base">{year}</span>
              </div>
              <div className="md:w-2/3 w-full flex md:flex-row flex-col justify-between items-center gap-8">
                <div className="md:text-left ">
                  <p className="lg:text-[26px] text-[18px] font-semibold mb-0">
                    {item?.title}
                  </p>
                  <Content>{item?.excerpt}</Content>
                  <p className="lg:text-base text-sm">{item?.location}</p>
                </div>
                <div className="">
                  <span className="text-base">
                    {formatTime12Hour(item?.start_date)}
                  </span>{" "}
                  -{" "}
                  <span className="text-base">
                    {formatTime12Hour(item?.end_date)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden">
        {data?.items.map((item: any, index: number) => {
          const { day, month, weekday, year } = formatDateParts(
            item.start_date,
          );
          const formattedDate = `${month} ${day}, ${year}`;
          return (
            <div
              key={index}
              className="border-b border-[#D3D3D3] py-6 flex  gap-12 text-[#414042]"
            >
              <div className="text-[20px] font-semibold">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="">
                <p className="lg:text-[26px] text-[18px] font-semibold mb-0">
                  {item?.title}
                </p>
                <Content className="mt-2">{item?.excerpt}</Content>

                <div className="mt-4">
                  <p className="text-sm text-[#555]">{item?.location}</p>
                  <p className="text-sm text-[#555]">{formattedDate}</p>
                </div>

                <p className="text-sm  font-medium mt-2">
                  {formatTime12Hour(item?.start_date)} –{" "}
                  {formatTime12Hour(item?.end_date)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
