import { Content, Heading2 } from '@/components/common/typography'
import ContentContainer from '@/components/layout/container/contentContainer'
import React from 'react'
import CarouselComponent from '@/components/common/slider/slider'
import ImageComponent from '@/components/common/image'
import SafeHtml from '@/components/common/safeHtml'
import { cn } from '@/utils/helpers/cn'
import HoverRevealCard from '@/components/common/cards/HoverRevealCard'
type Props = {
  data: IPageSectionData;
  containerClassName?: string;
  cardClassName?: string;

}
const ServiceTalentPool = ({ data, cardClassName, containerClassName }: Props) => {
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
              <HoverRevealCard
                key={index}
                banner={service.cover}
                title={service.title}
                content={service.excerpt}
                className='bg-black/50 aspect-[390/400]  w-full '
              />

            ))}
          </CarouselComponent>
        </ContentContainer>
      </div>
    </div>
  )
}

export default ServiceTalentPool;
