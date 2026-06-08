import { StaticImageData } from "next/image";
import React from "react";
import ImageComponent from "../image";
import { cn } from "@/utils/helpers/cn";
import Link from "next/link";
import SafeHtml from "../safeHtml";

type Props = {
  className?: string;
  slug?: string;
  banner: StaticImageData;
  title: string;
  content?: string;
  hovered?: boolean;
  contentClassName?: string;
  titleClassName?: string;
};

const HoverRevealCard = ({
  banner,
  title,
  content,
  className,
  slug,
  hovered,
  contentClassName,
  titleClassName,
}: Props) => {
  const ContentCard = ({
    containerClassName,
  }: {
    containerClassName?: string;
  }) => (
    <div
      className={cn(
        `text-white w-full cursor-pointer h-full flex flex-col justify-between lg:px-4 px-4 py-4 md:pt-10 md:pb-4  relative group overflow-hidden  gap-[43px] `,
        containerClassName,
      )}
    >
      {/* <ImageComponent
        src={banner}
        alt={`service-${title}`}
        className={`object-cover transition-all duration-700 ease-in-out transform grayscale blur-0 group-hover:grayscale-0 group-hover:blur-sm h-full w-full absolute top-0 left-0 z-[-1] `}
      /> */}

      <ImageComponent
        src={banner}
        alt={`service-${title}`}
        className={`object-cover transition-all duration-700 ease-in-out transform h-full w-full absolute top-0 left-0 z-[-1] grayscale-0 blur-sm lg:grayscale lg:blur-0 lg:group-hover:grayscale-0 lg:group-hover:blur-sm`}
      />
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out transform blur-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        style={{
          background: "linear-gradient(to top, transparent 0%, #000000a1 100%)",
        }}
      ></div>

      <SafeHtml
        content={title}
        className={cn(" md:text-[18px] text-[18px] transition-all duration-300 ease-in-out z-10 relative text-[#F4F4F4] font-medium  ", titleClassName)}
      />

      <SafeHtml
        content={content}
        className={
          "2xl:text-[15px] text-[14px] text-[#E6E7E8] leading-[1.66] transition-all duration-[500ms] ease-in-out overflow-hidden z-10 transform   lg:group-hover:opacity-100 opacity-100 lg:opacity-0"
        }
      />
    </div>
  );

  return slug ? (
    <Link
      href={slug}
      className={cn(
        `text-white w-full cursor-pointer h-full flex flex-col lg:px-4 px-4 py-10  relative group overflow-hidden `,
        className,
      )}
    >
      <ContentCard containerClassName={contentClassName} />
    </Link>
  ) : (
    <ContentCard containerClassName={contentClassName} />
  );
};

export default HoverRevealCard;
