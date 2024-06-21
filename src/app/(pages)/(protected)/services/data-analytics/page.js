import Dataanalytics from '@/components/Page/Services/dataanalytics/Dataanalytics'
import React from 'react'
import { introductiondataAnalytics } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <Dataanalytics/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductiondataAnalytics.image}`;

  return {
    title: introductiondataAnalytics.title,
    description: introductiondataAnalytics.description,
    // image: imageUrl,
    openGraph: {
      title: introductiondataAnalytics.title,
      description: introductiondataAnalytics.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductiondataAnalytics.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductiondataAnalytics.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductiondataAnalytics.title,
      description: introductiondataAnalytics.description,
      creator: introductiondataAnalytics.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductiondataAnalytics.title,
        },
      ],
    },
  };
}