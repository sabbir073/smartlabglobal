interface IPageSectionData {
  title: string;
  subtitle: string;
  headline: string;
  icon?: StaticImageData;
  slug: string;
  excerpt: string;
  cover: StaticImageData;
  video: string;
  coverSd: StaticImageData;
  thumb: StaticImageData;
  thumbSd: StaticImageData;
  items: ISectionItem[];
}

interface ISectionItem {
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  content: string;
  description: string;
  tag?: string;
  category?: string | { slug: string, title: string };
  order?: number;
  icon?: StaticImageData;
  icon_dark?: StaticImageData;
  iconHover?: StaticImageData;
  icon_darkHover?: StaticImageData;
  cover: StaticImageData;
  coverSd: StaticImageData;
  thumb: StaticImageData;
  thumbSd: StaticImageData;
  lightLogo: StaticImageData;
  lightLogoSd: StaticImageData;
  darkLogo: StaticImageData;
  darkLogoSd: StaticImageData;
  location?: string;
}
