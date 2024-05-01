import React from 'react'
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
import Link from 'next/link';
import Image from 'next/image';

const Menu = ({title}) => {
  return (
    <NavigationMenu.Item>
    <NavigationMenu.Trigger className="NavigationMenuTrigger NavigationMenuTrigger2">
      {title} <IoIosArrowDown className="CaretDown" aria-hidden />
    </NavigationMenu.Trigger>
    <NavigationMenu.Content className="NavigationMenuContent navbar-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  px-0 py-6 gap-2">
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
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
              Artificail Intelligence
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className="menu-item-list" href="/generativeapp">LLM Powered Applications</Link>
              <Link className="menu-item-list" href="/">Generative AI</Link>
              <Link className="menu-item-list" href="/">AI Consulting</Link>
            
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
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Cloud Engineering
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className="menu-item-list" href="/">Architecture Consulting</Link>
              <Link className="menu-item-list" href="/">Cloud Ops</Link>
              <Link className="menu-item-list" href="/">Infrastructure migration and upgrades</Link>
              <Link className="menu-item-list" href="/">Security & Governancce</Link>
              <Link className="menu-item-list" href="/">Big Data Consulting</Link>
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
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            Data Engineering
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className="menu-item-list" href="/">ETL Services</Link>
              <Link className="menu-item-list" href="/">Data Analytics</Link>
              <Link className="menu-item-list" href="/">Data Lakes and Warehouses</Link>
              <Link className="menu-item-list" href="/">Data Mining Solutions</Link>
              <Link className="menu-item-list" href="/">Data Security and Goverance</Link>
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
            <div className="navbar-menu-title font-semibold text-base py-2 pb-3">
            BI & Data Analytics
            </div>
            <ul className="flex flex-col gap-3 text-cloud10 text-sm">
              <Link className="menu-item-list" href="/">BI Report and Dashboard</Link>
              <Link className="menu-item-list" href="/">Ad-Hoc Reporting Solutions</Link>
              <Link className="menu-item-list" href="/">Data Visualization Solution</Link>
              <Link className="menu-item-list" href="/"></Link>
              <Link className="menu-item-list" href="/"></Link>
            </ul>
          </div>
        </div>
        </div>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  )
}

export default Menu