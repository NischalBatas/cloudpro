import DataWarehouse from '@/components/Page/Services/DataWarehouse/DataWarehouse'
import React from 'react'
import { introductiondataLakesWarehouses } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <DataWarehouse/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductiondataLakesWarehouses.image}`;

  return {
    title: introductiondataLakesWarehouses.title,
    description: introductiondataLakesWarehouses.description,
    // image: imageUrl,
    openGraph: {
      title: introductiondataLakesWarehouses.title,
      description: introductiondataLakesWarehouses.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductiondataLakesWarehouses.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductiondataLakesWarehouses.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductiondataLakesWarehouses.title,
      description: introductiondataLakesWarehouses.description,
      creator: introductiondataLakesWarehouses.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductiondataLakesWarehouses.title,
        },
      ],
    },
  };
}