"use client";
import { MinusIcon, PlusIcon } from "@/assets/icons";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SafeHtml from "@/components/common/safeHtml";

type Props = {
  faq: {
    title: string;
    content: string;
  };
  id: number;
  active: boolean;
  setActive: () => void;
};

export default function FaqSection({ faq, id, active, setActive }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(contentRef.current, {
        height: active ? "auto" : 0,
        opacity: active ? 1 : 0,
        marginTop: active ? "1rem" : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { dependencies: [active] },
  );

  return (
    <>
      <div
        className={`px-7 py-[22px] rounded-md transition-all duration-500 ${active ? "bg-[#383838] text-[#EBEBEB]" : "bg-white dark:bg-[#383838] text-black dark:text-[#EBEBEB]"
          }`}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setActive()}
        >
          <p
            className={`text-[17px] font-semibold `}
          >
            <SafeHtml content={faq?.title} />
          </p>
          <button className="w-5 h-5">
            {active ? <MinusIcon /> : <PlusIcon />}
          </button>
        </div>
        <div
          ref={contentRef}
          style={{ height: 0, opacity: 0, overflow: "hidden" }}
        >
          <p className="text-sm text-[#D1D1D1]">
            <SafeHtml content={faq.content} />
          </p>
        </div>
      </div>
    </>
  );
}
