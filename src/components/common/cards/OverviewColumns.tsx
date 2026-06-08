import React from "react";
import { Content } from "../typography";
import { cn } from "@/utils/helpers/cn";

import Bg from "./assets/bg.png";
import BgMd from "./assets/bg-md.png";
import ImageComponent from "../image";
import { useIsMobile } from "@/hooks/useMobile";

type Props = {
  data: Item[];
  containerClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
};

type Item = {
  title: string;
  subtitle?: string;
  content?: string;
};

const OverviewColumns = ({
  data,
  containerClassName = "",
  cardClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  contentClassName = "",
}: Props) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col md:flex-row bg-[#414042]",
        containerClassName,
      )}
    >
      <img
        src={isMobile ? BgMd?.src : Bg?.src}
        alt="..."
        className="absolute top-0 left-0 w-full h-full  z-[-10]"
      />

      {data?.map((item: any, index: number) => {
        const isNotLast = index !== data.length - 1;
        const cardStyle = `
                  flex flex-col  justify-center  py-12 px-5 font-inter border-[#E6E7E85C] 
                  ${isNotLast ? "md:border-r-2" : ""} 
                  ${isNotLast ? "border-b-2 md:border-b-0" : ""}
                `;
        return (
          <div key={index} className={cn(cardStyle, cardClassName, "relative")}>
            {item?.title && (
              <h3
                className={cn(
                  "text-[18px] lg:text-[22px] text-white font-medium mb-4 capitalize",
                  titleClassName,
                )}
              >
                {item?.title}
              </h3>
            )}
            {item?.subtitle && (
              <h5
                className={cn(
                  "text-[18px] w-max text-nowrap font-medium mb-5",
                  subtitleClassName,
                )}
              >
                {item?.subtitle}
              </h5>
            )}
            {item?.content && (
              <Content
                className={cn(
                  "text-[#F4F4F4] lg:!max-w-full mb-0 text-sm  leading-[1.7]",
                  contentClassName,
                )}
              >
                {item?.content}
              </Content>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OverviewColumns;
