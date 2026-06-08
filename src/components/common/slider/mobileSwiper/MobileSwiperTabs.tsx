"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import ImageComponent from "../../image";
import { useDarkMode } from "@/hooks/useDarkMode";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

interface MobileSwiperTabsProps {
  //   data: {
  //     items: {
  //       title: string;
  //       icon: string;
  //       iconHover?: string;
  //       icon_dark?: string;
  //       icon_darkHover?: string;
  //     }[];
  //   };
  data: any;
  isDarkMode?: boolean;
  onChange?: (index: number) => void;
  className?: string;
}

export default function MobileSwiperTabs({
  data,
  onChange,
  className = "",
}: MobileSwiperTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDarkMode } = useDarkMode();

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    if (onChange) onChange(swiper.activeIndex);
  };

  return (
    <div className={`lg:hidden block ${className}`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        // pagination={{
        //   el: ".swiper-pagination",
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper my-10"
        onSlideChange={handleSlideChange}
      >
        {data?.items?.map((item: any, index: number) => {
          const light = item.icon;
          const lightActive = item.iconHover || light;
          const dark = item.icon_dark || light;
          const darkActive = item.icon_darkHover || dark;

          const isActive = activeIndex === index;
          const iconSrc = isDarkMode
            ? isActive
              ? darkActive
              : dark
            : isActive
            ? lightActive
            : light;

          return (
            <SwiperSlide key={index} className="flex flex-col">
              <div
                className={`
                  px-7 py-4 rounded-xl text-[14px] font-medium
                  cursor-pointer transition-all duration-300 ease-in-out select-none
                  flex items-center gap-2 max-w-[250px] mx-auto
                  ${
                    isActive
                      ? "bg-[#4D4D4F] lg:dark:bg-white text-white lg:dark:text-[#414042]"
                      : ""
                  }
                `}
              >
                <ImageComponent
                  src={iconSrc}
                  alt={`${item.title} icon`}
                  className={`${
                    isActive ? "scale-100 rotate-6" : "scale-90 opacity-80"
                  } w-[35px] h-[35px] object-contain mb-2 transition-all duration-300`}
                />
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <div className="swiper-pagination !mt-4 !relative !bottom-0 !text-center" /> */}
    </div>
  );
}
