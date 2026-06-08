import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const InsightBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />
  );
};

export default InsightBanner;
