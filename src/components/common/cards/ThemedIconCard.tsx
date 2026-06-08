import { useEffect, useState } from "react";
import ImageComponent from "../image";
import { useDarkMode } from "@/hooks/useDarkMode";

function ThemedIconCard({ data, className = "" }: { data: ISectionItem, className?: string }) {
  const { isDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);
  const [iconValue, setIconValue] = useState<any>();
  useEffect(() => {
    if (!data) {
      setIconValue(null);
      return;
    }

    // Determine keys with fallback
    const light = data.icon || null;
    const lightHover = data.iconHover || light;
    const dark = data.icon_dark || light;
    const darkHover = data.icon_darkHover || dark;

    if (isDarkMode) {
      setIconValue(isHovered ? darkHover : dark);
    } else {
      setIconValue(isHovered ? lightHover : light);
    }

  }, [data, isHovered, isDarkMode]);
  
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl py-6 px-12 cursor-pointer
        transition-all duration-300 ease-in-out
        ${isHovered
          ? "bg-[#4D4D4F] dark:bg-[#FFFFFF] text-[#F4F4F4] dark:text-[#414042]"
          : "bg-[#4D4D4F17] dark:bg-[#4D4D4F] text-[#414042] dark:text-[#F4F4F4]"
        }
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex-shrink-0">
          <ImageComponent
            src={iconValue}
            alt={`${data.title} icon`}
            width={32}
            height={32}
            className={`w-full h-full object-contain ${isHovered ? "scale-110 rotate-6 transition-all duration-300 ease-in-out" : ""}`}
          />
        </div>
        <h3 className="text-sm font-medium leading-tight">{data?.title}</h3>
      </div>
    </div>
  );
}

export default ThemedIconCard;
