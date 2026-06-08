interface ICaseStudy {
  title: string;
  subtitle: string | null;
  slug: string;
  excerpt: string | null;
  description: string | null;
  cover: string;
  coverSd: string | null;
  thumb: string | null;
  thumbSd: string | null;
}

interface IAdditional {
  excerpt: string;
  description: string | null;
  case_study: ICaseStudy[];
}

interface IChildItem {
  title: string;
  type: string;
  url: string;
}

interface IMenuItem {
  title: string;
  type: string;
  url: string;
  additional?: IAdditional;
  children?: IChildItem[];
}

interface IHeaderSection {
  name: "Header";
  slug: "header";
  items: IMenuItem[];
}

interface IFooterSection {
  name: "Footer";
  slug: "footer";
  items: IMenuItem[];
}

type INavigationSchema = {
  header: IHeaderSection;
  footer: IFooterSection;
};
type INavigationState = INavigationSchema & {
  dataFetched: boolean;
};
