import React from 'react'
import NewsletterForm from './NewsletterForm/NewsletterForm'
import CaseStudy from '../Homes/Content/CaseStudy'
import Product from '../Homes/Content/Product'
import Footer from '@/components/Footer/Footer'

const Newsletter = () => {
  return (
    <div className='pt-20'>
     <NewsletterForm/>
     <CaseStudy/>
     <Product/>
     <Footer/>
    </div>
  )
}

export default Newsletter