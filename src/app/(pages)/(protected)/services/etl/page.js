import ETL from '@/components/Page/Services/ETL/ETL'
import React from 'react'
import { introductionetl } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <ETL/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductionetl.image}`;

  return {
    title: introductionetl.title,
    description: introductionetl.description,
    // image: imageUrl,
    openGraph: {
      title: introductionetl.title,
      description: introductionetl.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductionetl.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductionetl.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductionetl.title,
      description: introductionetl.description,
      creator: introductionetl.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductionetl.title,
        },
      ],
    },
  };
}