"use client";
import { calculateTimeLeft } from "@/utils/calculateTimeLeft";
import React, { useEffect, useState } from "react";

const EndDate = ({ data }: any) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(data));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(data));
    }, 1000);

    return () => clearInterval(timer);
  }, [data]);

  return (
    <div className="flex lg:flex-row flex-col gap-4 justify-between py-16">
      <h2 className="heading-2 leading-[1.5] !mb-0 lg:w-[calc(50%-8px)] w-full max-w-[457px]">
        Count
        <span className="red-text"> Every Second </span>
        Until the Event
      </h2>
      <div className="lg:w-[calc(50%-8px)] w-full flex lg:gap-10 gap-5 lg:justify-end sm:justify-start justify-between">
        <div>
          <p className="2xl:text-[40px] lg:text-[30px] text-[24px] font-semibold">
            {timeLeft.days}
          </p>
          <p className="font-medium text-sm">Days</p>
        </div>
        <div className="2xl:text-[40px] lg:text-[30px] text-[24px]">:</div>
        <div>
          <p className="2xl:text-[40px] lg:text-[30px] text-[24px] font-semibold">
            {timeLeft.hours}
          </p>
          <p className="font-medium text-sm">Hours</p>
        </div>
        <div className="2xl:text-[40px] lg:text-[30px] text-[24px]">:</div>
        <div>
          <p className="2xl:text-[40px] lg:text-[30px] text-[24px] font-semibold">
            {timeLeft.minutes}
          </p>
          <p className="font-medium text-sm">Minutes</p>
        </div>
        <div className="2xl:text-[40px] lg:text-[30px] text-[24px]">:</div>
        <div>
          <p className="2xl:text-[40px] lg:text-[30px] text-[24px] font-semibold">
            {timeLeft.seconds}
          </p>
          <p className="font-medium text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};
export default EndDate;
