import IndustriesDetail from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesDetail'
import React from 'react'

const page = (props) => {
  let slug = props.params.slug
  return (
    <div>
        <IndustriesDetail slug={slug}/>
    </div>
  )
}

export default page