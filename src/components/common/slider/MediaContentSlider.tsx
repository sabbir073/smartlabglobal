"use client";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import React, { useRef, useState } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperModule } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/css/scrollbar";
import "./styles.scss";
import { cn } from "@/utils/helpers/cn";
import SliderControllButton from "../button/SliderControllButton";

type Props = {
  children: React.ReactNode[];
  sideContent: any[];
  mediaContainerClassName?: string;
};

const MediaContentSlider = ({
  children,
  sideContent,
  mediaContainerClassName = "",
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative our-capabilites flex flex-col lg:flex-row w-full lg:h-[543px]">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        className={cn(
          "mySwiper w-full lg:w-[65%] bg-[#414042] aspect-[391/360] lg:aspect-[919/543] flex items-center justify-center",
          mediaContainerClassName,
        )}
        modules={[Navigation, Scrollbar]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: ".swiper_capabilites_button_top_prev",
          nextEl: ".swiper_capabilites_button_top_next",
          // @ts-ignore
          clickable: true,
        }}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
          hide: false,
        }}
      >
        {children.map((slide: any, index: number) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <div className="py-10 p-4 lg:p-14 lg:w-[35%] bg-white dark:bg-[#1C1C1F] flex flex-col relative">
        <SliderButton />
        {/* Right Side Content: Accepts JSX as second child */}
        <div>{sideContent[activeIndex]}</div>
        {/* SCROLLBAR */}
        <div className="swiper-scrollbar" />
      </div>
    </div>
  );
};

export default MediaContentSlider;

const SliderButton = () => {
  return (
    <div className="justify-end gap-4 mb-4 hidden lg:flex">
      <SliderControllButton
        type="button"
        aria-label="slider left"
        className="swiper_capabilites_button_top_prev  "
      >
        <LeftArrowIcon />
      </SliderControllButton>
      <SliderControllButton
        type="button"
        aria-label="slider right"
        className="swiper_capabilites_button_top_next  "
      >
        <RightArrowIcon />
      </SliderControllButton>
    </div>
  );
};
