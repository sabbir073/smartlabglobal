import SafeHtml from '@/components/common/safeHtml'
import { Content } from '@/components/common/typography'
import { cn } from '@/utils/helpers/cn'
import React from 'react'

type Props = {
  items: ISectionItem[]
  cardClassName?: string;
  containerClassName?: string;
}

const AtGlanceCards = ({ items, cardClassName,
  containerClassName }: Props) => {
  return (
    <div className={cn("flex md:flex-row flex-col gap-6", containerClassName)}>
      {items?.map((item, index) => (
        <div
          key={index}
          className={cn("dark:bg-[#414042] bg-[#FFFFFF] py-7 px-5 basis-1/4 ", cardClassName)}
        >
          {item?.title && <h4
            className="2xl:text-[18px] text-[14px]  text-[#414042] dark:text-[#F4F4F4] font-medium leading-[1.2] mb-4"
          >
            <SafeHtml content={item?.title} />
          </h4>}
          {item?.subtitle && <p className="lg:text-[30px] text-[24px] text-[#FF4306]">
            <SafeHtml content={item?.subtitle} />
          </p>}
          {item?.excerpt && <Content className="dark:text-[#D9D9D9] text-[#4D4D4F]" >
            <SafeHtml content={item?.excerpt} />
          </Content>}
        </div>
      ))}
    </div>
  )
}

export default AtGlanceCards