// "use client";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/utils/helpers/cn";
import React, { useEffect, useState } from "react";

interface DropdownProps<T = any> {
  data: T[];
  displayKey: string;
  onItemClick: ({
    item,
    index,
    value,
  }: {
    item: T;
    value: T;
    index: number;
  }) => void;
  placeholder?: string;
  value?: T;
  buttonClassName?: string;
  containerClassName?: string;
  className?: string;
  iconColor?: string;
  selectedItemClassName?: string;
  required?: boolean;
  themeReverse?: boolean;
  error?: string;
}

const DropdownComponent = <T extends Record<string, any>>({
  data,
  displayKey,
  onItemClick = () => {},
  placeholder = "Select an option",
  value,
  buttonClassName = "",
  containerClassName = "",
  className = "",
  iconColor = "#000000",
  selectedItemClassName = "",
  required = false,
  themeReverse = false,
  error,
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(value);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setSelectedItem(value);
  }, [value]);
  const handleItemClick = (item: T, index: number) => {
    onItemClick({ item, index, value: item[displayKey] });
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className={cn("relative w-fit mx-auto", containerClassName)}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={cn(
            "w-full px-4 py-3 text-left flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-0   transition-all duration-200 font-[700] text-[14px] md:text-[16px]",
            buttonClassName,
            themeReverse
              ? "bg-[#414042] dark:bg-white"
              : " bg-white dark:bg-[#1C1C1F]",
          )}
        >
          <span
            className={cn(
              "pr-1",
              selectedItem ? "text-[#FF4306]" : "text-gray-500",
              selectedItemClassName,
            )}
          >
            <span
              className={
                (isDarkMode && !themeReverse) || (!isDarkMode && themeReverse)
                  ? "text-white dark:text-white"
                  : " dark:text-[#414042]"
              }
            >
              {selectedItem ? selectedItem[displayKey] : placeholder}
            </span>
            {required && !selectedItem && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </span>
          <div
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex items-center justify-center ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L7 7L1 1"
                stroke={
                  (isDarkMode && !themeReverse) || (!isDarkMode && themeReverse)
                    ? "#ffffff"
                    : iconColor
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        {isDropdownOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsDropdownOpen(false)}
            />

            {/* Dropdown menu */}
            <div
              className={cn(
                "absolute top-full left-0 right-0 mt-1",
                "bg-white dark:bg-[#1C1C1F] border border-gray-300 dark:border-[#414042] rounded-lg shadow-lg",
                "z-20 max-h-60 overflow-y-auto",
                className,
              )}
            >
              {data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item, index)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-[#0d0d0d] transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg capitalize  ${
                    selectedItem &&
                    selectedItem[displayKey] === item[displayKey]
                      ? "bg-blue-50 dark:bg-[#0d0d0d] text-[#FF4306] font-medium"
                      : "text-gray-700 dark:text-white"
                  }`}
                >
                  {item[displayKey]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default DropdownComponent;
