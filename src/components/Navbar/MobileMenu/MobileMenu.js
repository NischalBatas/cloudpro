"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import './mobile.css'
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";
import * as Collapsible from '@radix-ui/react-collapsible';
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from 'next/navigation';

const MobileMenu = ({title,pathname,setNavbarStatus,setHamburger}) => {
  const [open, setOpen] = useState(true);
  const router=useRouter()

  const handleClick=(path)=>{
    router.push(path)
  }

  return (
    <Collapsible.Root className="height_content_main" open={open} onOpenChange={setOpen}>
    
      <Collapsible.Trigger asChild>
      <div className='mobile_menu_link flex justify-between items-center'>
      <span className="">
       Services
      </span>
        <button className="">{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
        </div>
      </Collapsible.Trigger>
 

    <Collapsible.Content className='overflow-y-scroll height_content'>
      <div className="text-[#D7D7D7] text-[14px]">
        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/generative-ai'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/ai-consulting'>AI Consulting</Link>
          </div>
        </div>


        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Cloud Engineering</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/cloud-architecture'>Architecture Consulting</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/cloudops'>Cloud Ops</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/infrastructure-migration'>Infrastructure migration and upgrades</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/big-data'>Big Data Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Data Engineering</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/etl'>ETL Services</Link>
                <Link className="mobile_menu_features"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}}  href='/services/data-analytics'>Data Analytics</Link>
                <Link className="mobile_menu_features"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}}  href='/services/data-warehouse'>Data Lakes and Warehouses</Link>
                <Link className="mobile_menu_features"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}}  href='/services/data-pipeline'>Data Pipeline Solutions</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>BI & Data Analytics</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/bi-reporting'>BI Report and Dashboard</Link>
                <Link className="mobile_menu_features"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/ad-hoc-reporting'>Ad-Hoc Reporting Solutions</Link>
                <Link className="mobile_menu_features"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/data-visualization'>Data Visualization Solution</Link>
          </div>
        </div>




        

      
        
      </div>
     
    </Collapsible.Content>
  </Collapsible.Root>




  )
}

export default MobileMenu