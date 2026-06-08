"use client";
import React, { useEffect, useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import "./styles.scss";
import ImageComponent from "../image";
import NavLink from "../link/NavLink";
import { Heading2 } from "../typography";
import SafeHtml from "../safeHtml";
import { cn } from "@/utils/helpers/cn";
import routes from "@/config/routes";
import SliderControllButton from "../button/SliderControllButton";

type PageProps = {
  items: ISectionItem[];
  headline?: string;
  headlineClassName?: string;
  arrowHasWhiteBorder?: boolean;
};

function CoverFlowSlider({
  items,
  headline = "",
  headlineClassName = "",
  arrowHasWhiteBorder = false,
}: PageProps) {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const prevButtonClass = `swiper-button-prev-${safeId}`;
  const nextButtonClass = `swiper-button-next-${safeId}`;
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataItems, setDataItems] = useState<ISectionItem[]>(items);

  useEffect(() => {
    const data = [];
    if (Array.isArray(items) && items.length) {
      data.push(...items);
      while (data.length < 6) {
        data.push(...data);
      }
    }
    setDataItems(data);
  }, [items]);

  if (!dataItems || !dataItems.length || dataItems.length < 6) return null;

  return (
    <div>
      {headline && (
        <Heading2
          className={cn(
            "md:text-start md:mb-8 mb-16 text-center",
            headlineClassName,
          )}
        >
          <SafeHtml content={headline} />
        </Heading2>
      )}
      <div className="case-study w-full mx-auto pt-2 relative">
        <Swiper
          initialSlide={2}
          effect={"coverflow"}
          grabCursor={true}
          // loop={true}
          speed={1000}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 45,
            stretch: 90,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper !p-[30px] !pb-[60px] "
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: `.${prevButtonClass}`,
            nextEl: `.${nextButtonClass}`,
            // @ts-ignore
            clickable: true,
          }}
        >
          {dataItems
            ?.filter((item, index) => index < 10)
            .map((item, index: number) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide
                  key={index}
                  className={`swiper-slide xl:!w-[23.07vw]  aspect-square lg:!w-[26vw] md:!w-[35vw] sm:!w-[230px] !w-[80%] !rounded-md ${
                    isActive ? "show-content" : ""
                  }`}
                >
                  <div className="text-white w-full h-full flex flex-col justify-end lg:p-[36px] p-[23px] group relative overflow-hidden">
                    <ImageComponent
                      src={item?.thumb}
                      alt={`case-${index}`}
                      className="object-cover capability-bg !duration-1000 transform transition-all h-full w-full absolute top-0 left-0 z-[-2]"
                    />
                    <div className="h-[100%] w-full top-0 left-0 bg-black/20 absolute"></div>

                    <div
                      className={`absolute bottom-0 left-0 w-full px-4 pb-4 transition-all duration-500 ease-in-out z-10
                              ${
                                isActive
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-full opacity-0"
                              }
                            `}
                    >
                      <p className="font-poppins font-semibold text-[14px] md:text-[16px] leading-[22px] tracking-[0] capitalize text-start">
                        {item.title}
                      </p>
                      <NavLink
                        href={routes.caseStudyDetails(item.slug)}
                        className="flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out mt-2 text-red-500 font-semibold text-[14px] md:text-[16px]"
                      >
                        View Details <RightArrowIcon />
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="absolute lg:-top-20 -top-8 md:right-0 right-1/2  md:translate-x-0 translate-x-1/2 flex gap-4">
          <SliderControllButton
            type="button"
            disabled={activeIndex === 0}
            aria-label="slider left"
            className={`${prevButtonClass}`}
            arrowHasWhiteBorder={arrowHasWhiteBorder}
          >
            <LeftArrowIcon disabled={activeIndex === 0} />
          </SliderControllButton>
          <SliderControllButton
            type="button"
            disabled={activeIndex >= dataItems.length - 1}
            aria-label="slider right"
            className={`${nextButtonClass}`}
            arrowHasWhiteBorder={arrowHasWhiteBorder}
          >
            <RightArrowIcon disabled={activeIndex >= dataItems.length - 1} />
          </SliderControllButton>
        </div>
      </div>
    </div>
  );
}

export default CoverFlowSlider;
