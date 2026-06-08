import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
const Solution = ({ data }: any) => {
  return (
    <ContentContainer className="relative">
      <div className="  md:py-[80px] py-[50px] ">
        <ImageComponent
          src={data.cover}
          alt=""
          className="absolute top-0 left-0 h-full w-full -z-[2]"
        />
        <div className="absolute top-0 left-0 h-full w-full -z-[1] bg-[#000000E0]"></div>
        <Heading2 className=" mb-7 !text-[#ffffff]"> <SafeHtml content={data?.description} /> </Heading2>
        <Content className=" !text-[#ffffff] mb-6"> <SafeHtml content={data?.excerpt} /> </Content>
        <div className="py-10 flex flex-col lg:gap-[60px] gap-[32px] border-line">
          {data?.items.length > 0 &&
            data.items.map((item: any, index: number) => (
              <div
                key={item.order_index}
                className="flex lg:justify-between gap-8 lg:items-center"
              >
                <span className="z-10 w-[42px] h-[42px] text-white text-[12px] font-semibold leading-[1] bg-[#414141] flex justify-center items-center ">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="it-works-wrapper">
                  <h3 className="text-lg font-semibold text-white py-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-[#ECECEC] ">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default Solution;
