import React from "react";
import "./Dropdown/dropdown.css";
import Dropdown from "./Dropdown/Dropdown";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import Image from "next/image";
const Navbar = () => {
  const handleMenu = () => {
    const elements = document.getElementsByClassName('navbar-menu-list');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none" || elements[i].style.display === "") {
            elements[i].style.display = "flex";
        } else {
            elements[i].style.display = "none";
        }
    }
}
  return (
    <>
      <div className="navbar-main flex flex-col md:flex-row justify-between items-center text-white bg-cloudNav p-3">
        {/* Logo */}
        <div className="flex items-center justify-between w-full">
          <div><Link href='/'>
        
           <Image width={120} height={120} alt="company_logo" src='../../../Image/logo/company.svg'/>
           </Link>
          </div>
          <div className="navbar-menuBtn block md:hidden text-white navbar-hamburger">
            <RxHamburgerMenu onClick={handleMenu}/>
          </div>
        </div>

        {/* Navbar-menu */}
        <div className="navbar-menu-list">
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 items-center gap-2 text-sm font-medium gap-6">
            <li>
              <Dropdown title="Services" />
            </li>
            <li>
              <Dropdown title="Product" />
            </li>
            <li>
              <Dropdown title="CaseStudy" />
            </li>
            <li>
              <Link href="#">AboutUs</Link>
            </li>
            <li>
              <button className="bg-cloudBtn text-cloudBtnText px-2 py-1 rounded">
                ContactUs
              </button>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Navbar;
