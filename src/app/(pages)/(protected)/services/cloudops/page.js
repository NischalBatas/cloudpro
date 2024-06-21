import CloudOps from '@/components/Page/Services/CloudOps/CloudOps'
import React from 'react'
import { introductioncloudOps } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <CloudOps/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductioncloudOps.image}`;

  return {
    title: introductioncloudOps.title,
    description: introductioncloudOps.description,
    // image: imageUrl,
    openGraph: {
      title: introductioncloudOps.title,
      description: introductioncloudOps.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductioncloudOps.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/cloudops`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductioncloudOps.title,
      description: introductioncloudOps.description,
      creator: introductioncloudOps.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductioncloudOps.title,
        },
      ],
    },
  };
}