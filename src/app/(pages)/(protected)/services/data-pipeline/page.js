import DataSolutions from '@/components/Page/Services/DataSolutions/DataSolutions'
import React from 'react'
import { introductiondataPipelineSolutions } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <DataSolutions/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductiondataPipelineSolutions.image}`;

  return {
    title: introductiondataPipelineSolutions.title,
    description: introductiondataPipelineSolutions.description,
    // image: imageUrl,
    openGraph: {
      title: introductiondataPipelineSolutions.title,
      description: introductiondataPipelineSolutions.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductiondataPipelineSolutions.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductiondataPipelineSolutions.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductiondataPipelineSolutions.title,
      description: introductiondataPipelineSolutions.description,
      creator: introductiondataPipelineSolutions.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductiondataPipelineSolutions.title,
        },
      ],
    },
  };
}