"use client";
import DropdownComponent from "@/components/common/dropdown";
import React, { useEffect, useState } from "react";
import AwardCard from "./AwardCard";
import ContentContainer from "@/components/layout/container/contentContainer";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";

type Props = { data: IPageSectionData };
type Category = {
  name: string;
};

const Awards = ({ data }: Props) => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const filteredAwards = selectedCategory
    ? data?.items?.filter(
      (award: ISectionItem) => award.category === selectedCategory.name,
    )
    : data.items;
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const categories: any = new Set(
      data?.items?.map((award: any) => award.category),
    );
    setCategoryList(
      [...categories].map((category: any) => ({ name: category })),
    );
  }, []);

  return (
    <ContentContainer className="dark:bg-[#1c1c1f] bg-[#ffffff] section-pb">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <Heading2 className="text-center md:text-start">
            <SafeHtml content={data.headline} />
          </Heading2>

          <DropdownComponent
            data={categoryList}
            displayKey="name"
            value={selectedCategory}
            onItemClick={({ item }) => setSelectedCategory(item)}
            placeholder="Select a category"
            containerClassName="md:w-[400px] w-full  max-w-[550px] min-w-[200px]"
            buttonClassName="border border-[#414042] focus:border-[#414042] "
            selectedItemClassName="dark:text-white capitalize pr-5"
            iconColor={isDarkMode ? "#F4F4F4" : "#414042"}
          />
        </div>

        <div className="flex flex-wrap gap-[24px] w-full ">
          {filteredAwards.map((award, i: number) => (
            <div key={i} className="lg:basis-[calc(33.33333%-16px)] sm:basis-[calc(50%-16px)] basis-full">
              <AwardCard award={award} />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center">
          <PrimaryButton variant="light"> Load More</PrimaryButton>
        </div> */}
      </div>
    </ContentContainer>
  );
};

export default Awards;
