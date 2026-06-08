import DropdownComponent from "@/components/common/dropdown";
import ImageComponent from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import { PlusIcon } from "@/assets/icons";
import "../../styles.scss";
import NavLink from "@/components/common/link/NavLink";
import { useState } from "react";
import { usePaginatedFilterData } from "@/hooks/usePaginatedFilteredData";
import api from "@/config/api/apiList";
import truncateText from "@/utils/helpers/truncateText";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import routes from "@/config/routes";
import { Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import { formatDate } from "@/utils/helpers/formatDate";
import NoDataFound from "@/components/common/noData/NoDataFound";


type Props = {
	data: any,
	filterItems: any,
}
export default function NewsWrapper({ data, filterItems, }: Props) {

	const extractData = (response: any) => {
		return {
			items: Array.isArray(response?.data?.data?.data?.news?.items?.data) ? response?.data?.data?.data?.news?.items?.data : [],
			nextPageUrl: response?.data?.data?.data?.news?.items?.next_page_url ?? null,
		};
	};
	// const dataItems = [] as any[]

	const { dataItems, loadMoreUrl, selectedFilterItem, filterItemClickHandler, getNextPageData, getDataByFilter } =
		usePaginatedFilterData(api.page.newsByFilter, extractData, data?.items?.data ?? [], data?.items?.next_page_url ?? null);


	return (
		<div className="">
			<ContentContainer>
				<div className="flex justify-end ">
					<DropdownComponent
						data={filterItems ?? []}
						displayKey="slug"
						onItemClick={filterItemClickHandler}
						containerClassName="border-2  w-full "
						buttonClassName="!text-xs md:!text-[13px] !font-semibold"
						placeholder="SELECT YEAR"
					/>
				</div>

				{dataItems.length === 0 && <NoDataFound containerClassname="" message="No news or articles found." />}

				<div className="flex sm:flex-row flex-col flex-wrap gap-5  mt-16">
					{dataItems.map((item: any, index: number) => {
						const { date, month, year } = formatDate(item?.published_at, 'object', { shortenMonth: true }) as { date: number; month: string; year: number };
						return <div key={index} className="lg:w-[calc(100%/3-14px)] sm:w-[calc(100%/2-10px)] w-full  aspect-[387/448] group relative grayscale transition-all duration-500 ease-in-out hover:grayscale-0">
							{/* image will shown from item.thumb , if thumb is not available then item.cover. discussed with Jahid bhai */}
							<ImageComponent alt="" src={item.thumb ?? item.cover} className="absolute top-0 left-0 -z-[2] w-full h-full" />
							<div className="w-full h-full absolute top-0 left-0 bg-[#000000B3] -z-[1]"></div>
							<div className="w-full h-full group-hover:backdrop-blur-sm p-[30px]">
								<div className="">
									<Heading2 className=" !text-[#F4F4F4] !text-[18px] !mb-6 leading-[1.55]">
										<SafeHtml content={item?.title} />
									</Heading2>
									<p className="text-[14px] text-[#F4F4F4] mb-10">{month + " " + date + ", " + year}</p>
									<div className="group-hover:opacity-100 opacity-0 transition-all duration-500  text-[#F4F4F4]">
										<p className="text-[#D9D9D9] text-sm 2xl:mb-16 mb-8">{truncateText(item?.excerpt)}</p>
										<NavLink className="event-btn flex items-center gap-2 text-sm" href={routes.newsDetails(item?.slug)}>Read More <PlusIcon /></NavLink>
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

let data = [
	"category1", "category2", "category3"
]
