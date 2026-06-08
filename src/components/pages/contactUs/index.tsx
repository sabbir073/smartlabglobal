"use client";
import LayeredBanner from "@/components/sections/banner/LayeredBanner";
import React, { useState } from "react";

import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading1, Heading2 } from "@/components/common/typography";
import TabBar from "@/components/common/tab-bar";
import ContactInfo from "./ContractInfo";
import IframeGoogleMap from "./IFrameGoogleMap";
import JoinTeam from "@/components/sections/JoinTeam";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import SafeHtml from "@/components/common/safeHtml";
import "./styles.scss";
import GetInTouch from "@/components/sections/form/GetInTouch/GetInTouch";
import PageBanner from "@/components/common/banner/PageBanner";
import { cn } from "@/utils/helpers/cn";
import { useDarkMode } from "@/hooks/useDarkMode";

type Props = {
  data: any;
};

const ContactUsPageComponent = ({ data }: Props) => {
  const contactData = convertToPageSectionData(data.data);
  const branchList = data.data.branches;
  // const countryList = Array.from(new Set(
  //   branchList.map((branch: any) => branch.name)
  // )
  // ).map((country) => ({ name: country }));
  const countryList = branchList.map((branch: any) => ({
    name: branch.name,
    slug: branch.slug,
    branch: branch.branch,
  }));
  const [selectedBranch, setSelectedBranch] = useState(countryList[0]);

  const { isDarkMode } = useDarkMode();
  return (
    <div>
      <section>
        <PageBanner data={contactData} />
        {/* <LayeredBanner
          bgImage={contactData.cover}
          containerClassName='min-h-[26.04vw]'
          videoUrl={contactData.video}
        >
          <ContentContainer className='md:py-32 pt-8 pb-[150px] lg:max-w-[55vw] md:max-w-[51vw]'
          >
            <Heading1><SafeHtml content={contactData.headline} /></Heading1>
            <Content> <SafeHtml content={contactData.excerpt} /> </Content>
          </ContentContainer>
        </LayeredBanner> */}
      </section>

      <section>
        <ContentContainer className="md:py-[107px] py-[30px]">
          <Heading2>
            <span>Smart-Lab Global</span>
            <br />
            <span className="red-text"> Branches</span>
          </Heading2>

          <TabBar
            data={countryList}
            displayKey="name"
            onItemClick={({ item }) => setSelectedBranch(item)}
            value={selectedBranch}
          />

          <div className="md:mt-24 mt-10 flex md:flex-row flex-col md:gap-16 gap-10 justify-between">
            <aside className="max-w-screen lg:max-w-[225px] w-full">
              <ContactInfo branch={selectedBranch.branch} />
            </aside>
            <div
              className={cn(isDarkMode ? "brightness-[100%] invert-[0.9]" : "")}
            >
              <SafeHtml
                className="map-iframe w-full h-[443px]"
                content={selectedBranch.branch.map}
              />
            </div>
          </div>
        </ContentContainer>
      </section>

      <section>
        <GetInTouch className="bg-[#4D4D4F]" />
      </section>

      <section>
        <JoinTeam />
      </section>
    </div>
  );
};

export default ContactUsPageComponent;
