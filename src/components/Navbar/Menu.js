import React from 'react'
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
import Image from 'next/image';

const Menu = ({title,pathname}) => {
  return (
    <NavigationMenu.Item>
    <NavigationMenu.Trigger className={`NavigationMenuTrigger NavigationMenuTrigger2 ${pathname==='/services/generativeapp' ? 'active-menu' :''}`}>
      {title} <IoIosArrowDown className="CaretDown" aria-hidden />
    </NavigationMenu.Trigger>
    <NavigationMenu.Content className="NavigationMenuContent navbar-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-5  px-0 py-6 gap-2">
        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/whiteicon/1.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
              Artificial Intelligence
            </div>
            <ul className="flex flex-col gap-3 text-[#ABABAB] text-sm">
              <NavigationMenu.Link  className={`menu-item-list ${pathname==='/services/generativeai' ? 'active-menu' :''}`} href="/services/generativeai">Generative AI</NavigationMenu.Link >
              <NavigationMenu.Link  className={`menu-item-list ${pathname==='/services/alconsulting' ? 'active-menu' :''}`} href="/services/alconsulting">AI Consulting</NavigationMenu.Link >
            
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/whiteicon/3.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Cloud Engineering
            </div>
            <ul className="flex flex-col gap-3 text-[#ABABAB] text-sm">
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/architecture' ? 'active-menu' :''}`} href="/services/architecture">Architecture Consulting</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/cloudops' ? 'active-menu' :''}`} href="/services/cloudops">Cloud Ops</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/infrastructure' ? 'active-menu' :''}`} href="/services/infrastructure">Infrastructure migration and upgrades</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/bigdata' ? 'active-menu' :''}`} href="/services/bigdata">Big Data Consulting</NavigationMenu.Link>
            </ul>
          </div>
        </div>


        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/whiteicon/2.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Data Engineering
            </div>
            <ul className="flex flex-col gap-3 text-[#ABABAB] text-sm">
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/etl' ? 'active-menu' :''}`} href="/services/etl">ETL Services</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/dataanalytics' ? 'active-menu' :''}`} href="/services/dataanalytics">Data Analytics</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/datawarehouse' ? 'active-menu' :''}`} href="/services/datawarehouse">Data Lakes and Warehouses</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/datasolutions' ? 'active-menu' :''}`} href="/services/datasolutions">Data Pipeline Solutions</NavigationMenu.Link>
            </ul>
          </div>
        </div>


        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/whiteicon/4.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            BI & Data Analytics
            </div>
            <ul className="flex flex-col gap-3 text-[#ABABAB] text-sm">
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/bireport' ? 'active-menu' :''}`} href="/services/bireport">BI Report and Dashboard</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/adhoc' ? 'active-menu' :''}`} href="/services/adhoc">Ad-Hoc Reporting Solutions</NavigationMenu.Link>
              <NavigationMenu.Link className={`menu-item-list ${pathname==='/services/datavisual' ? 'active-menu' :''}`} href="/services/datavisual">Data Visualization Solution</NavigationMenu.Link>
            </ul>
          </div>

          

        </div>

        <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Products
            </div>
            <ul className="flex gap-3 text-[#ABABAB] text-sm justify-between">
          <NavigationMenu.Link href='https://docchat.cloudpro.ai/'> <Image width={220} height={220} src='/Image/navbar/docchat.svg' alt='product_image'/></NavigationMenu.Link>
          <NavigationMenu.Link href='https://zales.cloudpro.ai/'> <Image width={220} height={220} src='/Image/navbar/zales.svg' alt='product_image'/></NavigationMenu.Link>

            </ul>
          </div>
        </div>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  )
}

export default Menu