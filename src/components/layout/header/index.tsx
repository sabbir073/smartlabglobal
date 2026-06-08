"use client";
import { useDarkMode } from "@/hooks/useDarkMode";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Logo from "@/assets/images/dummy/logo.png";
import DarkLogo from "@/assets/images/dummy/dark-logo.png";
import { DarkIcon, HamburgerMenu, LightIcon, SearchIcon } from "@/assets/icons";
import { HamburgerCrossMenu } from "@/assets/icons/HamburgerMenu";
import Dropdown from "./Nav/Dropdown";
import Nav from "./Nav";
import "./styles.scss";
import MobileDropdown from "./mobileDropdown";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import ContentContainer from "../container/contentContainer";
import useNavigationData from "@/hooks/useNavigationData";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/utils/helpers/cn";
import SearchComponent from "./searchComponent/SearchComponent";

type Props = {};
type Panel = "none" | "search" | "menu";

const Header = (props: Props) => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // 🔑 Single source of truth
  const [panel, setPanel] = useState<Panel>("none");
  const isSearchItemOpen = panel === "search";
  const isMobileMenuOpen = panel === "menu";

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchToggleBtnRef = useRef<HTMLButtonElement>(null);

  // Outside click to close SearchComponent
  useEffect(() => {
    if (!isSearchItemOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const container = searchContainerRef.current;
      const toggleBtn = searchToggleBtnRef.current;

      const path = (event.composedPath && event.composedPath()) || [];
      const inContainer =
        container &&
        (path.includes(container) || container.contains(event.target as Node));
      const inToggle =
        toggleBtn &&
        (path.includes(toggleBtn) || toggleBtn.contains(event.target as Node));

      if (!inContainer && !inToggle) {
        setPanel("none");
      }
    };

    // capture phase reduces race conditions
    document.addEventListener("pointerdown", handlePointerDown, {
      capture: true,
    });
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, {
        capture: true,
      } as any);
    };
  }, [isSearchItemOpen]);

  // Optional: close search on Escape
  useEffect(() => {
    if (!isSearchItemOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel("none");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isSearchItemOpen]);

  // Toggles (mutually exclusive by design)
  const toggleSearch = () => {
    setPanel((p) => (p === "search" ? "none" : "search"));
  };
  const toggleMobileMenu = () => {
    setPanel((p) => (p === "menu" ? "none" : "menu"));
  };

  useNavigationData();
  const navItems = useAppSelector(
    (state) => state.navigation.header?.items || [],
  );
  const { counter } = useAppSelector((state) => state.loader);
  return (
    <div
      onMouseLeave={() => setHoveredItem(null)}
      className="dark:bg-[#0D0D0D] bg-[#E6E7E8] sticky top-0 z-[100] w-full md:aspect-[1920/131] aspect-auto"
    >
      {counter > 0 && (
        <div className="fixed h-dvh w-dvw bg-black/50 flex items-center justify-center text-white z-[100]">
          Loading ...
        </div>
      )}

      <ContentContainer className="flex flex-row gap-5 justify-between  2xl:py-[1.5vw] md:py-8 py-5 mx-auto ">
        {/* left */}
        <NavLink href={routes.home} onClick={() => setHoveredItem(null)}>
          <Image
            className="lg:w-[8.54vw] w-[107px]"
            src={isDarkMode ? DarkLogo : Logo}
            alt="logo"
          />
        </NavLink>

        {/* middle */}
        <Nav setHoveredItem={setHoveredItem} />

        {/* right */}
        <RightSideContent
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          isSearchItemOpen={isSearchItemOpen}
          openSearch={() => setPanel("search")}
          closeSearch={() => setPanel("none")}
          toggleSearch={toggleSearch}
          searchToggleBtnRef={searchToggleBtnRef}
        />
      </ContentContainer>

      {/* full-width dropdown container */}
      {hoveredItem && (
        <div className="absolute left-0 right-0 top-full h-dvh pb-[150px] overflow-y-scroll  z-50 dropdown-container pointer-events-none hidden lg:block scrollbar-hide">
          <Dropdown
            item={navItems.find((item: IMenuItem) => item.url === hoveredItem)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setHoveredItem(null)}
          />
        </div>
      )}

      {/* Search area */}
      {isSearchItemOpen && (
        <div
          ref={searchContainerRef}
          className={cn(
            "absolute left-0 right-0 top-full z-40 overflow-hidden",
            "transition-all duration-300 ease-out shadow-lg",
            isSearchItemOpen
              ? "h-[80vh] opacity-100 translate-y-0 pointer-events-auto"
              : "h-[80vh] opacity-0 -translate-y-4 pointer-events-none",
          )}
        >
          <SearchComponent
            setIsSearchItemOpen={(open) => setPanel(open ? "search" : "none")}
          />
        </div>
      )}

      {/* mobile dropdown */}
      <MobileDropdown
        isOpen={isMobileMenuOpen}
        onClose={() => setPanel("none")}
      />
    </div>
  );
};

export default Header;

type RightSideContentProps = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  isSearchItemOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  searchToggleBtnRef: React.RefObject<HTMLButtonElement>;
};

const RightSideContent = ({
  toggleDarkMode,
  isDarkMode,
  toggleMobileMenu,
  isMobileMenuOpen,
  isSearchItemOpen,
  openSearch,
  closeSearch,
  toggleSearch,
  searchToggleBtnRef,
}: RightSideContentProps) => {
  return (
    <div className="flex gap-4 items-center ">
      <button
        className=" text-sm py-1 px-2 border border-[#4D4D4F]  font-medium dark:border-[#FFFFFF33] h-max rounded-full lg:flex hidden items-center gap-[10px] pr-3"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <>
            <LightIcon /> Light Mode
          </>
        ) : (
          <>
            <DarkIcon /> Dark Mode
          </>
        )}
      </button>

      <button
        className="w-7 h-7 border border-[#4D4D4F] dark:border-[#FFFFFF33] rounded-full lg:hidden flex items-center justify-center gap-[10px]"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <LightIcon /> : <DarkIcon />}
      </button>

      <span className="h-[34px] w-[1px] dark:bg-[#FFFFFF33] bg-[#41404233]" />

      <div>
        {isSearchItemOpen ? (
          <button
            ref={searchToggleBtnRef}
            className="search"
            onClick={closeSearch}
          >
            <SearchIcon isDarkMode={isDarkMode} />
          </button>
        ) : (
          <button
            ref={searchToggleBtnRef}
            className="search"
            onClick={toggleSearch}
          >
            <SearchIcon isDarkMode={isDarkMode} />
          </button>
        )}
      </div>

      <button
        className="lg:hidden size-[18px] relative"
        onClick={toggleMobileMenu}
      >
        <span
          className={cn(
            "absolute inset-0 transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100",
          )}
        >
          <HamburgerMenu isDarkMode={isDarkMode} />
        </span>

        <span
          className={cn(
            "absolute inset-0 transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          <HamburgerCrossMenu isDarkMode={isDarkMode} />
        </span>
      </button>
    </div>
  );
};
