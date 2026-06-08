"use client";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import React, { useEffect, useState } from "react";
import GetInTouchForm from "./GetInTouchForm";
import { cn } from "@/utils/helpers/cn";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";

type Props = { heading?: string; description?: string; className?: string };

export default function GetInTouch({
  heading = "GET IN TOUCH WITH US",
  description = "Fill out the form on the right with your basic details and get a personalized solution.",
  className = "",
}: Props) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data: any = await get(api.page.contact_us);
    if (data?.data) {
      setData(data.data);
    }
  };

  return (
    <section className={cn("bg-[#4D4D4F] dark:bg-[#1E1E1E] py-16 lg:py-24", className)}>
      {data?.contact?.countries && (
        <ContentContainer className={cn("flex flex-col md:flex-row gap-5")}>
          <div className={cn("w-full md:w-[50%]")}>
            <Heading2 className={cn("text-start !text-[#FFFFFF] uppercase !leading-[40px]")}>
              {heading}
            </Heading2>
            <Content className={cn("text-[#FFFFFF] dark:text-[#fff] text-[16px]")}>
              {description}
            </Content>
          </div>
          <div className={cn("w-full md:w-[50%]")}>
            <GetInTouchForm
              query={data?.contact?.query}
              countries={data?.contact?.countries}
            />
          </div>
        </ContentContainer>
      )}
    </section>
  );
}
