import ExpandableContent from '@/components/common/expandableContent'
import { Heading2 } from '@/components/common/typography'
import ContentContainer from '@/components/layout/container/contentContainer'
import React from 'react'

type Props = {
  data: IPageSectionData
}

const CaseStudyOverView = ({ data }: Props) => {
  return (
    <ContentContainer className='section-py'>
      <div className="flex md:flex-row flex-col ">
        <Heading2 className="md:w-[50%] w-full md:!mb-0 mb-5">
          Overview
        </Heading2>
        <ExpandableContent className="md:w-[50%] w-full">
          {data?.excerpt}
        </ExpandableContent>
      </div>
    </ContentContainer>
  )
}

export default CaseStudyOverView