import ContactUs from '@/components/Page/ContactUs/ContactUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactUs/>
  
    </div>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title:"Contact Us",
  }
}