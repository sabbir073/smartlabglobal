import React from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import { cn } from "@/utils/helpers/cn";

const OverflowSectionWrapper = ({
  children,
  WrapperClassName = "",
  topBgClassName = "",
  bottomBgClassName = "",
}) => {
  return (
    <div className={cn("relative", WrapperClassName)}>
      <div className={cn("absolute inset-0", topBgClassName)}></div>
      <div
        className={cn("absolute inset-x-0 bottom-0 h-[30%]", bottomBgClassName)}
      ></div>

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default OverflowSectionWrapper;
