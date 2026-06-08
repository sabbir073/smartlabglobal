import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import useHTTP from "./useHTTP";
import api from "@/config/api/apiList";
import { setFetchedStatus, setNavigation } from "@/store/slices/navigationSlice";

export default function useNavigationData() {
  const { GetData } = useHTTP();
  const { dataFetched, header, footer } = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!dataFetched) {
      getNavigationData();
    }
  }, [header])


  const getNavigationData = async () => {
    const res = await GetData({ api: api.navigation });
    const items = res?.data?.data?.data
    if (Array.isArray(items)) {
      const header: IHeaderSection = items.find((item: any) => item.slug === "header");
      const footer: IFooterSection = items.find((item: any) => item.slug === "footer");

      dispatch(setNavigation({ header, footer }));
      dispatch(setFetchedStatus(true));
    }

  };

  return { navigation: { header, footer }, getNavigationData }
}