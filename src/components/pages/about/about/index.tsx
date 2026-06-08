"use client";
import React, { useRef } from "react";
import { OurValue } from "./components/OurValue";
import Milestone from "./components/Milestone";
import Sustainability from "./components/Sustainability";
import Partners from "./components/Partners";
import Customer from "./components/Customer";
import ReportAProblem from "./components/ReportAProblem";
import JoinTeam from "@/components/sections/JoinTeam";

import WeAreGlobal from "./components/WeAreGlobal";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import ExploreMoreSection from "./components/ExploreMoreSection";
import AboutBanner from "./components/Banner";

type Props = {
  data: any;
};

const AboutUsPageComponent = ({ data }: Props) => {
  const aboutData = convertToPageSectionData(data);
  const parentRef: any = useRef();
  const videoUrl = data.global?.video ? data.global.video : data.video;

  return (
    <div>
      <section className="">
        <AboutBanner data={aboutData} />
      </section>

      <section className="">
        <WeAreGlobal
          data={convertToPageSectionData(data.global)}
          videoUrl={videoUrl}
        />
      </section>

      <section>
        <OurValue
          data={convertToPageSectionData(data.value)}
          missionData={convertToPageSectionData(data.mission_vision)}
        />
      </section>

      <div ref={parentRef}>
        <section className="">
          <Milestone
            parentRef={parentRef}
            data={convertToPageSectionData(data.milestones)}
          />
        </section>

        <section>
          <Sustainability
            data={convertToPageSectionData(data.sustainability)}
          />
        </section>
      </div>

      <section className="">
        <Partners data={convertToPageSectionData(data.partners)} />
      </section>

      <section>
        <Customer data={convertToPageSectionData(data.customers)} />
      </section>

      <ExploreMoreSection data={convertToPageSectionData(data.explore)} />

      <section>
        <ReportAProblem data={convertToPageSectionData(data.report)} />
      </section>

      <section>
        <JoinTeam />
      </section>
    </div>
  );
};

export default AboutUsPageComponent;
