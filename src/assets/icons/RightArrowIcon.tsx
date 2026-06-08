import { useDarkMode } from "@/hooks/useDarkMode";
import React from "react";
interface RightArrowIconProps {
  disabled?: boolean;
}
const RightArrowIcon = ({ disabled = false }: RightArrowIconProps) => {
  const { isDarkMode } = useDarkMode();
  const fillColor = disabled ? (isDarkMode ? "#F4F4F4" : "#414042") : "#FF4306";


  return (
    <svg width="18" height="16" fill="none" viewBox="0 0 18 16">
      <path
        fill={fillColor}
        d="M10.714.857l-1.022.995 5.415 5.434H.714v1.428h14.393l-5.415 5.41 1.022 1.019L17.857 8 10.714.857z"
      />
    </svg>
  );
};

export default RightArrowIcon;
