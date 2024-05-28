import React from 'react'
import NewsletterForm from './NewsletterForm/NewsletterForm'
import CaseStudy from '../Homes/Content/CaseStudy'
import Product from '../Homes/Content/Product'
import Footer from '@/components/Footer/Footer'

const Newsletter = () => {
  return (
    <div className='pt-14'>
     <NewsletterForm/>
     <div className='hidden md:block'>
     <CaseStudy/>
     <Product/>
     <Footer/>
      </div>
   
    </div>
  )
}

export default Newsletter