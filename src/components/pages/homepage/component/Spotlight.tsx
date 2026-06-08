import OverviewColumns from "@/components/common/cards/OverviewColumns";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import OverflowSectionWrapper from "@/components/sections/banner/OverflowSectionWrapper/OverflowSectionWrapper";
import { useCascadeSlideIn } from "@/hooks/gsap/useCascadeSlideIn";
import { useRef } from "react";
type Props = {
  data: IPageSectionData;
};
export default function SpotLight({ data }: Props) {
  const targetRef = useRef(null);
  useCascadeSlideIn({
    target: targetRef,
    x: -100,
    y: 0,
    duration: 1,
    stagger: 0.04,
  });
  return (
    <OverflowSectionWrapper
      WrapperClassName=""
      topBgClassName="bg-[#FFFFFF] dark:bg-[#1C1C1F]"
      bottomBgClassName=" h-[55%] lg:h-[30%] bg-[#E6E7E8] dark:bg-[#0D0D0D]"
    >
      <ContentContainer className="3xl:px-[16.20vw] 2xl:px-[14.75vw] xl:px-[8vw] lg:px-[3vw] px-5 h-full ">
        <div className=" mx-auto text-center  md:pt-[3vw]  pt-[20px]">
          <div className="mb-10">
            <Heading2 className="max-w-[655px]  mx-auto">
              {data.headline}
            </Heading2>
            <Content className="mx-auto max-w-[655px] ">
              <SafeHtml content={data.excerpt} />
            </Content>
          </div>

          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}

          {/* <div className="bg-[#414042] dark:bg-[#000000] relative">
            <div className="!text-[#F4F4F4] flex lg:flex-row flex-col z-10 px-5 lg:py-0 py-5">
              {data?.map((item: any, index: number) => (
                <div key={index} className="md:px-5 md:py-[74px] py-[25px] lg:w-[20%] flex flex-col items-center lg:border-r border-b lg:border-b-0 last:border-none border-[#E6E7E85C]">
                  <h3 className="lg:text-[1.88vw] text-[25px] w-max text-nowrap font-light">
                    {item?.title}
                  </h3>
                  <h5 className="font-light lg:text-[0.94vw] text-xs mb-4">
                    {item?.subtitle}
                  </h5>
                  <Content className="!text-[#F4F4F4] lg:!max-w-full mb-0 text-xs">
                    {item.content}
                  </Content>
                </div>
              ))}
            </div>
          </div> */}

          <span ref={targetRef}>
            <OverviewColumns
              data={data?.items.map((item: any, index: number) => ({
                title: item?.title,
                subtitle: item?.subtitle,
                content: item?.excerpt,
              }))}
              cardClassName="md:px-5 md:py-[74px] py-[25px] lg:w-[20%] flex flex-col items-center lg:border-r border-b lg:border-b-0 last:border-none border-[#E6E7E85C] dark:bg-black "
              titleClassName="lg:text-[1.88vw] md:text-[2vw] text-[6.6vw] w-max text-nowrap font-light font-inter mb-1"
              subtitleClassName="!text-[#F4F4F4] lg:text-[0.94vw] text-xs mb-6 font-light font-inter"
              contentClassName="!text-[#F4F4F4] font-normal lg:!max-w-full mb-0  text-[10px] md:text-sm leading-6"
            />
          </span>
        </div>
      </ContentContainer>
    </OverflowSectionWrapper>
  );
}
