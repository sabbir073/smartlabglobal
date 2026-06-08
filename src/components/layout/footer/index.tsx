import { get } from "@/lib/metadata/fetch";
import FooterSection from "./components/FooterSection";
import api from "@/config/api/apiList";

type Props = {};

const Footer = async (props: Props) => {
  const { data }: any = await get(api.settings);

  return <FooterSection socialData={data} />;
};

export default Footer;
