import React from "react";
import ServiceShowcaseSlider from "@/components/common/slider/ServiceShowcaseSlider";

type Props = {
  data: IPageSectionData;
};

const Industries = ({ data }: Props) => {
  return (
    <div>
      <ServiceShowcaseSlider
        headline={data?.headline}
        description={data?.excerpt}
        services={data?.items}
      />
    </div>
  );
};

export default Industries;
