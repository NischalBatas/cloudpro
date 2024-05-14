import Image from 'next/image'
import React from 'react'

const FooterLogo = () => {
  return (
    <div className='mt-[20px] md:mt-[53.72px]'>
        <Image className='mx-auto' width={1260} height={160} src='/Image/footerIcon/5.svg' alt='footer_logo'/>
    </div>
  )
}

export default FooterLogo