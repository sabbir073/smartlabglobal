import React, { useEffect, useState } from "react";
import DropdownComponent from "../dropdown";
import { cn } from "@/utils/helpers/cn";
import { useDarkMode } from "@/hooks/useDarkMode";

interface Props<T = any> {
  data: T[];
  displayKey: string;
  onItemClick?: ({
    value,
    item,
    index,
  }: {
    value?: T;
    item: T;
    index: number;
  }) => void;
  value?: T;
  placeholder?: string;
  onlyDropdownOnMobile?: boolean;
  themeReverse?: boolean;
}

const TabBar = <T extends Record<string, any>>({
  data = [],
  displayKey,
  onItemClick = () => { },
  value,
  placeholder = "Select an option",
  onlyDropdownOnMobile,
  themeReverse,
}: Props<T>) => {
  const [selectedItem, setSelectedItem] = useState<T | any>(value);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  const handleItemClick = ({
    item,
    index,
  }: {
    item: T;
    index: number;
    value?: T;
  }) => {
    onItemClick({ value: item[displayKey], item, index });
    setSelectedItem(item);
  };

  return (
    <div className="w-full md:w-auto">
      {!onlyDropdownOnMobile && (
        <div className={cn("hidden md:flex flex-wrap justify-center gap-12")}>
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick({ item, index })}
              className={`w-fit  py-2 rounded-lg font-[500] text-[18px] leading-[100%] transition-all duration-500  ${selectedItem?.[displayKey] === item[displayKey]
                ? "text-[#FF4306]"
                : "text-[#41404285] dark:text-white"
                }`}
            >
              {item[displayKey]}
            </button>
          ))}
        </div>
      )}

      <DropdownComponent
        data={data}
        displayKey={displayKey}
        onItemClick={handleItemClick}
        placeholder={placeholder}
        value={selectedItem}
        containerClassName={onlyDropdownOnMobile ? "block" : "md:hidden"}
        buttonClassName={cn(
          "border-2 border-[#414042] focus:border-[#414042] text-center  min-w-[240px] w-fit mx-auto",
          themeReverse
            ? "bg-[#414042] dark:bg-white border-[#414042]"
            : " dark:border-white border-[#414042]",
        )}
        iconColor={
          themeReverse
            ? isDarkMode
              ? "#414042"
              : "#F4F4F4"
            : isDarkMode
              ? "#F4F4F4"
              : "#414042"
        }
      />
    </div>
  );
};

export default TabBar;
