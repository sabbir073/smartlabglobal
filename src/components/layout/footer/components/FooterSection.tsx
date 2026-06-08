"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/dummy/logo.png";
import DarkLogo from "@/assets/images/dummy/dark-logo.png";
import ImageComponent from "@/components/common/image";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import { useDarkMode } from "@/hooks/useDarkMode";
import PrimaryButton from "@/components/common/button/PrimaryButton";

import { useAppSelector } from "@/store/hooks";
import ContentContainer from "../../container/contentContainer";

type Props = { socialData: any };

const FooterSection = ({ socialData }: Props) => {
  const [footerItems, setFooterItems] = useState<IMenuItem[]>([]);
  const { isDarkMode } = useDarkMode();
  const { footer } = useAppSelector((state) => state.navigation);

  useEffect(() => {
    if (footer) {
      setFooterItems(footer.items);
    }
  }, [footer]);

  const socialIconsMap: Record<string, React.ElementType> = {
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
    twitter: TwitterIcon,
  };

  return (
    <div>
      <footer className="bg-[#FFFFFF] dark:bg-[#0D0D0D] w-full pt-16">
        <ContentContainer className="w-full  mx-auto px-4 self-start mb-8 md:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex justify-center sm:justify-start">
              <ImageComponent
                src={isDarkMode ? DarkLogo : Logo}
                className="w-[165px] h-[55px] mb-[60px] sm:mb-0 mt-[10px]"
                alt="Smart Lab Global"
              />
            </div>

            <div className="grid grid-cols-2 justify-center text-left text-[#414042] dark:text-[#D9D9D9] font-poppins mb-[60px] sm:mb-0">
              {Array.from(
                { length: Math.ceil(footerItems.length / 3) },
                (_, i) => footerItems.slice(i * 3, i * 3 + 3),
              ).map((footerGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col items-center sm:items-start text-left"
                >
                  <ul className="leading-[30px] text-[14px]">
                    {footerGroup.map((item, index) => (
                      <li key={index}>
                        <NavLink href={item.url}>{item.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start font-poppins">
              <h2 className="font-semibold text-[24px] md:text-[30px] text-[#414042] dark:text-[#D9D9D9]">
                Contact Us
              </h2>
              <p className="font-normal md:text-start text-center text-[14px] text-[#414042] dark:text-[#D9D9D9] mb-4 leading-[24px]">
                Let us know your challenges, and get the exact solution.
              </p>
              <PrimaryButton href={routes.contact}>Let's Talk!</PrimaryButton>
            </div>
          </div>
        </ContentContainer>

        <ContentContainer className="bg-[#FFFFFF] dark:bg-[#0D0D0D] w-full py-8 border-t dark:border-[#D9D9D97D] border-[#BBBBBB] items-center text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#414042] dark:text-[#D9D9D9] text-[14px] gap-4 text-center font-poppins">
            <div>
              <p className="text-[14px] font-roboto font-normal text-black dark:text-[#D9D9D9]">
                Smart-Voice Limited & Smart-Lab Global &copy;{" "}
                {new Date().getFullYear()} — All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialData?.social.map((link: any, index: number) => {
                const Icon = socialIconsMap[link.slug.toLowerCase()];
                if (!Icon) return null; // skip if no icon defined
                return (
                  <NavLink
                    key={link.slug}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[24px] h-[24px] flex items-center justify-center"
                  >
                    <Icon />
                  </NavLink>
                );
              })}
            </div>

            <div className="space-x-4">
              <ul className="flex space-x-2">
                <li>
                  <NavLink href={routes.policyDetails("privacy-policy")}>
                    Privacy Policy
                  </NavLink>
                </li>
                <li>•</li>
                <li>
                  <NavLink href={routes.policyDetails("terms-of-use")}>
                    Terms of Use
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </ContentContainer>
      </footer>
    </div>
  );
};

export default FooterSection;

const YoutubeIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <mask
        id="mask0_1425_7721"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="20"
        height="16"
      >
        <path
          d="M12 5C21 5 21 5 21 12C21 19 21 19 12 19C3 19 3 19 3 12C3 5 3 5 12 5Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="black" />
      </mask>
      <g mask="url(#mask0_1425_7721)">
        <path d="M24 0H0V24H24V0Z" fill={isDarkMode ? "#D9D9D9" : "#414042"} />
      </g>
    </svg>
  );
};

const LinkedinIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
        fill={isDarkMode ? "#D9D9D9" : "#414042"}
      />
    </svg>
  );
};

const TwitterIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H2.5L17.5 20H15L0 0ZM4.5 0H7L22 20H19.5L4.5 0Z"
        fill={isDarkMode ? "#D9D9D9" : "#414042"}
      />
      <path
        d="M2 0H7V2H2V0ZM15 20H20V18H15V20Z"
        fill={isDarkMode ? "#D9D9D9" : "#414042"}
      />
      <path
        d="M17.5 0H21L4 20H0.5L17.5 0Z"
        fill={isDarkMode ? "#D9D9D9" : "#414042"}
      />
    </svg>
  );
};
