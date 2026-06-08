import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperModule } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/css/scrollbar";
import "./styles.scss";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import { cn } from "@/utils/helpers/cn";
import { useEffect, useId, useState } from "react";
import SliderControllButton from "../button/SliderControllButton";

type Props = SwiperProps & {
  children?: React.ReactNode[];
  slideClassName?: string;
  controlClassName?: string;
  containerClassName?: string;
  onSlideChange?: (activeIndex: number) => void;
  slideChangeSpeed?: number;
  modules?: SwiperModule[];
  showPagination?: boolean;
  arrowHasWhiteBorder?: boolean;
  slidesPerView?: number | "auto";
  breakpoints?: SwiperProps["breakpoints"];
};

export default function CarouselComponent({
  children,
  slideClassName = "",
  controlClassName = "",
  containerClassName = "",
  onSlideChange,
  slideChangeSpeed,
  modules = [],
  showPagination,
  loop = false,
  arrowHasWhiteBorder = false,
  slidesPerView,
  breakpoints,
  ...swiperProps
}: Props) {
  const [boundaryStatus, setBoundaryStatus] = useState<
    "start" | "end" | null | undefined
  >("start");

  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const prevButtonClass = `swiper-button-prev-${safeId}`;
  const nextButtonClass = `swiper-button-next-${safeId}`;
  return (
    <div className="relative w-full our-capabilites">
      <Swiper
        spaceBetween={16}
        className={cn("mySwiper ", containerClassName)}
        modules={[Navigation, Pagination, ...modules]}
        loop={loop}
        navigation={{
          prevEl: `.${prevButtonClass}`,
          nextEl: `.${nextButtonClass}`,
          // @ts-ignore
          clickable: true,
        }}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
          hide: false,
        }}
        slidesPerView={slidesPerView ?? "auto"}
        breakpoints={breakpoints}
        onSlideChange={(swiper) => {
          setBoundaryStatus(
            swiper.isBeginning ? "start" : swiper.isEnd ? "end" : null,
          );
          onSlideChange?.(swiper.realIndex); // safe optional call
        }}
        speed={slideChangeSpeed ?? 300}
        pagination={
          showPagination
            ? {
                el: ".swiper-pagination",
                clickable: true,
              }
            : undefined
        }
        {...swiperProps}
      >
        {children?.map((slide: any, index: number) => (
          <SwiperSlide
            // className="xl:!w-[247px] !w-[185px] !aspect-[247/320]"
            className={cn("w-auto md:pb-0 pb-7 !h-auto", slideClassName)}
            key={index}
          >
            {slide}
          </SwiperSlide>
        ))}
        {showPagination && (
          <div className="swiper-pagination !mt-0 !relative !bottom-0 !text-center" />
        )}
      </Swiper>
      <div
        className={cn(
          "absolute lg:-top-24 -top-20 md:right-0 right-1/2 md:translate-x-0 translate-x-1/2 flex gap-4 ",
          controlClassName,
        )}
      >
        <SliderControllButton
          arrowHasWhiteBorder={arrowHasWhiteBorder}
          className={`${prevButtonClass} `}
        >
          <LeftArrowIcon disabled={boundaryStatus === "start"} />
        </SliderControllButton>
        <SliderControllButton
          arrowHasWhiteBorder={arrowHasWhiteBorder}
          className={`${nextButtonClass}`}
        >
          <RightArrowIcon disabled={boundaryStatus === "end"} />
        </SliderControllButton>
      </div>
    </div>
  );
}
