import { useDarkMode } from "@/hooks/useDarkMode";
import React from "react";

interface LeftArrowIconProps {
  disabled?: boolean;
}

const LeftArrowIcon = ({ disabled = false }: LeftArrowIconProps) => {
  const { isDarkMode } = useDarkMode();
  const fillColor = disabled ? (isDarkMode ? "#F4F4F4" : "#414042") : "#FF4306";

  return (
    <svg width="18" height="16" fill="none" viewBox="0 0 18 16">
      <path
        fill={fillColor}
        d="M7.857 15.143l1.007-1.007L3.45 8.714h14.407V7.286H3.45l5.414-5.422L7.857.857.714 8l7.143 7.143z"
      />
    </svg>
  );
};

export default LeftArrowIcon;
