"use client";
import React, { useEffect, useState } from "react";
import ContentContainer from "@/components/layout/container/contentContainer";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import JoinTeam from "@/components/sections/JoinTeam";
import Faq from "../../../sections/faq";
import { useRouter } from "next/navigation";
import Banner from "./components/Banner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import CurrentOpening from "./components/CurrentOpening";
import InternshipSection from "./components/InternshipSection";
import DiversitySection from "./components/DiversitySection";
import EmployeeBenefits from "./components/EmployeeBenefits";
import GetInTouch from "@/components/sections/form/GetInTouch/GetInTouch";
import routes from "@/config/routes";
import { Heading2 } from "@/components/common/typography";
import NoDataFound from "@/components/common/noData/NoDataFound";

type Props = { data: any };

const CareerGlobalPageComponent = ({ data }: Props) => {

  const [currentJobs, setCurrentJobs] = useState<any[]>([])

  useEffect(() => {
    setCurrentJobs(data.current_job?.items ?? []);
  }, [data])

  const router = useRouter();

  const jobRedirectHandler = (slug: string) => {
    router.push(routes.joinDetails(slug));
  };
  return (
    <div>
      <Banner data={convertToPageSectionData(data)} />
      <WhyWorkWithUs data={convertToPageSectionData(data.highlight)} />

      <CurrentOpening data={convertToPageSectionData(data.current_job)} setCurrentJobs={setCurrentJobs} />

      {currentJobs?.length > 0 ?
        <ContentContainer className="py-6">
          <div className="space-y-6">
            {currentJobs?.map((item: any, index: number) => (
              <JobCard
                key={index}
                title={item.title}
                location={item.location}
                type={item.type}
                onJobClickHandler={() => jobRedirectHandler(item.slug)}
              />
            ))}
          </div>
        </ContentContainer>
        :
        <NoDataFound message="We do not have any open positions. Please check back soon" />
      }
      <InternshipSection data={convertToPageSectionData(data.Internship)} />
      {data.Internship?.intern_job?.length > 0 && <ContentContainer className="py-6">
        <div className="space-y-6">
          {data.Internship?.intern_job?.map((item: any, index: number) => (
            <JobCard
              key={index}
              title={item.title}
              location={item.location}
              type={item.type}
              onJobClickHandler={() => jobRedirectHandler(item.slug)}
            />
          ))}

          {/* <div className="flex justify-center">
            <PrimaryButton
              variant="outlined"
              className="border hover:bg-[#414042] dark:bg-[#D9D9D9] hover:text-[#F4F4F4] text-[#414042] dark:text-[#414042]"
            >
              Load More
            </PrimaryButton>
          </div> */}
        </div>
      </ContentContainer>}

      <DiversitySection data={convertToPageSectionData(data.diversity)} />
      <EmployeeBenefits data={convertToPageSectionData(data.benefits)} />

      <Faq data={data.faq} />
      <div>
        <GetInTouch />
      </div>
      <JoinTeam />
    </div>
  );
};

export default CareerGlobalPageComponent;

export const JobCard = ({
  title,
  location,
  type,
  key,
  onJobClickHandler = () => { },
}: {
  title: string;
  location: string;
  type: string;
  key?: any;
  onJobClickHandler?: () => void;
}) => {
  return (
    <div
      key={key}
      className="bg-[#F6F6F6] dark:bg-[#4D4D4F] rounded-[24px] px-[10px] py-[20px] md:p-8 flex flex-col md:flex-row md:items-center justify-between w-full max-w-full"
    >
      <div className="flex flex-col w-full md:flex-row md:items-center items-center relative">
        <div className="flex flex-col gap-3 mt-6 md:mt-0">
          <Info label="Department" value={title} />
          <Info label="Location" value={location} />
          <Info label="Work Type" value={type} />
        </div>
      </div>

      <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mt-6 md:mt-0">
        <PrimaryButton
          variant="outlined"
          className="transition-colors border hover:bg-[#414042] dark:bg-[#4D4D4F] dark:border-[#fff] hover:text-[#F4F4F4] dark:hover:bg-[#F4F4F4] text-[#414042] dark:text-[#F4F4F4] dark:hover:text-[#414042]"
          onClick={onJobClickHandler}
        >
          Apply Now
        </PrimaryButton>
      </div>
    </div>
  );
};

export const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center">
      <span className="font-semibold md:text-[18px] text-[14px] text-black md:w-[121px] w-[100px] font-poppins block dark:text-[#FFFFFF]">
        {label} :
      </span>
      <span className="ml-1 md:ml-2 text-[14px] text-black font-normal font-poppins dark:text-[#FFFFFF]">
        {value}
      </span>
    </div>
  );
};
