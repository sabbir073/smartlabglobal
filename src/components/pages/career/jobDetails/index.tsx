"use client";
import React from "react";
import Capability1 from "@/assets/images/dummy/career/jobDetail.png";
import LayeredBanner from "@/components/sections/banner/LayeredBanner";
import ContentContainer from "@/components/layout/container/contentContainer";
import { Content, Heading1, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import JoinTeam from "@/components/sections/JoinTeam";

type Props = {
  data: any;
  slug: string;
};

const JobDetailsPageComponent = ({ data, slug }: Props) => {
  return (
    <div>
      <LayeredBanner
        bgImage={Capability1}
        containerClassName="min-h-[22.656vw]"
        bgImageClassName=" !object-contain md:max-w-[40%] "
      >
        <ContentContainer className="md:py-32 pt-8 pb-32 lg:max-w-[55vw] md:max-w-[51vw]  md:text-center">
          <Heading1>
            <SafeHtml content="Job Details" />
          </Heading1>
          {/* <Content>
            <SafeHtml content={`At Smart Lab Global, we deliver more than technology—we drive transformation. With future-ready solutions and a global mindset, we help businesses scale smarter and lead with confidence.`} />
          </Content> */}
        </ContentContainer>
      </LayeredBanner>
      <ContentContainer className="section-py">
        {/* <SafeHtml content={JSON.stringify(data.excerpt)} /> */}
        <SafeHtml content={data.excerpt} />
      </ContentContainer>

      {/* <ContentContainer className="section-pt">
        <Heading2>
          <SafeHtml content={"Overview"} />
        </Heading2>
        <Content className="mt-8 text-[14px] ">
          <SafeHtml
            content={
              "Smart-Lab Global, a leading software outsourcing company, is seeking a talented Senior Software Engineer L1 to join our dynamic Java team. The ideal candidate will possess advanced knowledge of Java programming, extensive experience with Java frameworks and libraries, and a solid understanding of web technologies. You will work closely with our clients to understand their needs and translate those needs into effective software solutions. Additionally, you will mentor and guide junior developers on the team, ensuring that all code is of the highest quality."
            }
          />
        </Content>
      </ContentContainer>

      <ContentContainer className="section-pt">
        <Heading2 className="">
          <SafeHtml content={"Responsibilities:"} />
        </Heading2>

        <div className="content-text">
          <ul className="space-y-3 items-center justify-center">
            {[
              "Career growth with global exposure",
              "Cutting-edge technologies & AI-driven work",
              "Inclusive and collaborative work culture",
              "Flexible, hybrid work options",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 ">
                <ImageComponent
                  src={ListIcon}
                  alt="List Icon"
                  className="w-[10px]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>

      <ContentContainer className="section-pt">
        <Heading2 className="">
          <SafeHtml content={"Requirements:"} />
        </Heading2>

        <div className="content-text">
          <ul className="space-y-3 items-center justify-center">
            {[
              "Career growth with global exposure",
              "Cutting-edge technologies & AI-driven work",
              "Inclusive and collaborative work culture",
              "Flexible, hybrid work options",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 ">
                <ImageComponent
                  src={ListIcon}
                  alt="List Icon"
                  className="w-[10px]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>

      <ContentContainer className="section-pt">
        <Heading2 className="">
          <SafeHtml content={"What we offer:"} />
        </Heading2>

        <div className="content-text">
          <ul className="space-y-3 items-center justify-center">
            {[
              "Career growth with global exposure",
              "Cutting-edge technologies & AI-driven work",
              "Inclusive and collaborative work culture",
              "Flexible, hybrid work options",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 ">
                <ImageComponent
                  src={ListIcon}
                  alt="List Icon"
                  className="w-[10px]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer> */}

      <ContentContainer className="">
        <Heading2 className="">
          <SafeHtml content={"Job Information:"} />
        </Heading2>

        <div className="content-text">
          <Content className="mb-8">
            <span className="mr-8">Location :</span>
            <span>{data?.location}</span>
          </Content>
          <Content className="mb-8">
            <span className="mr-8">Deadline :</span>
            <span>{data?.deadline}</span>
          </Content>
          <Content className="mb-8">
            <span className="mr-8">Position :</span>
            <span>{data?.title}</span>
          </Content>
          <Content className="mb-8">
            <span className="mr-8">Salary :</span>
            <span>{data?.salary}</span>
          </Content>
        </div>
      </ContentContainer>
      <JoinTeam />
    </div>
  );
};

export default JobDetailsPageComponent;
