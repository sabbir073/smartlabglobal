import PrimaryButton from "@/components/common/button/PrimaryButton";
import ImageComponent from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import GlobalImage from "@/assets/images/dummy/about/global-demo.png";

import React from "react";
import SafeHtml from "@/components/common/safeHtml";
import routes from "@/config/routes";
import { Heading2 } from "@/components/common/typography";
import NavLink from "@/components/common/link/NavLink";
import { PlusIcon } from "@/assets/icons";
import { useDarkMode } from "@/hooks/useDarkMode";

type Props = { data: IPageSectionData; videoUrl?: string };

const WeAreGlobal = ({ data, videoUrl }: Props) => {
  const { isDarkMode } = useDarkMode();
  const { items } = data;
  return (
    <ContentContainer className="section-pt dark:bg-[#1C1C1F]">
      <Heading2>
        <SafeHtml content={data.headline} />
      </Heading2>

      <div>
        <SafeHtml content={data.excerpt} />
      </div>
      <div className="py-[47px] block md:hidden">
        <NavLink href={routes.ourBrand} className="font-semibold text-[14px]">
          <span className="flex gap-4 text-[#414042] dark:text-[#F4F4F4] items-center">
            SEE OUR BRAND STORY{" "}
            <PlusIcon fill={isDarkMode ? "#F4F4F4" : "#414042"} />
          </span>
        </NavLink>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 lg:mt-12">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          {videoUrl ? (
            <video
              className={"object-cover aspect-[590/422] w-full h-full"}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <ImageComponent
              src={data.cover}
              alt="Global Image"
              className="object-cover aspect-[590/422] w-full h-full"
            />
          )}
        </div>

        {/* Right Stats Grid Section */}
        <div className="w-full flex flex-col justify-between md:w-1/2">
          {/* Optional Button for lg+ */}
          <div className="pb-6 hidden md:block">
            <PrimaryButton href={routes.ourBrand} variant={"outlined"}>
              SEE OUR BRAND STORY
            </PrimaryButton>
          </div>

          {/* Responsive Grid */}
          {/* <SafeHtml content={data.excerpt} /> */}

          <div className="flex  flex-col ">
            <div className="grid grid-cols-2 md:grid-rows-10 gap-2 md:gap-4 auto-rows-fr ">
              <div className="col-span-1 row-span-5 row-start-1 bg-[#E6E7E8] dark:bg-[#414042] p-4 md:p-6 flex flex-col justify-center gap-2">
                <div className="flex">
                  <GridCardHeader item={items?.[0]?.excerpt} />
                  <GridColorText item={items?.[0]?.subtitle} />
                </div>
                <GridCardText item={items?.[0]?.title} />
              </div>

              <div className="col-span-1 row-span-4 row-start-1 bg-[#E6E7E8] dark:bg-[#414042] p-4 md:p-6 flex flex-col justify-center gap-2">
                <div className="flex">
                  <GridCardHeader item={items?.[1]?.excerpt} />
                  <GridColorText item={items?.[1]?.subtitle} />
                </div>
                <GridCardText item={items?.[1]?.title} />
              </div>

              <div className="col-span-1 row-span-5 row-start-6 bg-[#E6E7E8] dark:bg-[#414042] p-4 md:p-6 flex flex-col justify-center gap-2">
                <div className="flex">
                  <GridCardHeader item={items?.[2]?.excerpt} />
                  <GridColorText item={items?.[2]?.subtitle} />
                </div>
                <GridCardText item={items?.[2]?.title} />
              </div>

              <div className="col-span-1 row-span-6 row-start-5 bg-[#E6E7E8] dark:bg-[#414042] p-4 md:p-6 flex flex-col justify-center gap-2">
                <div className="flex">
                  <GridCardHeader item={items?.[3]?.excerpt} />
                  <GridColorText item={items?.[3]?.subtitle} />
                </div>
                <GridCardText item={items?.[3]?.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default WeAreGlobal;

const GridCardHeader = ({
  item,
  className,
}: {
  item: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`text-2xl md:text-5xl font-normal leading-[0.9]  ${
        className || ""
      }`}
    >
      {item}
    </div>
  );
};

const GridCardText = ({
  item,
  className,
}: {
  item: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`text-xs md:text-[16px] dark:text-[#D9D9D9]  ${
        className || ""
      }`}
    >
      {item}
    </div>
  );
};

const GridColorText = ({
  item,
  className,
}: {
  item: string;
  className?: string;
}) => {
  return (
    <p className="relative text-[#FF4306] text-xs md:text-sm font-semibold text-start">
      <span className="absolute top-[-14px]">{item}</span>
    </p>
  );
};
