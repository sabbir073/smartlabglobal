import React from "react";
import "./style.css";
type Props = { showBar: boolean };

const SuccessToast = ({ showBar }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ToastSvg />
      <p className="text-[#000000] font-poppins text-[16px] md:text-[24px] font-[500]">
        Application Submitted Successfully
      </p>
      {showBar && (
        <div className="absolute bottom-5 left-0 right-0 w-[90%] h-2 rounded-full overflow-hidden bg-transparent mx-auto">
          <div className="h-full bg-[#11DD36] bar-animate" />
        </div>
      )}
    </div>
  );
};

export default SuccessToast;

const ToastSvg = () => {
  return (
    <svg
      width="97"
      height="103"
      viewBox="0 0 97 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.5 3.55603L61.0495 12.7107L76.5852 12.682L81.3561 27.4652L93.9414 36.5722L89.1132 51.3362L93.9414 66.1003L81.3561 75.2072L76.5852 89.9904L61.0495 89.9617L48.5 99.1164L35.9505 89.9617L20.4148 89.9904L15.644 75.2072L3.05865 66.1003L7.88684 51.3362L3.05865 36.5722L15.644 27.4652L20.4148 12.682L35.9505 12.7107L48.5 3.55603Z"
        stroke="#11DD36"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.777 51.3362L43.722 63.2812L67.6121 39.3911"
        stroke="#11DD36"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
