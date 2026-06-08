"use client";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import React, { useEffect, useRef, useState } from "react";
import SliderControllButton from "../button/SliderControllButton";

interface HoverExpandSliderProps<T> {
  items: T[];
  controlClassName?: string;
  children: (index: number, isActive: boolean) => React.ReactNode;
  cardWidth?: number;
}

export default function HoverExpandSlider<T>({
  items,
  controlClassName = "",
  children,
}: HoverExpandSliderProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 192;
  const expandedWidth = useResponsiveExpandedWidth(cardWidth);
  const gap = 16;

  const visibleCards = 4;
  const maxIndex = Math.max(0, items.length - visibleCards);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const scrollX = index * (cardWidth + gap);
      containerRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(items.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const getCardWidth = (index: number) => {
    return activeIndex === index ? expandedWidth : cardWidth;
  };

  // Drag-to-scroll setup
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateIndexOnScroll = () => {
    if (!containerRef.current) return;
    const scrollX = containerRef.current.scrollLeft;
    const totalCardWidth = cardWidth + gap;
    const newIndex = Math.round(scrollX / totalCardWidth);
    setActiveIndex(newIndex); // always sync on scroll
  };

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    containerRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove("cursor-grabbing");
    updateIndexOnScroll();
  };

  // const handleMouseLeave = () => {
  //   isDragging.current = false;
  //   containerRef.current?.classList.remove("cursor-grabbing");
  //   updateIndexOnScroll();
  // };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    updateIndexOnScroll();
  };

  return (
    <div className="relative w-full">
      {/* Controls */}
      <div className="absolute -top-20 3xl:right-[18.35vw] 2xl:right-[15vw] xl:right-[8vw] lg:right-[3vw] right-3 flex gap-4 z-10 pl-[1rem] md:pl-0 w-full md:w-32 md:text-end">
        <SliderControllButton
          onClick={handlePrev}
          disabled={activeIndex === 0}
          type="button"
          aria-label="slider left"
          className={`swiper_button_casestudy_prev 
                      lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border 
                      flex justify-center items-center
                      ${
                        activeIndex === 0
                          ? "border-[#414042] opacity-70"
                          : "border-[#FF4306]"
                      }`}
        >
          <LeftArrowIcon disabled={activeIndex === 0} />
        </SliderControllButton>

        <SliderControllButton
          onClick={handleNext}
          disabled={activeIndex >= items.length - 1}
          type="button"
          aria-label="slider right"
          className={`swiper_button_casestudy_next 
                      lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border 
                      flex justify-center items-center
                      ${
                        activeIndex >= items.length - 1
                          ? "border-[#414042] opacity-70"
                          : "border-[#FF4306]"
                      }`}
        >
          <RightArrowIcon disabled={activeIndex >= items.length - 1} />
        </SliderControllButton>
      </div>

      {/* Card Display */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden cursor-grab select-none h-[184px] md:h-[300px]"
      >
        <div className="flex transition-all duration-700 ease-out">
          {items.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-all duration-700 ease-out h-[184px] md:h-[300px]"
              style={{
                width: `${getCardWidth(index)}px`,
                marginRight: index < items.length - 1 ? `${gap}px` : "0",
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                setActiveIndex(index);
                scrollToIndex(index);
              }}
            >
              {children(index, activeIndex === index)}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              scrollToIndex(index);
            }}
            className={` rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#FF4306] scale-110 w-[12px]"
                : "bg-[#D9D9D9] size-[8px]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function useResponsiveExpandedWidth(baseWidth: number) {
  const [expanded, setExpanded] = useState(baseWidth * 2.75);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setExpanded(baseWidth * (isMobile ? 1.75 : 2.75));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseWidth]);

  return expanded;
}
