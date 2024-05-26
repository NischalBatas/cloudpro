import IndustriesDetail from '@/components/Page/Homes/Content/IndustriesDetail/IndustriesDetail'
import React from 'react'

const page = (props) => {
  let id = props.params.id
  return (
    <div>
        <IndustriesDetail id={id}/>
    </div>
  )
}

export default page