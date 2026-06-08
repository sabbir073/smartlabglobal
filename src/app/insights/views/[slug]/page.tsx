import SchemaWrapper from "@/components/layout/schemaWrapper/SchemaWrapper";
import ViewsDetailsPage from "@/components/pages/insights-page/views-page/views-details";
import api from "@/config/api/apiList";
import { get } from "@/lib/metadata/fetch";
import { GetMetaData } from "@/lib/metadata/getMetaData";
import { getBlogJsonLd } from "@/lib/metadata/jsonLdSchemas/blogLd";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    return await GetMetaData({
      url: api.page.views,
      siteUrl: `/insights/views/${slug}`,
    });
  } catch (error) {
    throw new Error("Error loading insights/views child meta data");
  }
}

// export default async function ViewsDetails({ params }: Props) {
//   const { slug } = params;

//   const res: any = await get(api.page.viewsDetails(slug));
//   const blog = res?.data;

//   const jsonLd = getBlogJsonLd({
//     slug: `${blog.slug}`,
//     title: blog.description ?? blog.title,
//     description: blog.subtitle ?? blog.title,
//     datePublished: blog.published_at,
//     authorName: blog.author.name,
//   });

//   return (
//     <SchemaWrapper jsonLd={jsonLd}>
//       <ViewsDetailsPage data={res?.data} />
//     </SchemaWrapper>
//   );
// }

export default async function ViewsDetails({ params }: Props) {
  const { slug } = params;

  try {
    const res: any = await get(api.page.viewsDetails(slug));
    const blog = res?.data;

    if (!blog) {
      // Throw an error to trigger Next.js error boundary
      throw new Error("Blog not found");
    }

    const jsonLd = getBlogJsonLd({
      slug: `${blog.slug}`,
      title: blog.description ?? blog.title,
      description: blog.subtitle ?? blog.title,
      datePublished: blog.published_at,
      authorName: blog.author?.name ?? "",
    });

    return (
      <SchemaWrapper jsonLd={jsonLd}>
        <ViewsDetailsPage data={blog} />
      </SchemaWrapper>
    );
  } catch (error: any) {
    // Throwing the error triggers error.tsx
    console.error("Error fetching blog details:", error);
    throw new Error("Failed to load blog details");
  }
}
