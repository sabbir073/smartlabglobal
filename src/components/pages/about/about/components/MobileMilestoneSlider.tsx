"use client";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";
import React, { useEffect, useRef, useState } from "react";

type Props = { data: any };

const MobileMilestoneSlider = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRefs = useRef<HTMLButtonElement[]>([]);

  const sortedItems = [...data.items].sort(
    (a, b) => a.order_index - b.order_index
  );

  const handlePrevious = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, sortedItems.length - 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate visible items (show 3 items)
  const getVisibleItems = () => {
    const visibleItems = [];
    const totalItems = sortedItems.length;

    if (totalItems <= 3) {
      return sortedItems.map((item, index) => ({
        ...item,
        originalIndex: index,
      }));
    }

    // For first item, show items 0, 1, 2
    if (activeIndex === 0) {
      for (let i = 0; i < 3; i++) {
        visibleItems.push({ ...sortedItems[i], originalIndex: i });
      }
    }
    // For last item, show last 3 items
    else if (activeIndex === totalItems - 1) {
      for (let i = totalItems - 3; i < totalItems; i++) {
        visibleItems.push({ ...sortedItems[i], originalIndex: i });
      }
    }
    // For middle items, show previous, current, next
    else {
      for (let i = activeIndex - 1; i <= activeIndex + 1; i++) {
        visibleItems.push({ ...sortedItems[i], originalIndex: i });
      }
    }

    return visibleItems;
  };

  const visibleItems = getVisibleItems();

  useEffect(() => {
    const activeDot = dotRefs.current[activeIndex];
    if (activeDot) {
      activeDot.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Timeline Slider */}
      <div className="flex flex-col items-center">
        {/* Timeline with Years and Dots in same line */}
        <div className="relative w-full max-w-md mx-auto pb-2 z-[10]">
          <div className="flex items-center justify-between px-4 ">
            {visibleItems.map((item, index) => {
              const isActive = item.originalIndex === activeIndex;
              const isPrevious = item.originalIndex < activeIndex;
              const isFirst = index === 0;
              const isLast = index === visibleItems.length - 1;

              // Alignment control
              let alignment = "items-center";
              if (isFirst) alignment = "items-start";
              else if (isLast) alignment = "items-end";
              // Title color condition
              const titleColor =
                isActive || isPrevious
                  ? "text-[#FF4306] scale-110"
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300";

              // Determine dot color
              const dotColor =
                isActive || isPrevious
                  ? "bg-[#FF4306] border-[#FF4306] scale-125"
                  : "bg-[#414042] dark:bg-[#F4F4F4] border-none hover:border-[#FF4306]";
              return (
                <div key={item.slug} className={`flex flex-col ${alignment}`}>
                  {/* Year Label */}
                  <div
                    className={`text-2xl font-[600] cursor-pointer transition-all duration-300 mb-4 ${titleColor}`}
                    onClick={() => handleDotClick(item.originalIndex)}
                  >
                    {item.title}
                  </div>

                  {/* Timeline Dot */}
                  <div className=" flex items-center justify-center">
                    <button
                      ref={(el: any) =>
                        (dotRefs.current[item.originalIndex] = el!)
                      }
                      className={`size-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${dotColor}`}
                      onClick={() => handleDotClick(item.originalIndex)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline Line */}
          <div className="absolute top-[53px] md:top-[53px]  left-4 right-5 h-[2px]  bg-[#414042] dark:bg-[#F4F4F4] rounded-full -z-[9]">
            {/* Active line segment */}
            <div
              className="absolute top-0 left-0 h-full bg-[#FF4306] rounded-full transition-all duration-500 ease-in-out"
              style={{
                width:
                  visibleItems.length > 1
                    ? `${(visibleItems.findIndex(
                      (item) => item.originalIndex === activeIndex
                    ) /
                      (visibleItems.length - 1)) *
                    (100 + 4)
                    }%`
                    : "0%",
              }}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 mt-8">

          <button
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            className=" disabled:opacity-70 disabled:border-[#414042]  lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border border-[#FF4306] flex  justify-center items-center "
          >
            <LeftArrowIcon disabled={activeIndex === 0} />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === sortedItems.length - 1}
            className=" disabled:opacity-70 disabled:border-[#414042]  lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border border-[#FF4306] flex  justify-center items-center "
          >
            <RightArrowIcon disabled={activeIndex === sortedItems.length - 1} />
          </button>
        </div>
      </div>

      {/* Milestone Card */}
      <div className="max-w-2xl mx-auto pt-5">
        <div className="bg-white dark:bg-[#1C1C1F] p-4 md:p-12 transition-all duration-500 transform">
          <div className="text-center md:text-start">
            <div className="flex flex-col md:flex-row md:gap-4 justify-center md:justify-start items-center md:items-start mb-6">
              <div className="text-[24px] font-[600] text-[#FF4306] mb-4 md:mb-0">
                {sortedItems[activeIndex].title}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-[600] text-[#414042] dark:text-[#F4F4F4]">
                  {sortedItems[activeIndex].subtitle}
                </h3>
              </div>
            </div>
            <p className="text-[#4D4D4F] dark:text-[#D9D9D9] leading-relaxed text-[14px] font-[400]">
              {/* <SafeHtml content={sortedItems[activeIndex].excerpt} /> */}
              {sortedItems[activeIndex].excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      {/* <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          {sortedItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#FF4306] w-8"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default MobileMilestoneSlider;
