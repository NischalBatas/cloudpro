import React from 'react'
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
import Link from 'next/link';
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
              src="/Image/navbar_icon/ai.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
              Artificail Intelligence
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              {/* <Link className={`menu-item-list ${pathname==='/services/generativeapplication' ? 'active-menu' :''}`} href="/services/generativeapplication">LLM Powered Applications</Link> */}
              <Link className={`menu-item-list ${pathname==='/services/generativeai' ? 'active-menu' :''}`} href="/services/generativeai">Generative AI</Link>
              <Link className={`menu-item-list ${pathname==='/services/alconsulting' ? 'active-menu' :''}`} href="/services/alconsulting">AI Consulting</Link>
            
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/cloud.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Cloud Engineering
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className={`menu-item-list ${pathname==='/services/architecture' ? 'active-menu' :''}`} href="/services/architecture">Architecture Consulting</Link>
              <Link className={`menu-item-list ${pathname==='/services/cloudops' ? 'active-menu' :''}`} href="/services/cloudops">Cloud Ops</Link>
              <Link className={`menu-item-list ${pathname==='/services/infrastructure' ? 'active-menu' :''}`} href="/services/infrastructure">Infrastructure migration and upgrades</Link>
              <Link className={`menu-item-list ${pathname==='/services/bigdata' ? 'active-menu' :''}`} href="/services/bigdata">Big Data Consulting</Link>
            </ul>
          </div>
        </div>


        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/database.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Data Engineering
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className={`menu-item-list ${pathname==='/services/etl' ? 'active-menu' :''}`} href="/services/etl">ETL Services</Link>
              <Link className={`menu-item-list ${pathname==='/services/dataanalytics' ? 'active-menu' :''}`} href="/services/dataanalytics">Data Analytics</Link>
              <Link className={`menu-item-list ${pathname==='/services/datawarehouse' ? 'active-menu' :''}`} href="/services/datawarehouse">Data Lakes and Warehouses</Link>
              <Link className={`menu-item-list ${pathname==='/services/datasolutions' ? 'active-menu' :''}`} href="/services/datasolutions">Data Pipeline Solutions</Link>
            </ul>
          </div>
        </div>


        <div className="flex">
          <div className="rounded-md p-2">
            <Image className='min-w-[20px] '
              width={20}
              height={20}
              src="/Image/navbar_icon/cloud.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            BI & Data Analytics
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className={`menu-item-list ${pathname==='/services/bireport' ? 'active-menu' :''}`} href="/services/bireport">BI Report and Dashboard</Link>
              <Link className={`menu-item-list ${pathname==='/services/adhoc' ? 'active-menu' :''}`} href="/services/adhoc">Ad-Hoc Reporting Solutions</Link>
              <Link className={`menu-item-list ${pathname==='/services/datavisual' ? 'active-menu' :''}`} href="/services/datavisual">Data Visualization Solution</Link>
            </ul>
          </div>

          

        </div>

        <div>
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Products
            </div>
            <ul className="flex gap-3 text-cloud10 text-sm justify-between">
          <Link href='/'> <Image width={220} height={220} src='/Image/navbar/docchat.svg' alt='product_image'/></Link>
          <Link href='/'> <Image width={220} height={220} src='/Image/navbar/zales.svg' alt='product_image'/></Link>

            </ul>
          </div>
        </div>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  )
}

export default Menu