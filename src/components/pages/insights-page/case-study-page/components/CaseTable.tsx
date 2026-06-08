"use client";
import { RightArrowIcon } from "@/assets/icons";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import DropdownComponent from "@/components/common/dropdown";
import ImageComponent from "@/components/common/image";
import NavLink from "@/components/common/link/NavLink";
import ContentContainer from "@/components/layout/container/contentContainer";
import api from "@/config/api/apiList";
import routes from "@/config/routes";
import { usePaginatedFilterData } from "@/hooks/usePaginatedFilteredData";
import { cn } from "@/utils/helpers/cn";
import { useState } from "react";

type Props = {
  data: any;
  filterParam: any;
};

export default function CaseTable({ data, filterParam }: Props) {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const extractData = (response: any) => {
    const items = response?.data?.data?.data?.case_studies?.items;
    return {
      items: Array.isArray(items?.data) ? items?.data : [],
      nextPageUrl: items?.next_page_url ?? null,
    };
  };
  // const customApiBuilder = (industry: string) => {
  //   // return "";
  //   return api.page.case_studyByFilter(industry, selectedService);
  // };

  const paramsBuilder = (key: "industry" | "service", value: string) => {
    if (key === "industry") {
      setSelectedIndustry(value);

      filterItemClickHandler({
        item: { slug: `industry=${value}&service=${selectedService}` },
      });
    } else {
      setSelectedService(value);
      filterItemClickHandler({
        item: { slug: `industry=${selectedIndustry}&service=${value}` },
      });
    }
  };

  const {
    dataItems,
    loadMoreUrl,
    selectedFilterItem,
    filterItemClickHandler,
    getNextPageData,
    getDataByFilter,
  } = usePaginatedFilterData(
    api.page.case_studyByFilterParamsString,
    extractData,
    data?.items?.data ?? [],
    data?.items?.next_page_url ?? null,
  );

  return (
    <div className="">
      <ContentContainer>
        <div className="py-5 flex flex-col md:flex-row items-center justify-end gap-5 w-full">
          {/* <TabBar
            data={filterParam.industries}
            displayKey="title"
            onItemClick={({ item }: any) => setSelectedIndustries(item)}
            value={selectedIndustries}
            onlyDropdownOnMobile={true}
            placeholder="Industries"
            themeReverse={true}
          />
          <TabBar
            data={filterParam.services}
            displayKey="title"
            onItemClick={({ item }: any) => setSelectedServices(item)}
            value={selectedServices}
            onlyDropdownOnMobile={true}
            placeholder="Services"
          /> */}
          <DropdownComponent
            data={filterParam.industries ?? []}
            displayKey="slug"
            onItemClick={({ value }) => paramsBuilder("industry", value)}
            containerClassName="border-2 max-w-[300px] min-w-[300px] w-full"
            placeholder="Select Industries"
            themeReverse={true}
          />
          <DropdownComponent
            data={filterParam.services ?? []}
            displayKey="slug"
            onItemClick={({ value }) => paramsBuilder("service", value)}
            containerClassName="border-2 max-w-[300px] min-w-[300px]  w-full"
            placeholder="Select Services"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 -z-[2]">
          {dataItems.map((item: any, index: number) => {
            const isLargeCard = (index - 4) % 5 === 0 && index >= 4;

            const col = index % 3;
            const row = Math.floor(index / 3);

            let borderClass = "border-[#E5E5E5] dark:border-[#3F3F3F] ";

            if (row === 0 && col === 0) {
              borderClass += "border-t border-r border-b  ";
            } else {
              borderClass += " md:border-t border-r  border-b border-l ";
            }

            // if (row === 1) {
            //   borderClass += " md:border-l border-t-0";
            // }

            if (col === 0) borderClass += " border-l";
            if (col < 2) borderClass += " border-r ";

            if (row < Math.ceil(dataItems.length / 3))
              borderClass += " border-b";

            return isLargeCard ? (
              <NavLink
                key={index}
                href={routes.caseStudyDetails(item.slug)}
                className="relative col-span-1 md:col-span-2 aspect-[6/3.5]  md:p-[64px] p-3 group "
              >
                <ImageComponent
                  src={item.thumb ?? item.cover}
                  alt="Case Image"
                  className="object-cover w-full h-full absolute top-0 left-0 -z-[1]"
                />
                <p className="text-[#FFFFFF] dark:text-[#F4F4F4] md:text-[20px] text-[18px] font-[500] md:font-semibold leading-[1.6] max-w-[300px] transition-colors duration-300 ease-in-out group-hover:text-[#FF4306]">
                  {item.title}
                </p>
              </NavLink>
            ) : (
              <NavLink
                key={index}
                href={routes.caseStudyDetails(item.slug)}
                className={cn(
                  `relative aspect-[3/1.5]  md:aspect-[3/3.5]  lg:p-[64px] p-3 group`,
                  borderClass,
                )}
              >
                <ImageComponent
                  src={item.thumb ?? item.cover}
                  alt="Case Image"
                  className="object-cover w-full h-full absolute top-0 left-0 -z-[1] hidden"
                />
                <p className="text-[#414042] dark:text-[#F4F4F4] md:text-[20px] text-[18px]  max-w-[300px] font-[500] md:font-semibold sm:text-[20px] leading-[150%] tracking-[0] capitalize transition-colors duration-300 ease-in-out group-hover:text-[#FF4306]">
                  {item.title}
                </p>
              </NavLink>
            );
          })}
        </div>

        {loadMoreUrl && (
          <div className="flex justify-center mt-10">
            <PrimaryButton
              variant="outlined"
              onClick={getNextPageData}
              className="px-[30px] py-[14px]"
            >
              Load More
            </PrimaryButton>
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

// const caseItems = [
//   { id: 1, hasImage: false },
//   { id: 2, hasImage: false },
//   { id: 3, hasImage: false },
//   { id: 4, hasImage: false },
//   {
//     id: 5,
//     hasImage: true,
//     image:
//       "https://res.cloudinary.com/dxqeroc92/image/upload/v1751444645/image_8_zblsp0.png",
//   },
//   { id: 6, hasImage: false },
//   { id: 7, hasImage: false },
//   { id: 8, hasImage: false },
//   { id: 9, hasImage: false },
//   {
//     id: 10,
//     hasImage: true,
//     image:
//       "https://res.cloudinary.com/dxqeroc92/image/upload/v1751444645/image_8_zblsp0.png",
//   },
// ];
