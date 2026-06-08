import PrimaryButton from "@/components/common/button/PrimaryButton";
import NavLink from "@/components/common/link/NavLink";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading1 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import LayeredBanner from "@/components/sections/banner/LayeredBanner";
import routes from "@/config/routes";
import { StaticImageData } from "next/image";

type Props = {
  data: IPageSectionData;
};

export default function HeroSection({ data }: Props) {
  return (
    <LayeredBanner
      bgImage={data.cover}
      containerClassName="w-full md:aspect-[1920/819] aspect-auto"
      videoUrl={data?.video}
    >
      <ContentContainer className="flex flex-col sm:pb-24 pb-32 pt-14 lg:pt-24">
        <div className="md:mb-0 mb-24 ">
          <Heading1 className="font-medium font-poppins text-[#4D4D4F] dark:text-[#F4F4F4]">
            <SafeHtml content={data.headline} />
          </Heading1>
          <Content className="2xl:max-w-[27.24vw] lg:max-w-[35vw] md:max-w-[47vw]  max-w-[600px] lg:mb-[58px] mb-[30px]">
            <SafeHtml content={data.excerpt} />
          </Content>

          <NavLink href={routes.capabilities}>
            <PrimaryButton className="mb-40px ">
              {" "}
              Explore Our Services
            </PrimaryButton>
          </NavLink>
        </div>
      </ContentContainer>
    </LayeredBanner>
  );
}
