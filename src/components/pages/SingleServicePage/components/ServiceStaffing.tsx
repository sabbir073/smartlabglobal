import { Content, Heading2 } from '@/components/common/typography'
import ContentContainer from '@/components/layout/container/contentContainer'
import React from 'react'
import CarouselComponent from '@/components/common/slider/slider'
import ImageComponent from '@/components/common/image'
import SafeHtml from '@/components/common/safeHtml'
import { cn } from '@/utils/helpers/cn'
type Props = {
  data: IPageSectionData;
  containerClassName?: string;
  cardClassName?: string;

}
const ServiceStaffing = ({ data, cardClassName, containerClassName }: Props) => {
  return (
    <div className={cn('', containerClassName)}>
      <ContentContainer className=" md:text-left text-center md:pb-4 pb-16">
        <Heading2>
          <SafeHtml content={data.headline} />
        </Heading2>
        {data.excerpt && <Content className="max-w-[748px] md:mx-0 mx-auto md:mb-0 mb-[40px]">
          <SafeHtml content={data.excerpt} />
        </Content>}
      </ContentContainer>
      <div className=''>
        <ContentContainer >
          <CarouselComponent
            controlClassName=" "
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {data?.items?.map((service, index: number) => (
              // <SwiperSlide className="transition-all duration-[1500ms] ease-in-out" key={index}>
              <div
                className={` flex flex-col w-full h-auto`}
                key={index}
              >
                {/* <ImageComponent
                  src={service.cover}
                  alt={`service-${index}`}
                  className="object-cover w-full !aspect-[390/240] capability-bg  transform transition-all  duration-[1000ms] ease-in-out"
                /> */}
                <div className={cn('md:p-6 px-3 py-6 flex-1 ', cardClassName)}>
                  <p
                    className={`2xl:text-[18px] text-[14px] font-semibold leading-[1.66] transition-all  duration-[1000ms] ease-in-out overflow-hidden z-10 pb-8`}
                  >
                    <SafeHtml content={service.title} />
                  </p>
                  {/* <Content> */}
                  <SafeHtml className='' content={service.excerpt} />
                  {/* </Content> */}
                </div>

              </div>
            ))}
          </CarouselComponent>
        </ContentContainer>
      </div>
    </div>
  )
}

export default ServiceStaffing;
