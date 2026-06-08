import { Content, Heading2 } from "@/components/common/typography";
import SustainableBg from "@/assets/images/dummy/home/sustainable-bg.png";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import BottomLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/bottomLeftSplitedBanner";
import SafeHtml from "@/components/common/safeHtml";
import routes from "@/config/routes";

type Props = {
  data: IPageSectionData;
};

export default function SustainableFuture({ data }: Props) {
  return (
    <BottomLeftSplitedBanner bgImage={SustainableBg}>
      <div className="md:mt-0 mt-24 ">
        <Heading2 className="capitalize">
          <SafeHtml content={data.headline} />
        </Heading2>
        <Content className="mb-[10px] lg:mb-[38px] flex">
          {data?.items?.slice(0, 2).map((item: any, index: number) => (
            <div
              key={index}
              className={`flex gap-4 pr-[4%] ${
                index === 0
                  ? "border-r-[2px] border-[#41404233] dark:border-[#FFFFFF33]"
                  : ""
              } ${index === 1 ? "pl-[4%]" : ""}`}
            >
              <div className="w-full max-w-[250px]">
                <p className="text-[24px] lg:text-[30px]">{item.title}</p>
                <p className="content-text">{item?.excerpt}</p>
              </div>
            </div>
          ))}
        </Content>

        <p className="content-text pt-4 mb-10 text-center md:text-start">
          {data?.excerpt}
        </p>

        <div className="flex justify-center lg:justify-start">
          <PrimaryButton className="md:mx-0 mx-auto" href={routes.about}>
            Meet Smart-Lab Global
          </PrimaryButton>
        </div>
      </div>
    </BottomLeftSplitedBanner>
  );
}
