"use client"
import React from 'react'

const ImpactContent = ({content}) => {
  return (
    <div className="flex gap-2 flex-wrap lg:flex-nowrap justify-between">
    {content.data.map((item, index) => {
      return (
        <div key={index} className="testominal max-w-44 md:max-w-64 py-2 md:p-1">
          <div className="text-2xl md:text-4xl font-semibold flex gap-1 items-end"><div className="text-[40px]">{item.ratio}</div>%</div>
          <div className="mt-2 md:mt-4 text-[14px]">
            <span className="font-medium capitalize mr-1">{item.status}</span>
            <span className="text-[#5B5B5B]">{item.description}</span>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default ImpactContent