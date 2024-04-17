import React from "react";
import "./Dropdown/dropdown.css";
import Dropdown from "./Dropdown/Dropdown";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="navbar-main flex justify-between items-center text-white bg-cloudNav p-3">
        {/* Logo */}
        <div>
          <span className="font-medium uppercase">Cloud</span>Pro.AI
        </div>

        {/* Navbar-menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2 text-sm font-medium gap-4">
            <li>
              <Dropdown />
            </li>
            <li>
              <Dropdown />
            </li>
            <li>
              <Dropdown />
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <button className="bg-cloudBtn text-cloudBtnText px-2 py-1 rounded">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
