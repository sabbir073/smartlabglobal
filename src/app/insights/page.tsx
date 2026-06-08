
import InsightsPage from '@/components/pages/insights-page/landing-page';
import api from '@/config/api/apiList';
import { get } from '@/lib/metadata/fetch';
import { GetMetaData } from '@/lib/metadata/getMetaData';
import { Metadata } from 'next';
import React from 'react'

type Props = {}

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.insights,
      siteUrl: `/insights`,
    });
  } catch (error) {
    throw new Error("Error loading insights meta data");
  }
}

const Insights = async (props: Props) => {
  const data: any = await get(api.page.insights);
  return (
    <div>
      <InsightsPage data={data?.data} />
    </div>
  )
}

export default Insights