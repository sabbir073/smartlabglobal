'use client'
import ImageComponent from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import { PlusIcon } from "@/assets/icons";
import "../../styles.scss";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import { Content } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import truncateText from "@/utils/helpers/truncateText";
import DropdownComponent from "@/components/common/dropdown";
import { useEffect, useState } from "react";
import useHTTP from "@/hooks/useHTTP";
import api from "@/config/api/apiList";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import { formatDate } from "@/utils/helpers/formatDate";
import NoDataFound from "@/components/common/noData/NoDataFound";

type Props = {
  data: any,
  filterItems: any,
}
export default function EventsWrapper({ data, filterItems, }: Props) {

  const [dataItems, setDataItems] = useState<any[]>([]);
  const [selectedFilterItem, setSelectedFilterItem] = useState<any>(null);
  const [loadMoreUrl, setLoadMoreUrl] = useState<string | null>(null);

  const { GetData } = useHTTP()
  useEffect(() => {
    if (Array.isArray(data?.items?.data)) {
      setDataItems(data?.items?.data);
      setLoadMoreUrl(data?.items?.next_page_url ?? null);
    } else {
      setDataItems([]);
    }
  }, [data]);
  useEffect(() => {
    getDataByFilter();
  }, [selectedFilterItem]);
  const filterItemClickHandler = ({ item }: { item: any }) => {
    setSelectedFilterItem(item?.slug)
  };

  const getDataByFilter = async () => {
    if (!selectedFilterItem) return;
    const response = await GetData({ api: api.page.eventsByFilter(selectedFilterItem) });
    const { items } = extractEventData(response);
    setDataItems(items);
  };
  const getNextPageData = async () => {
    if (!loadMoreUrl) return;
    const response = await GetData({ api: loadMoreUrl });
    const { items, nextPageUrl } = extractEventData(response);
    setDataItems(prev => [...prev, ...items]);
    setLoadMoreUrl(nextPageUrl);
  };
  const extractEventData = (response: any) => {
    return {
      items: Array.isArray(response?.data?.data?.data?.event?.items?.data) ? response?.data?.data?.data?.event?.items?.data : [],
      nextPageUrl: response?.data?.data?.data?.event?.items?.next_page_url ?? null,
    };
  };


  return (
    <div className="">
      <ContentContainer>
        <div className="flex justify-end">
          <DropdownComponent
            data={filterItems ?? []}
            displayKey="slug"
            onItemClick={filterItemClickHandler}
            containerClassName="border-2 max-w-[350px] w-[350px] w-auto"
            buttonClassName="!text-xs md:!text-[13px] !font-semibold"
            placeholder="SELECT YEAR"
          />
        </div>
        {dataItems.length === 0 && <NoDataFound containerClassname="" message="No events found." />}
        <div className="flex sm:flex-row flex-col flex-wrap gap-5 mt-16">
          {dataItems?.map((item: any, index: number) => {
            const { date, month, year } = formatDate(item?.start_date, 'object', { shortenMonth: true }) as { date: number; month: string; year: number };
            return <div
              key={index}
              className="lg:w-[calc(100%/3-14px)] sm:w-[calc(100%/2-10px)] w-full  aspect-[387/448] group relative grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
            >
              {/* image will shown from item.thumb , if thumb is not available then item.cover. discussed with Jahid bhai */}
              <ImageComponent alt="" src={item.thumb ?? item.cover} className="absolute top-0 left-0 -z-[1] w-full h-full" />
              <div className="w-full h-full backdrop-blur p-[30px]">
                <p className=" text-[#FF4306] hidden group-hover:inline-block transition-all duration-500 ease-in-out">{new Date() > new Date(item.start_date) ? '' : 'Upcoming'}</p>
                <div className="group-hover:2xl:mt-[34px] group-hover:mt-[20px]  transition-all duration-500 ease-in-out">
                  <h3 className="!text-[#F4F4F4] !mb-5  text-[20px] font-bold " >{item.title}</h3>
                  <div className="flex gap-1 items-end text-[16px] text-[#F4F4F4] group-hover:absolute right-[30px] top-[30px] transition-all duration-500 ease-in-out">{month} <span className="text-[40px] leading-[1]">{date}</span></div>
                  <div className="group-hover:block hidden transition-all duration-500 ease-in-out text-[#F4F4F4]">
                    <Content className="text-[#D9D9D9] text-sm  mb-8">
                      <SafeHtml content={truncateText(item.excerpt)} />
                    </Content>
                    <p className="text-lg font-medium 2xl:mb-10 mb-7">Location: {item.location}</p>
                    <NavLink
                      className="event-btn flex items-center gap-2 text-sm"
                      href={routes.eventsDetail(item.slug)}
                    >
                      View Details <PlusIcon />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          }
          )}
        </div>
        {
          loadMoreUrl &&
          <div className="flex justify-center">
            <PrimaryButton className="mt-6 mx-auto" variant="outlined" onClick={getNextPageData}>Load More</PrimaryButton>
          </div>
        }
      </ContentContainer>
    </div>
  )
}

