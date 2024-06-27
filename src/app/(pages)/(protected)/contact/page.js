"use client"
import ContactUs from '@/components/Page/ContactUs/ContactUs'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <ContactUs/>
        </Suspense>
    </div>
  )
}

export default page

// export async function generateMetadata(){
//   const imageUrl =  "https://www.cloudpro.ai//Image/footerIcon/Man.png";

//   return {
//     title: "Contact Us",
//     description: "At Cloud Pro AI, we are driven by a passion for innovation and a commitment to empowering businesses through cutting-edge cloud solutions. Our journey began with a vision to redefine the landscape of artificial intelligence and data engineering, providing our clients with unparalleled services that propel them toward success. With a dedicated team of experts, we navigate the complexities of cloud architecture, data lakes, and machine learning to deliver comprehensive solutions tailored to meet the unique needs of each client. We pride ourselves on fostering a culture of excellence, continuous learning, and client-centricity. At Cloud Pro AI, we don't just provide services; we forge partnerships, turning visions into reality and aspirations into achievements. Join us on a transformative journey where the possibilities are limitless, and the future is powered by innovation.",
//     // image: imageUrl,
//     openGraph: {
//       title: "Contact Us",
//       description: "At Cloud Pro AI, we are driven by a passion for innovation and a commitment to empowering businesses through cutting-edge cloud solutions. Our journey began with a vision to redefine the landscape of artificial intelligence and data engineering, providing our clients with unparalleled services that propel them toward success. With a dedicated team of experts, we navigate the complexities of cloud architecture, data lakes, and machine learning to deliver comprehensive solutions tailored to meet the unique needs of each client. We pride ourselves on fostering a culture of excellence, continuous learning, and client-centricity. At Cloud Pro AI, we don't just provide services; we forge partnerships, turning visions into reality and aspirations into achievements. Join us on a transformative journey where the possibilities are limitless, and the future is powered by innovation.",
//       images: [
//         {
//           url: imageUrl, // Must be an absolute URL
//           width: 200,
//           height: 200,
//           alt: "Contact Us",
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//       url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/contact?action=message`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Contact Us",
//       description: "At Cloud Pro AI, we are driven by a passion for innovation and a commitment to empowering businesses through cutting-edge cloud solutions. Our journey began with a vision to redefine the landscape of artificial intelligence and data engineering, providing our clients with unparalleled services that propel them toward success. With a dedicated team of experts, we navigate the complexities of cloud architecture, data lakes, and machine learning to deliver comprehensive solutions tailored to meet the unique needs of each client. We pride ourselves on fostering a culture of excellence, continuous learning, and client-centricity. At Cloud Pro AI, we don't just provide services; we forge partnerships, turning visions into reality and aspirations into achievements. Join us on a transformative journey where the possibilities are limitless, and the future is powered by innovation.",
//       creator: "Contact Us",
//       images: [
//         {
//           url: imageUrl, // Must be an absolute URL
//           alt: "Contact Us",
//         },
//       ],
//     },
//   };
// }