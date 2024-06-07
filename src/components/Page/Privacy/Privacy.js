import React from 'react'
import Introduction from './Content/Introduction'
import Sidebar from './Content/Sidebar'
import PolicyInfo from './Content/PolicyInfo'
import Footer from '@/components/Footer/Footer'

const Privacy = () => {
  return (
    <div className='privacy_main_content z-[1]'>
        <Introduction/>
        <div className='text-[#000] relative navbar-main top-[18rem] md:top-[21rem] pb-[24rem]'>
            <div className='main-container  privacy_main_content_policy gap-6'>
            <Sidebar/>
            <PolicyInfo/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Privacy