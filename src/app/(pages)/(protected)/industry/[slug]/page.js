import IndustriesDetail from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesDetail'
import { industriesDetails } from "@/db/home/industriesDetail/industriesDetail";import React from 'react'

const page = (props) => {
  let slug = props.params.slug
  return (
    <div>
        <IndustriesDetail slug={slug}/>
    </div>
  )
}

export default page

export async function generateMetadata(props) {
  let slug = props.params.slug;
  const service = industriesDetails.find((item) => item.slug === slug);
  

  if (!service) {
    return {};
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${service.introduction.image}`;

  return {
    title: service.introduction.title,
    description: service.introduction.description,
    // image: imageUrl,
    openGraph: {
      title: service.introduction.title,
      description: service.introduction.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: service.introduction.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/industry/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: service.introduction.title,
      description: service.introduction.description,
      creator: service.introduction.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: service.introduction.title,
        },
      ],
    },
  };
}
