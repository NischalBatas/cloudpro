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
  const [open, setOpen] = useState(false);
  const router=useRouter()

  const handleClick=(path)=>{
    router.push(path)
  }
  return (
    <Collapsible.Root className="height_content_main" open={open} onOpenChange={setOpen}>
    <div className='mobile_menu_link flex justify-between items-center'>
      <span className="">
       Services
      </span>
      <Collapsible.Trigger asChild>
        <button className="">{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
      </Collapsible.Trigger>
    </div>

    <Collapsible.Content className='overflow-y-scroll height_content'>
      <div className="text-[#D7D7D7] text-[14px]">
        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/generativeai'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/alconsulting'>AI Consulting</Link>
          </div>
        </div>


        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Cloud Engineering</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/architecture'>Architecture Consulting</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/infrastructure'>Infrastructure migration and upgrades</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/generativeapplication'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/bigdata'>Big Data Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Data Engineering</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/services/etl'>ETL Services</Link>
                <Link className="mobile_menu_features"  href='#'>Data Analytics</Link>
                <Link className="mobile_menu_features"  href='#'>Data Lakes and Warehouses</Link>
                <Link className="mobile_menu_features"  href='#'>Data Mining Solutions</Link>
                <Link className="mobile_menu_features"  href='#'>Data Security and Goverance</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>BI & Data Analytics</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>BI Report and Dashboard</Link>
                <Link className="mobile_menu_features" href='#'>Ad-Hoc Reporting Solutions</Link>
                <Link className="mobile_menu_features" href='#'>Data Visualization Solution</Link>
          </div>
        </div>




        

      
        
      </div>
     
    </Collapsible.Content>
  </Collapsible.Root>




  )
}

export default MobileMenu