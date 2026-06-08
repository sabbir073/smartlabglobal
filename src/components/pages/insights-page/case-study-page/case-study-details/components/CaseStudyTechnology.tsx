import PrimaryButton from '@/components/common/button/PrimaryButton'
import SafeHtml from '@/components/common/safeHtml'
import { Content, Heading2 } from '@/components/common/typography'
import TopLeftSplitedBanner from '@/components/sections/banner/SplitedBanner/topLeftSplitedBanner'
import React from 'react'

type Props = {
  data: IPageSectionData;
  pdfLink?: string
}

const CaseStudyTechnology = ({ data, pdfLink }: Props) => {
  return (
    <TopLeftSplitedBanner bgImage={data?.cover}>
      <div className="section-pb">
        <Heading2 >
          <SafeHtml content={data?.headline} />
        </Heading2>
        <Content className="max-w-[400px] mb-12">
          <SafeHtml content={data?.excerpt} />
        </Content>
        <div className="flex justify-end ">
          <div className=" max-w-[500px] bg-[#414042] md:py-20 md:px-12 py-10 px-8 !text-white">
            <p className="md:text-lg text-sm">Case Study</p>
            <Heading2 className=" !text-white md:mt-[50px] md:mb-10 my-8 md:max-w-[90%]">
              <SafeHtml content={data?.title} />
            </Heading2>
            <PrimaryButton
              variant="outlined"
              className="border border-white !text-white hover:bg-[#F4F4F4] hover:!text-[#414042]"
              href={pdfLink}
              openInNewTab
            >
              Download
            </PrimaryButton>
          </div>
        </div>
      </div>
    </TopLeftSplitedBanner>
  )
}

export default CaseStudyTechnology