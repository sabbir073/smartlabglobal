"use client";
import React, { useState } from "react";
import ImageComponent from "../image";
import { cn } from "@/utils/helpers/cn";

type Props = { data: any };

const ActiveImageShow = ({ data }: Props) => {
  const [selectedApproach, setSelectedApproach] = useState<
    IPageSectionData["items"][0]
  >(data.items[0]);

  const [hoveredApproach, setHoveredApproach] = useState<
    IPageSectionData["items"][0] | null
  >(null);

  const hoveredClassName = "top-[-60px] right-[-100px]";
  const activeClassName = "top-[0px] right-[0px]";
  const defaultClassName = "top-[-210px] right-[-260px]";

  return (
    <>
      <div className="rounded-full relative h-[clamp(208px,55.47vw,280px)] w-[clamp(208px,55.47vw,280px)] overflow-hidden">
        {data.items.map((approach: any, index: number) => {
          const isHovered = hoveredApproach?.slug === approach.slug;
          const isActive = selectedApproach?.slug === approach.slug;

          const positionClass = isActive
            ? activeClassName
            : isHovered
              ? hoveredClassName
              : defaultClassName;
          const zClass =
            isActive && !isHovered
              ? "z-10"
              : isActive && isHovered
                ? "z-40"
                : isActive
                  ? "z-10"
                  : !isActive && isHovered
                    ? "z-40"
                    : "z-20";

          return (
            <ImageComponent
              key={approach.slug ?? index}
              src={approach.cover}
              alt={approach.title}
              className={cn(
                "absolute w-full h-full object-cover",
                // animate only position for smoothness
                "transition-all duration-500 ease-in-out [transition-property:top,right] will-change-auto",
                zClass,
                positionClass,
              )}
            />
          );
        })}
      </div>

      <div className="w-full md:max-w-[440px]  h-full flex flex-col justify-center gap-2">
        {data.items.map((approach: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => {
                // 1) make it active
                setSelectedApproach(approach);
                // 2) force starting position = hovered
                setHoveredApproach(approach);
              }}
              onMouseEnter={() => {
                if (selectedApproach.slug !== approach.slug) {
                  setHoveredApproach(approach);
                }
              }}
              onMouseLeave={() => {
                if (selectedApproach.slug !== approach.slug) {
                  setHoveredApproach(null);
                }
              }}
              className={cn(
                "py-3 border-b border-[#FFFFFF66] last:border-none cursor-pointer text-[24px] text-center md:text-start text-[#F4F4F4] leading-[1] min-w-[250px] md:min-w-full mx-auto",
                selectedApproach.slug === approach.slug && "font-semibold",
              )}
            >
              {approach.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ActiveImageShow;
