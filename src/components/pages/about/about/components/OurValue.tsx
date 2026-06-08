"use client";
import { Content, Heading2 } from "@/components/common/typography";
import React, { useId, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import { useScrollBarFill } from "@/hooks/gsap/useScrollBarFill";
import { cn } from "@/utils/helpers/cn";
import ContentContainer from "@/components/layout/container/contentContainer";
import { StaticImageData } from "next/image";
import SliderControllButton from "@/components/common/button/SliderControllButton";
import ThemedIconCard from "@/components/common/cards/ThemedIconCard";
import MobileSwiperTabs from "@/components/common/slider/mobileSwiper/MobileSwiperTabs";

type Props = { data: IPageSectionData; missionData: any };

export const OurValue = ({ data, missionData }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CustomTopLeftSplitedBanner bgImage={data.cover}>
      <div className=" bg-[#ffffffde] dark:bg-[#1C1C1FDE] backdrop-blur-[15.5px] mb-10 lg:mb-[169px] lg:p-8 lg:pl-0 ">
        <Heading2 className="!mb-5 text-center md:text-start">
          <SafeHtml content={data.headline} />
        </Heading2>
        <Content className="text-center md:text-start">
          <SafeHtml content={data.excerpt} />{" "}
        </Content>
        <div className="py-8 hidden lg:block">
          <div className="grid grid-cols-3 gap-10">
            {data.items &&
              data.items.length &&
              data.items.map((item: any, i: number) => (
                <OurValueCard data={item} key={i} />
              ))}
          </div>
        </div>

        <MobileSwiperTabs data={data} />

        {/* only for mobile screen need to make reusable ... same as culturalHighlights */}
        {/* <div className="lg:hidden block">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper my-10"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {data?.items?.map((item, index) => {
              // Choose correct image based on theme + active state
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
                <SwiperSlide key={index}>
                  <div
                    className={`
                px-7 py-4 rounded-xl text-[14px] font-medium
                cursor-pointer transition-all duration-300 ease-in-out select-none
                flex items-center gap-2 max-w-[250px] mx-auto
                ${
                  isActive
                    ? "bg-[#4D4D4F]  lg:dark:bg-white text-[#ffffff] lg:dark:text-[#414042]"
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
        </div> */}
      </div>
      <OurValueSlider data={missionData} />
    </CustomTopLeftSplitedBanner>
  );
};

type BannerProps = {
  bgImage: StaticImageData;
  children?: React.ReactNode;
  containerClassName?: string;
};

const CustomTopLeftSplitedBanner = ({
  bgImage,
  children,
  containerClassName = "",
}: BannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useScrollBarFill(containerRef, barRef);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative lg:min-h-[42.656vw] flex flex-col  dark:bg-[#0D0D0D] bg-[#E6E7E8] overflow-hidden",
        containerClassName,
      )}
    >
      <ImageComponent
        src={bgImage}
        width={1920}
        height={818}
        quality={100}
        alt="banner-image"
        className="absolute right-0 top-0 object-cover h-full w-full object-bottom z-0"
      />
      <div className="flex md:flex-row flex-col h-full flex-grow z-10 ">
        <div className="w-full relative">
          <div className="absolute md:left-4 left-0  bottom-0  h-full w-full  custom-topLeft-overlay-banner  ">
            <div
              ref={barRef}
              className="w-full h-0 bg-banner_bar absolute bottom-0"
            />
          </div>

          <div className="custom-topLeft-overlay-banner absolute -top-[1px] left-0 w-full h-full  overflow-hidden bg-[#FFFFFF]  dark:bg-[#1C1C1F]" />

          <ContentContainer className="relative z-10 flex flex-col pt-16 2xl:pb-16 lg:pb-40 md:pb-36 ">
            {children}
          </ContentContainer>
        </div>
      </div>
    </div>
  );
};

function OurValueCard({ data, className = "" }: any) {
  return <ThemedIconCard data={data} className={className} />;
}

const OurValueSlider = ({ data }: any) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [boundaryStatus, setBoundaryStatus] = useState<
    "start" | "end" | null | undefined
  >("start");

  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const prevButtonClass = `swiper-button-prev-${safeId}`;
  const nextButtonClass = `swiper-button-next-${safeId}`;

  const handleTitleClick = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full pb-[23px] px-[42px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Side - Static Navigation Menu */}
        <div className="flex flex-row lg:flex-col lg:gap-5 w-full justify-center">
          {data.items &&
            data.items
              .slice() // avoid mutating original array
              .sort((a: any, b: any) => a.order_index - b.order_index)
              .map((item: any, index: number) => (
                <div key={index} className="group min-h-12 flex items-center">
                  <button
                    onClick={() => handleTitleClick(index)}
                    className="flex items-center md:items-start w-full text-left p-2 rounded-lg transition-all duration-500 font-poppins"
                  >
                    <span
                      className={`md:text-[32px] flex justify-center font-semibold capitalize transition-all duration-500 transform ${
                        activeIndex === index
                          ? "text-[#f4f4f4] scale-105 opacity-100"
                          : "text-[#3b3b3d] scale-95 "
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </div>
              ))}
        </div>

        {/* Right Side - Sliding Description Content */}
        <div className="flex-1 flex flex-col items-center gap-8">
          {/* Swiper for Description Content */}
          <div className="w-full max-w-[320px] md:max-w-2xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) => {
                setBoundaryStatus(
                  swiper.isBeginning ? "start" : swiper.isEnd ? "end" : null,
                );
                setActiveIndex?.(swiper.realIndex); // safe optional call
              }}
              navigation={{
                prevEl: `.${prevButtonClass}`,
                nextEl: `.${nextButtonClass}`,
                // @ts-ignore
                clickable: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
              className="description-swiper"
            >
              {data.items &&
                data.items.map((section: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="text-center p-2 lg:p-8  lg:min-h-[300px] flex items-center justify-center">
                      <p className="text-white text-[14px] md:text-lg leading-relaxed">
                        {section.excerpt}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          {/* Custom Navigation Buttons */}
          {data?.items?.length > 0 && (
            <div className="hidden lg:flex justify-center gap-4 ">
              <SliderControllButton
                arrowHasWhiteBorder
                className={`${prevButtonClass} `}
              >
                <LeftArrowIcon disabled={boundaryStatus === "start"} />
              </SliderControllButton>
              <SliderControllButton
                arrowHasWhiteBorder
                className={`${nextButtonClass}`}
              >
                <RightArrowIcon disabled={boundaryStatus === "end"} />
              </SliderControllButton>
            </div>
          )}
        </div>

        <div className="aspect-[140/146] lg:aspect-[500/500] max-w-[200px] lg:max-w-[400px] w-full relative">
          <ImageComponent
            src={data.cover}
            alt="..."
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};
