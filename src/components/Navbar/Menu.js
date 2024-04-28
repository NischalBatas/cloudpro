import React from 'react'
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
import Link from 'next/link';
import Image from 'next/image';

const Menu = ({title}) => {
  return (
    <NavigationMenu.Item>
    <NavigationMenu.Trigger className="NavigationMenuTrigger">
      {title} <IoIosArrowDown className="CaretDown" aria-hidden />
    </NavigationMenu.Trigger>
    <NavigationMenu.Content className="NavigationMenuContent">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  px-6 py-16 gap-2">
        <div className="flex">
          <div className="rounded-md p-2">
            <Image
              width={20}
              height={20}
              src="/Image/navbar_icon/ai.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2">
              Artificail Intelligence
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link href="/">LLM Powered Applications</Link>
              <Link href="/">Generative AI</Link>
              <Link href="/">AI Consulting</Link>
            
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="rounded-md p-2">
            <Image
              width={20}
              height={20}
              src="/Image/navbar_icon/cloud.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2">
            Cloud Engineering
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link href="/">Architecture Consulting</Link>
              <Link href="/">Cloud Ops</Link>
              <Link href="/">Infrastructure migration and upgrades</Link>
              <Link href="/">Security & Governancce</Link>
              <Link href="/">Big Data Consulting</Link>
            </ul>
          </div>
        </div>


        <div className="flex">
          <div className="rounded-md p-2">
            <Image
              width={20}
              height={20}
              src="/Image/navbar_icon/database.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2">
            Data Engineering
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link href="/">ETL Services</Link>
              <Link href="/">Data Analytics</Link>
              <Link href="/">Data Lakes and Warehouses</Link>
              <Link href="/">Data Mining Solutions</Link>
              <Link href="/">Data Security and Goverance</Link>
            </ul>
          </div>
        </div>


        <div className="flex">
          <div className="rounded-md p-2">
            <Image
              width={20}
              height={20}
              src="/Image/navbar_icon/cloud.svg"
              alt="navbar_icon"
            />
          </div>

          <div>
            <div className="navbar-menu-title font-semibold text-base py-2">
            BI & Data Analytics
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link href="/">BI Report and Dashboard</Link>
              <Link href="/">Ad-Hoc Reporting Solutions</Link>
              <Link href="/">Data Visualization Solution</Link>
              <Link href="/"></Link>
              <Link href="/"></Link>
            </ul>
          </div>
        </div>
        </div>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  )
}

export default Menu