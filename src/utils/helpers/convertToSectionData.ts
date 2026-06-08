const convertToPageSectionData = (data: any) => {
  let dataItems = data?.items;

  if (data?.["paginate-items"]) {
    dataItems = data?.["paginate-items"]?.data;
  }

  if (!Array.isArray(dataItems)) {
    dataItems = [];
  }

  const obj: IPageSectionData = {
    title: data?.title ?? "",
    subtitle: data?.subtitle ?? "",
    headline: data?.description ?? data?.title ?? "",
    icon: data?.icon ?? "",
    slug: data?.slug ?? "",
    excerpt: data?.excerpt ?? "",
    cover: data?.cover ?? "",
    video: data?.video ?? "",
    coverSd: data?.coverSd ?? "",
    thumb: data?.thumb ?? "",
    thumbSd: data?.thumbSd ?? "",
    items: dataItems.map((item: any) => ({
      title: item?.title ?? "",
      subtitle: (item?.sub_title || item?.subtitle) ?? "",
      slug: item?.slug ?? "",
      excerpt: item?.excerpt ?? "",
      content: item?.content ?? "",
      tag: item?.tag ?? "",
      category: item?.category ?? "",
      order: item?.order ?? "",
      icon: item?.lightIcon ?? "",
      icon_dark: item?.darkIcon ?? "",
      iconHover: item?.lightHoverIcon ?? "",
      icon_darkHover: item?.darkHoverIcon ?? "",
      cover: item?.cover ?? "",
      coverSd: item?.coverSd ?? "",
      thumb: item?.thumb ?? "",
      thumbSd: item?.thumbSd ?? "",
      lightLogo: item?.lightLogo ?? "",
      lightLogoSd: item?.lightLogoSd ?? "",
      darkLogo: item?.darkLogo ?? "",
      darkLogoSd: item?.darkLogoSd ?? "",
      parent: item?.parent ?? {},
      end_date: item?.end_date ?? "",
      start_date: item?.start_date ?? "",
      location: item?.location ?? "",
      tags: item?.tags ?? ""
    })),
  };

  return obj;
};

export default convertToPageSectionData;
