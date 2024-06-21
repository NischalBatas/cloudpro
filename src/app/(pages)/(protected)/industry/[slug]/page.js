import Footer from '@/components/Footer/Footer';
import CaseStudyContent from '@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent';
import Banner from '@/components/Page/Homes/Content/IndustriesDetail/Banner/Banner';
import IndustriesDetail from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesDetail'
import IndustriesService from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesService/IndustriesService';
import IndustriesServiceReason from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesServiceReasons/IndustriesServiceReason';
import IndustriesTab from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesTab/IndustriesTab';
import Introduction from '@/components/Page/Homes/Content/IndustriesDetail/Introduction/Introduction';
import Product from '@/components/Page/Homes/Content/Product';
import { industriesDetails } from "@/db/home/industriesDetail/industriesDetail";import React from 'react'

const page = (props) => {
  let slug = props.params.slug
  return (
    <div className="pt-16">
      {industriesDetails.filter(items=>items.slug == slug).map((item, index) => {
        return (
          <div key={index}>
            <IndustriesTab item={slug}/>
            <Introduction item={item}/>
            <IndustriesService item={item}/>
            <Banner item={item}/>
            <IndustriesServiceReason item={item.reasons}/>
            <CaseStudyContent />
            <Product />
            <Footer />
          </div>
        );
      })}
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
