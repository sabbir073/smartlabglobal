import React, { useEffect, useState } from "react";
import { HamburgerCrossMenu } from "@/assets/icons/HamburgerMenu";
import { useDarkMode } from "@/hooks/useDarkMode";
import { RightArrowIcon } from "@/assets/icons";
import NavLink from "@/components/common/link/NavLink";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/utils/helpers/cn";

interface MobileDropdownProps {
  isOpen: boolean;
  onClose?: () => void;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen, onClose }) => {
  const [openChildren, setOpenChildren] = useState<boolean[]>([]);

  const { header } = useAppSelector((state) => state.navigation);
  const navItems = header?.items ?? [];

  useEffect(() => {
    if (isOpen) {
      setOpenChildren(new Array(navItems.length).fill(false));
    }
  }, [isOpen]);

  const toggleChildren = (index: number) => {
    setOpenChildren((prev) => {
      const newOpenChildren = [...prev];
      newOpenChildren[index] = !newOpenChildren[index];
      return newOpenChildren;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed top-[75px] inset-0 bg-white dark:bg-black z-40 overflow-y-auto">
      <div className="flex flex-col">
        {navItems.map((item, index) => (
          <div key={index} className="pb-5">
            <NavLink
              href={`/${item.url}`}
              className="flex justify-between items-center text-lg  text-[#4f4d4e] dark:text-gray-200 font-semibold text-[14px] leading-[26px] tracking-[0px] uppercase py-7 border-b border-[#E3E3E3] dark:border-gray-700 px-4"
              onClick={onClose}
            // onClick={
            //   item.children && item.children.length > 0
            //     ? () => toggleChildren(index)
            //     : onClose
            // }
            >
              {item.title}
              {item.children && item.children.length > 0 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // prevent Link navigation
                    e.preventDefault(); // prevent Link default behavior
                    toggleChildren(index);
                  }}
                  className={`transform transition-transform duration-300 p-2  ${openChildren[index] ? "rotate-90" : ""
                    }`}
                >
                  <ArrowIcon />
                </span>
              )}
            </NavLink>
            {item.children && item.children.length > 0 && (
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  openChildren[index]
                    ? "h-auto opacity-100"
                    : "h-0 opacity-0",
                )}
              >
                {item.children.map((child, childIndex) => (
                  <NavLink
                    href={`/${item.url}/${child.url}`}
                    key={childIndex}
                    className="block py-7 text-lg text-[#4f4d4e] dark:text-gray-200 font-semibold text-[14px] leading-[26px] tracking-[0px] uppercase px-4"
                    onClick={onClose}
                  >
                    {child.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDropdown;

const ArrowIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33594 14.6654L8.0026 7.9987L1.33594 1.33203"
        stroke={isDarkMode ? "#F4F4F4" : "#4D4D4F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
