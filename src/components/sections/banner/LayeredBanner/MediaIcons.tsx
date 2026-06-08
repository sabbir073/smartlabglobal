"use client";
import DownArrowIcon from "@/assets/icons/DownArrowIcon";
import React, { useEffect, useState } from "react";

type Props = {};

const MediaIcons = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 500); // change every 1 second

    return () => clearInterval(interval);
  }, []);

  const getStrokeColor = (index: any) =>
    index === activeIndex ? "#F28C28" : "#FFFFFF";

  return (
    <div className="flex items-center flex-col gap-4">
      <div className="w-[24px] h-[24px]">
        <svg
          className="w-full h-auto"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1426_22690"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="16"
          >
            <path
              d="M10 1C19 1 19 1 19 8C19 15 19 15 10 15C1 15 1 15 1 8C1 1 1 1 10 1Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 4.5L14 8L8 11.5V4.5Z" fill="black" />
          </mask>
          <g mask="url(#mask0_1426_22690)">
            <path d="M22 -4H-2V20H22V-4Z" fill="white" />
          </g>
        </svg>
      </div>
      <div className="w-[24px] h-[24px]">
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="w-[24px] h-[24px]">
        <svg
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0H2.5L17.5 20H15L0 0ZM4.5 0H7L22 20H19.5L4.5 0Z"
            fill="white"
          />
          <path d="M2 0H7V2H2V0ZM15 20H20V18H15V20Z" fill="white" />
          <path d="M17.5 0H21L4 20H0.5L17.5 0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default MediaIcons;
