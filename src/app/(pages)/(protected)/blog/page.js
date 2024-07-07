import Blog from '@/components/Page/Blog/Blog'
import React from 'react'



const page = async() => {
  return (
    <div className=''>

            <Blog/>
    </div>
  )
}

export default page


export async function generateMetadata(){
  const imageUrl =  "https://www.cloudpro.ai/Image/logo/cloudprotheme.jpg";

  return {
    title: "Blogs",
    description: "We're prepared for the era of Generative AI and excited to collaborate. Let's evaluate your business and infrastructure to ensure you're ready for this significant technological advancement.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    openGraph: {
      title: "Blogs",
      description: "We're prepared for the era of Generative AI and excited to collaborate. Let's evaluate your business and infrastructure to ensure you're ready for this significant technological advancement.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Blogs",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Blogs",
      description: "We're prepared for the era of Generative AI and excited to collaborate. Let's evaluate your business and infrastructure to ensure you're ready for this significant technological advancement.",
      creator: "Blogs",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Blogs",
        },
      ],
    },
  };
}