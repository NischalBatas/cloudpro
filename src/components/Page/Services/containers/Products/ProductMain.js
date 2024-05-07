import React from 'react'
import ProductDetails from './ProductDetails'

const ProductMain = ({content}) => {
  return (
    <div className="navbar-main bg-white pt-10 py-28">
       <div className="main-container">
      <p className="font-bold text-[36px] max-w-[477px] text-black mb-8">
        {content.heading}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
       <ProductDetails content={content}/>
      </div>
      </div>
    </div>
  )
}

export default ProductMain