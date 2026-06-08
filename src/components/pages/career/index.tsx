import JoinTeam from "@/components/sections/JoinTeam";
import React from "react";
import Banner from "./components/Banner";
import WhySmartLab from "./components/WhySmartLab";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import GlobalWay from "./components/GlobalWay";
import JoinUsSection from "./components/JoinUsSection";

type Props = { data: any };

const CareerPage = ({ data }: Props) => {
  return (
    <div>
      <section>
        <Banner data={convertToPageSectionData(data)} />
      </section>
      <section>
        <WhySmartLab data={convertToPageSectionData(data.why_smart_lab)} />
      </section>
      <section>
        <JoinUsSection data={convertToPageSectionData(data.join_us)} />
      </section>
      <section>
        <GlobalWay data={convertToPageSectionData(data.global_way)} />
      </section>
      <JoinTeam />
    </div>
  );
};

export default CareerPage;
