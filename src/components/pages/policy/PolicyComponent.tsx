'use client'
import SafeHtml from '@/components/common/safeHtml'
import ContentContainer from '@/components/layout/container/contentContainer'
import api from '@/config/api/apiList'
import useHTTP from '@/hooks/useHTTP'
import React, { useEffect, useState } from 'react'

type Props = {
  slug: string
}

const PolicyComponent = ({ slug }: Props) => {
  const [data, setData] = useState<any>()

  const { GetData } = useHTTP()

  useEffect(() => {
    setData(null)
    getPolicyData()
  }, [slug])

  const getPolicyData = async () => {
    if (slug) {
      const response = await GetData({ api: api.page.policy(slug) })
      const content = response?.data?.data?.data?.excerpt
      if (content) {
        setData(content)
      }
    }
  }


  return (
    <ContentContainer className='py-16'>
      <SafeHtml content={data} />
    </ContentContainer>
  )
}

export default PolicyComponent