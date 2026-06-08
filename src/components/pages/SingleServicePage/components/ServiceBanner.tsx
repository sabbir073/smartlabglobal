"use client";
import PageBanner from "@/components/common/banner/PageBanner";

type Props = {
  data: IPageSectionData;
};
export default function ServiceBanner({ data }: Props) {
  return (
    <PageBanner data={data} />
    // <LayeredBanner bgImage={data?.cover} containerClassName="min-h-[26.04vw]" videoUrl={data?.video}>
    //   <ContentContainer className='flex flex-col justify-center py-16'>
    //     <div className='md:mb-0 mb-40 '>
    //       <Heading1 className='heading-1 md:max-w-[480px]'>
    //         <SafeHtml content={data.headline} />
    //       </Heading1>
    //       <Content className="2xl:max-w-[27.24vw] md:max-w-[480px]  max-w-[600px] mb-[2vw]">
    //         <SafeHtml content={data.excerpt} />
    //       </Content>
    //     </div>
    //   </ContentContainer>
    // </LayeredBanner>
  );
}
