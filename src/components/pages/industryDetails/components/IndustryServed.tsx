"use client";
import ServiceShowcaseSlider from "@/components/common/slider/ServiceShowcaseSlider";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const IndustryServed = ({ data }: Props) => {
  return (
    <ServiceShowcaseSlider
      headline={data?.headline}
      description={data?.excerpt}
      services={data?.items}
    />
  );
};

export default IndustryServed;
