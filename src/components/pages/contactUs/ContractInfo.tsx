import EmailIcon from "@/assets/icons/EmailIcon";
import OfficeIcon from "@/assets/icons/OfficeIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import { useDarkMode } from "@/hooks/useDarkMode";
import React from "react";

const ContactInfo = ({ branch }: any) => {
  return (
    <div>
      <div className="flex flex-col md:gap-[43px] gap-8">
        <Information
          InfoIcon={PhoneIcon}
          title="Phone"
          description={branch.phone}
        />
        <Information
          InfoIcon={EmailIcon}
          title="E-mail"
          description={branch.email}
        />
        <Information
          InfoIcon={OfficeIcon}
          title="Head Office"
          description={branch.address_line_one}
        />
      </div>
      {branch.address_line_two &&
        <div className="">
          <div className="h-[1px] bg-black my-[32px] dark:bg-[#D9D9D9]" />
          <Information
            InfoIcon={OfficeIcon}
            title={branch.name}
            description={branch.address_line_two}
          />
        </div>
      }
    </div>
  );
};

const Information = ({ InfoIcon, title, description }: { InfoIcon: any, title: string, description: string }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <div className="flex flex-col items-start gap-[12px]">
      <div className=" flex items-center gap-2">
        <InfoIcon stroke={isDarkMode ? "#F4F4F4" : "#414042"} />
        <div className="font-medium text-[18px] leading-[100%] tracking-[0%] text-[#414042] dark:text-[#F4F4F4]">{title}</div>
      </div>
      <p className="font-medium text-[14px]  leading-[1.6]  tracking-[0%]  pr-2 text-[#414042] dark:text-[#F4F4F4]">
        {description}
      </p>
    </div>
  )
}

export default ContactInfo;


