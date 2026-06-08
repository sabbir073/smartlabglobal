import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import api from "@/config/api/apiList";
import useHTTP from "@/hooks/useHTTP";
import React, { useRef } from "react";

type Props = { data: any, setCurrentJobs: (jobs: any[]) => void };

const CurrentOpening = ({ data, setCurrentJobs }: Props) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const { GetData } = useHTTP();


  const searchHandler = async (q: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      fetchJobs(q)
    }, 500)

  };

  const fetchJobs = async (q: string) => {
    if (q.trim() === "") {
      setCurrentJobs(data?.items ?? []);
      return;
    }
    const res: any = await GetData({
      api: `${api.page.joinUs}?q=${q.trim()}`,
      showLoader: true,
    });
    const result = res?.data?.data?.data?.current_job?.items
    if (result) {
      setCurrentJobs(result);
    } else {
      setCurrentJobs([]);
    }
  }

  return (
    <ContentContainer className="">
      <div className="relative flex flex-col md:flex-row md:items-center items-center justify-center md:justify-between mb-8 gap-4">
        <Heading2 className="!text-[#FF4306]">{data.title}</Heading2>
        <div className="w-[262px] relative" aria-label="Search job openings">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full border-b border-[#4D4D4F] dark:border-[#F4F4F4] py-2 pl-3 pr-10 text-[#4D4D4F] placeholder-[#414042] dark:placeholder-[#F4F4F4] outline-none focus:border-[#4D4D4F] dark:bg-transparent dark:text-[#F4F4F4] transition"
            onChange={(e) => searchHandler(e.target.value)}
          />
          <span className="absolute right-3 top-2.5 pointer-events-none">
            <svg
              className="h-5 w-5 text-[#4D4D4F] dark:text-[#F4F4F4]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CurrentOpening;
