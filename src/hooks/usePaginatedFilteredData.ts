import { useEffect, useState } from "react";
import useHTTP from "./useHTTP";

type ExtractFn = (response: any) => {
  items: any[];
  nextPageUrl: string | null;
};

type ApiBuilderFn = (filterSlug: string) => string;

export function usePaginatedFilterData(
  apiBuilder: ApiBuilderFn = () => "",
  extractData: ExtractFn = () => ({ items: [], nextPageUrl: "" }),
  initialData?: any[],
  nextPageUrl?: string | null
) {
  const [dataItems, setDataItems] = useState<any[]>([]);
  const [selectedFilterItem, setSelectedFilterItem] = useState<string | null>(null);
  const [loadMoreUrl, setLoadMoreUrl] = useState<string | null>(null);

  const { GetData } = useHTTP();

  useEffect(() => {
    if (Array.isArray(initialData)) {
      setDataItems(initialData);
      setLoadMoreUrl(nextPageUrl ?? null);
    } else {
      setDataItems([]);
    }
  }, []);

  useEffect(() => {
    getDataByFilter();
  }, [selectedFilterItem]);

  const filterItemClickHandler = ({ item }: { item: any }) => {
    setSelectedFilterItem(item?.slug || null);
  };

  const getDataByFilter = async () => {
    if (!selectedFilterItem) return;
    const response = await GetData({ api: apiBuilder(selectedFilterItem) });
    const { items, nextPageUrl } = extractData(response);
    setDataItems(items);
    setLoadMoreUrl(nextPageUrl);
  };

  const getNextPageData = async () => {
    if (!loadMoreUrl) return;
    const response = await GetData({ api: loadMoreUrl });
    const { items, nextPageUrl } = extractData(response);
    setDataItems(prev => [...prev, ...items]);
    setLoadMoreUrl(nextPageUrl);
  };

  return {
    dataItems,
    loadMoreUrl,
    selectedFilterItem,
    filterItemClickHandler,
    getNextPageData,
    getDataByFilter,
  };
}