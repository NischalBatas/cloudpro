import React from 'react'
import FooterContent from './FooterContent'
import FooterCopyRight from './FooterCopyRight'
import Contact from '../Contact'

const Footer = () => {
  return (
    <div className="navbar-main bg-cover text-white py-10" style={{backgroundImage:"url('/Image/results/Rectangle686.png')"}}>
        <Contact/>
        <div className='w-full bg-cloud3' style={{height:'1px'}}></div>
        <FooterContent/>
        <div className='w-full bg-cloud3' style={{height:'1px'}}></div>

        <FooterCopyRight/>
    </div>
  )
}

export default Footer