"use client";
import ButtonComponent from "@/components/common/button";
import api from "@/config/api/apiList";
import routes from "@/config/routes";
import { useDarkMode } from "@/hooks/useDarkMode";
import useHTTP from "@/hooks/useHTTP";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  setIsSearchItemOpen: (open: boolean) => void;
};

const SearchComponent = ({ setIsSearchItemOpen }: Props) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const { counter } = useAppSelector((state) => state.loader);

  const router = useRouter();

  const { GetData } = useHTTP();
  useEffect(() => {
    if (query.trim() === "") return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {}, 2000);
  }, [query]);

  const runSearch = async (q: string) => {
    setSearchResults([]);
    setError("");

    try {
      const { data }: any = await GetData({
        api: api.page.search(q),
        showLoader: true,
      });

      if (data?.data?.data?.data) {
        setSearchResults(data.data.data.data);
      } else {
        setError("No Result Found");
      }
    } catch (error) {
      setError("No Result Found");
    }
  };

  useEffect(() => {
    if (query.trim() === "") return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      runSearch(query);
    }, 2000);
  }, [query]);

  const handleSearch = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    runSearch(query);
  };

  const handleRedirect = (item: any) => {
    const type = item?.type?.toString()?.toLowerCase();
    const slug = item?.slug;
    const parentSlug = item?.parent?.parent_slug;

    const staticPageBuilder = (slug: string) => {
      const isStatic = ["privacy-policy", "terms-of-use"].find(
        (item) => item === slug,
      );

      if (isStatic) {
        return `/policy/${slug}`;
      }
      if (parentSlug === "insights") {
        return `/insights/${slug}`;
      }
      if (parentSlug === "about") {
        return `/about/${slug}`;
      }

      return parentSlug ? `${parentSlug}/${slug}` : `/${slug}`;
    };

    let routeForPageType = staticPageBuilder(slug);

    setIsSearchItemOpen(false);

    switch (type) {
      case "event":
        router.push(routes.eventsDetail(slug));
        break;
      case "news":
        router.push(routes.newsDetails(slug));
        break;
      case "views":
        router.push(routes.blogDetail(slug));
        break;
      case "casestudy":
        router.push(routes.caseStudyDetails(slug));
        break;
      case "capability":
        router.push(routes.serviceDetail(slug));
        break;

      case "industry":
        router.push(routes.industryDetail(slug));
        break;
      case "about":
        router.push(`/about/${slug}`);
        break;
      case "award":
        break;
      case "insights":
        router.push(`/insights/${slug}`);
        break;
      case "page":
        router.push(routeForPageType);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white dark:bg-[#1c1c1f] h-[80vh] flex justify-center items-start py-20 px-5">
      <div className="md:max-w-[80vw] w-full mx-auto">
        <div className="relative border-b border-[#414042] dark:border-[#F4F4F4] flex items-center justify-between">
          <input
            type="text"
            placeholder="Smart-Lab"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
            className="min-w-0 flex-1 bg-transparent p-2 md:p-4 outline-none text-lg font-normal placeholder:text-[#414042] dark:placeholder:text-[#F4F4F4]"
          />

          <ButtonComponent onClick={handleSearch} className="flex-none">
            <ArrowIcon />
          </ButtonComponent>

          <ButtonComponent
            onClick={() => setIsSearchItemOpen(false)}
            className="flex-none"
          >
            <CrossIcon />
          </ButtonComponent>
        </div>

        <div className="p-5">
          <div className="max-h-[50vh] overflow-y-auto">
            {searchResults.length > 0 && (
              <div>
                <p className="text-[#9BA2A9] py-5">Popular search items</p>
                {searchResults.map((item: any, index: number) => (
                  <div
                    onClick={() => handleRedirect(item)}
                    key={index}
                    className="flex flex-col gap-2 mb-5 cursor-pointer"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            )}
            {counter > 0 && (
              <p className="text-[#9BA2A9] text-sm mt-1">{"searching..."}</p>
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

const ArrowIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0833 20.6673L23.25 15.5007M23.25 15.5007L18.0833 10.334M23.25 15.5007H7.75"
        stroke={isDarkMode ? "#F4F4F4" : "#414042"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CrossIcon = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 9L22 22M22 9L9 22"
        stroke={isDarkMode ? "#F4F4F4" : "#414042"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
