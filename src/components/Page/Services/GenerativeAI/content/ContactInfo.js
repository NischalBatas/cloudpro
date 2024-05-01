import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <div className="bg-[#6083F3] pb-16 relative h-96">
      <div
        className="w-full absolute bg-no-repeat bg-center overflow-visible"
        style={{
          backgroundImage: "url('/Image/process/generativeapp/cloud14.svg')",
          height: "342.5px"
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4">
      <div className="main-container flex flex-col justify-center h-full">
        <div className="max-w-96 text-white text-2xl font-medium">
        Discover more ways our team can help.
        </div>
        <div className="flex items-center gap-3 lg:w-96 mt-4">
            <button className="bg-black text-white shadow-2xl px-2 py-1 rounded font-medium">
              Contact Us
            </button>
            <span className="flex gap-1 text-white">
              Book a Free Call <MdOutlineArrowOutward />
            </span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default ContactInfo