import PageBanner from "@/components/common/banner/PageBanner";
import React from "react";

type Props = {
  data: IPageSectionData;
};

const AboutBanner = ({ data }: Props) => {
  return (
    <PageBanner data={data} />

  );
};

export default AboutBanner;
