"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/components/common/link/NavLink";
import { useAppSelector } from "@/store/hooks";

type Props = {
  setHoveredItem: (item: string | null) => void;
};

const Nav = ({ setHoveredItem }: Props) => {
  const pathname = usePathname();
  const { header } = useAppSelector((state) => state.navigation);

  const navItems = header?.items ?? [];

  return (
    <div className="lg:flex items-center gap-[25px] text-sm font-semibold hidden relative">
      {navItems.map((item, i) => {
        const isActive = pathname.startsWith(`/${item.url}`);
        return (
          <NavLink
            key={i}
            href={`/${item.url}`}
            onMouseEnter={() => setHoveredItem(item.url)}
            onClick={() => setHoveredItem(null)}
            className={` py-0 content-center cursor-pointer hover:text-[#FF4306] block ${isActive ? "text-[#FF4306]" : ""
              }`}
          >
            {item.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
