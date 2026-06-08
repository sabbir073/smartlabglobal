"use client";

import React from "react";
import ContentContainer from "../../container/contentContainer";
import ImageComponent from "@/components/common/image";
import img1 from "@/assets/images/dummy/header/image-1.png";
import img2 from "@/assets/images/dummy/header/image-2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";

interface Props {
  ref?: React.RefObject<HTMLDivElement>;
  item?: IMenuItem;
  onMouseLeave: () => void;
  onClick?: () => void;
}

const Dropdown = ({ ref, item, onMouseLeave, onClick }: Props) => {
  useGSAP(() => {
    gsap.fromTo(
      ".first-column-text",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
    );
    gsap.fromTo(
      ".last-column-item",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
    );
    gsap.fromTo(
      ".middle-column-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" },
    );
  }, [item]);

  if (!item || !item.children || item.children.length === 0) {
    return null;
  }

  return (
    <div
      // ref={ref}
      className="w-full h-auto  bg-[#ebebec] dark:bg-black shadow-lg pointer-events-auto overflow-y-auto"
      onMouseEnter={() => {}}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <ContentContainer className="flex py-8 px-4 gap-6">
        {/* First column - fixed 30% */}
        <div className="w-[30%] shrink-0 first-column-text">
          <Heading2>
            <SafeHtml content={item?.title} />
          </Heading2>
          <Content>
            <SafeHtml content={item?.additional?.excerpt} />
          </Content>
        </div>

        {/* Second (middle) column - grows */}
        <div className="flex-grow">
          <div
            className={`grid gap-6 ${
              item.children.length > 7 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {item.children.map((child, i) => (
              <NavLink
                href={`/${item.url}/${child.url}`}
                key={i}
                className="text-[#414042] dark:text-[#F4F4F4] hover:text-[#FF4306] dark:hover:text-[#FF4306] block p-2 text-[14px] font-[600] font-poppins middle-column-item"
              >
                {child.title}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Third column - fixed 30% */}
        <div className="w-[30%] shrink-0 flex flex-col items-center last-column-item">
          {item?.additional?.case_study.map((caseStudy, i) => {
            // console.log(caseStudy, "caseStudy");
            return (
              <div
                key={i}
                className="flex flex-col w-full gap-2 items-center relative "
              >
                <ImageComponent
                  src={caseStudy.thumb ?? caseStudy.cover}
                  className="aspect-[406/307]"
                  alt="..."
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-end p-4 font-poppins">
                  <p className="text-[#FFFFFF] text-[18px] font-[600] leading-[28px] text-start mb-2">
                    {caseStudy.title}
                  </p>
                  <p className="text-[#FFFFFF] text-[14px] font-[400]">
                    {caseStudy?.description?.length &&
                    caseStudy?.description?.length > 150
                      ? `${caseStudy?.description?.substring(0, 110)}...`
                      : caseStudy?.description}
                  </p>
                  <NavLink href={routes.caseStudyDetails(caseStudy.slug)}>
                    <button className="text-white flex gap-3 items-center mt-2 py-2 cursor-pointer">
                      Read More
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.480429 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.480429 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8Z"
                          fill="#F4F4F4"
                        />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </div>
  );
};

export default Dropdown;

const LastColData = [
  {
    title: "Rethinking Agility in the Digital Age",
    description:
      "In today’s fast-evolving tech landscape, agility is more than a buzzword—it’s a survival strategy. This Driving large-scale transformation with intuitive platforms and strategic technology,",
    cover: img1,
  },
  {
    title: "Rethinking Agility in the Digital Age",
    description:
      "In today’s fast-evolving tech landscape, agility is more than a buzzword—it’s a survival strategy. This Driving large-scale transformation with intuitive platforms and strategic technology,",
    cover: img2,
  },
];
