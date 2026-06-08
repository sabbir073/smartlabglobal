import GlobalWayPageComponent from '@/components/pages/career/globalway'
import api from '@/config/api/apiList';
import { get } from '@/lib/metadata/fetch';
import { GetMetaData } from '@/lib/metadata/getMetaData';
import { Metadata } from 'next';
import React from 'react'

type Props = {}

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await GetMetaData({
      url: api.page.globalWay,
      siteUrl: `/career/the-smart-lab-way`,
    });
  } catch (error) {
    throw new Error("Error loading the-smart-lab-way meta data");
  }
}

const page = async (props: Props) => {
  const data: any = await get(api.page.globalWay);
  return (
    <div>
      <GlobalWayPageComponent data={data?.data} />
    </div>
  )
}

export default page