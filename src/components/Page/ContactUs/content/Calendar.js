"use client"
import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Calendar = () => {
	useEffect(()=>{
        (async function () {
          const cal = await getCalApi({});
          cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

   
  return (
    <>
     <Cal 
    calLink="cloudproai-contact/15min"
    style={{width:"65%",height:"320px",overflow:"scroll"}}
    config={{layout: 'month_view'}}
  
    
  /></>
  )
}

export default Calendar