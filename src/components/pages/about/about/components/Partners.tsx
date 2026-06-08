"use client";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
import { Content } from "@/components/common/typography";
import { useDarkMode } from "@/hooks/useDarkMode";

type Props = { data: any };

const Partners = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(6);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(data.items.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <ContentContainer className="px-4 section-py bg-[#FFFFFF] dark:bg-[#1C1C1F] ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-start ">
          <SafeHtml content={data.headline} />

          <Content className=" max-w-[600px] w-full pb-10">
            <SafeHtml content={data.excerpt} />
          </Content>
          <PrimaryButton href={routes.brandAllience}> Know More</PrimaryButton>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.items.map((partner: any, index: number) => (
            <div
              key={index}
              className="aspect-square p-6 bg-[#E6E7E8] dark:bg-[#414042]  hover:shadow-md transition-shadow duration-200 flex items-center justify-center relative"
            >
              <div className="relative w-full h-full content-center">
                <ImageComponent
                  src={isDarkMode ? partner.darkLogo : partner.lightLogo}
                  alt={`${partner.name} logo`}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        {/* <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex justify-between"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {data.items
                    .slice(
                      slideIndex * slidesToShow,
                      (slideIndex + 1) * slidesToShow,
                    )
                    .map((partner: any, partnerIndex: number) => (
                      <div
                        key={partnerIndex}
                        className="bg-[#E6E7E8] p-4 shadow-sm flex items-center justify-center w-[30%] min-h-[100px] relative mx-1"
                      >
                        <div className="relative w-full h-12">
                          <Image
                            src={partner.lightLogo}
                            alt={`${partner.name} logo`}
                            className="object-contain"
                            fill
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

     
          <div className="flex justify-center gap-4 items-center mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              type="button"
              aria-label="slider left"
              className="swiper_button_casestudy_prev disabled:opacity-70 disabled:border-[#414042] lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border border-[#FF4306] flex justify-center items-center"
            >
              <LeftArrowIcon />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              type="button"
              aria-label="slider right"
              className="swiper_button_casestudy_next disabled:opacity-70 disabled:border-[#414042] lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border border-[#FF4306] flex justify-center items-center"
            >
              <RightArrowIcon />
            </button>
          </div>
        </div> */}

        {/* Mobile Swiper - Only shown on mobile */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2.5}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
          >
            {data.items.map((partner: any, index: number) => (
              <SwiperSlide key={index}>
                <div className="bg-[#E6E7E8] dark:bg-[#414042] p-4 shadow-sm flex items-center justify-center h-[100px]">
                  <div className="relative w-full h-10">
                    <ImageComponent
                      src={isDarkMode ? partner.darkLogo : partner.lightLogo}
                      alt={`${partner.name} logo`}
                      className="object-contain"
                      fill
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          {/* <div className="flex justify-center gap-4 items-center mt-6">
            <button
              type="button"
              aria-label="Previous"
              className="swiper-button-prev-custom disabled:opacity-70 disabled:border-[#414042] w-10 h-10 rounded-full border border-[#FF4306] flex justify-center items-center"
            >
              <LeftArrowIcon />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="swiper-button-next-custom disabled:opacity-70 disabled:border-[#414042] w-10 h-10 rounded-full border border-[#FF4306] flex justify-center items-center"
            >
              <RightArrowIcon />
            </button>
          </div> */}
        </div>
      </div>
    </ContentContainer>
  );
};

export default Partners;
