"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../../../../common/slider/styles.scss";

import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
} from "swiper/modules";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import SliderControllButton from "@/components/common/button/SliderControllButton";
import CarouselComponent from "@/components/common/slider/slider";

type Props = { data: IPageSectionData };

const ActiveCardOnTopSlider = ({ data }: Props) => {
  return (
    <ContentContainer className=" w-full dark:bg-[#1C1C1F] bg-[#FFFFFF] section-pt ">
      <div className="relative md:text-left text-center flex flex-col md:flex-row md:gap-[69px] gap-[40px]">
        <div className="w-full md:max-w-[577px] content-center ">
          <Heading2 className="text-start  !mb-[16px] !lg:mb-[30px]">
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className="text-content text-start">
            <SafeHtml content={data.excerpt} />
          </Content>

          <div className="h-full w-full md:w-1/2 md:hidden pt-10">
            <div className=" relative">
              <CarouselComponent
                controlClassName="-bottom-12 top-auto md:block hidden"
                showPagination
                containerClassName=""
                slidesPerView={1.1}
                breakpoints={{
                  768: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  600: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                }}
              >
                {data?.items.map((service: any, index: number) => (
                  <SliderCard key={index} item={service} />
                ))}
              </CarouselComponent>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:block ">
          <Slider data={data.items} />
        </div>
      </div>
    </ContentContainer>
  );
};

export default ActiveCardOnTopSlider;

const Slider = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const [boundaryStatus, setBoundaryStatus] = useState<
    "start" | "end" | null | undefined
  >("start");

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
    setBoundaryStatus(
      swiper.isBeginning ? "start" : swiper.isEnd ? "end" : null,
    );
  };

  const handleThumbClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
    setActiveIndex(index);
  };

  const getThumbSlides = () => {
    const total = data.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return [
      { ...data[prevIndex], index: prevIndex },
      { ...data[nextIndex], index: nextIndex },
    ];
  };

  return (
    <div className="max-w-5xl mx-auto ">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={handleSlideChange}
        effect={"fade"}
        modules={[Navigation, EffectFade, Pagination]}
        navigation={{
          prevEl: ".swiper_button_casestudy_prev",
          nextEl: ".swiper_button_casestudy_next",
          // @ts-ignore
          clickable: true,
        }}
        className="mySwiper2"

      >
        {data.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <SliderCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper mt-5"
      >
        {data
          .map((item: any, index: number) => ({ ...item, index }))
          .filter((item: any) => item.index !== activeIndex)
          .map((item: any) => (
            <SwiperSlide key={item.index}>
              <div
                onClick={() => handleThumbClick(item.index)}
                className="cursor-pointer relative overflow-hidden"
              >
                <ImageComponent
                  src={item.cover}
                  alt={item.title}
                  className="w-full aspect-[169/83] md:aspect-[268/174] object-cover opacity-80 transition"
                />

                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col p-2 md:p-6 items-start">
                  <h3 className="font-poppins font-semibold tracking-normal text-[14px] md:text-[16px] lg:text-[18px] text-[#F4F4F4] mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}

        {/* {getThumbSlides().map((item) => (
          <SwiperSlide key={item.index}>
            <div
              onClick={() => handleThumbClick(item.index)}
              className="cursor-pointer relative group rounded-md overflow-hidden"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-24 object-cover rounded-md opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-2 flex items-end text-white text-sm font-medium">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>

      <div
        className={"absolute left-0 lg:bottom-[150px] bottom-[100px]   md:translate-x-0 translate-x-1/2 flex gap-4 "}
      >
        <SliderControllButton
          className={`swiper_button_casestudy_prev`}
        >
          <LeftArrowIcon disabled={boundaryStatus === "start"} />
        </SliderControllButton>
        <SliderControllButton
          className={`swiper_button_casestudy_next`}
        >
          <RightArrowIcon disabled={boundaryStatus === "end"} />
        </SliderControllButton>
      </div>
    </div>
  );
};

const SliderCard = ({ item }: any) => {
  return (
    <div className="relative overflow-hidden w-full mx-auto ">
      <div className="aspect-[350/278] md:aspect-[524/501]">
        <ImageComponent
          src={item.cover}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm p-6 flex flex-col text-start z-10">
        <h3 className="font-poppins font-semibold tracking-normal text-[14px] md:text-[16px] lg:text-[18px] text-[#F4F4F4] mb-7 lg:mb-6">
          {item.title}
        </h3>
        <div className="text-[#D9D9D9] max-h-auto md:max-h-none overflow-y-auto">
          <SafeHtml content={item.excerpt} />
        </div>
      </div>
    </div>
  );
};
