import IndustryDetailsPageComponent from '@/components/pages/industryDetails'
import api from '@/config/api/apiList'
import { get } from '@/lib/metadata/fetch'
import { GetMetaData } from '@/lib/metadata/getMetaData'
import { Metadata } from 'next'
import React from 'react'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug}= params
  try {
    return await GetMetaData({
      url: api.page.industryDetails(slug),
      siteUrl: `/industries/${slug}`,
    });
  } catch (error) {
    throw new Error("Error loading industries child meta data");
  }
}

// const page = async ({ params }: Props) => {
//   const slug = params.slug
//   // const data: any = await get(api.page.dummy.industryDetails);
//   const data: any = await get(api.page.industryDetails(slug));
//   return (
//     <div>
//       <IndustryDetailsPageComponent slug={slug} data={data?.data} />
//     </div>
//   )
// }

// export default page


const page = async ({ params }: Props) => {
  const { slug } = params;

  try {
    const res: any = await get(api.page.industryDetails(slug));
    const data = res?.data;

    // If no data is returned, throw an error to trigger error.tsx
    if (!data) {
      throw new Error("Industry details not found");
    }

    return (
      <div>
        <IndustryDetailsPageComponent slug={slug} data={data} />
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching industry details:", error);
    // Throw to trigger Next.js App Router error page
    throw new Error("Failed to load industry details");
  }
};

export default page;