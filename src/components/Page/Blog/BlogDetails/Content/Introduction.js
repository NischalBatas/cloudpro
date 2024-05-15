import React from 'react'
import { TbArrowBackUp } from "react-icons/tb";
const Introduction = () => {
  return (
    <div className="navbar-main py-28">
      <div className="main-container h-[550px] bg-black">
        <button className="flex items-center gap-3 text-[16px]">
          <TbArrowBackUp className="text-[24px]" />
          <span>Back</span>
        </button>
        <p className="max-w-[650px] pt-[22px] pb-[24px] text-[28px] md:text-[48px] font-semibold leading-[54px]">Exploring Alternative Data: A Beginner's Guide</p>
        <p className="max-w-[650px] text-[14px] leading-[24px]">
          Alternative data is like finding hidden treasures in unexpected places
          and resources. They are information collected from sources that are
          different from the usual ones everyone uses and retrieves.This kind
          can give us insights that regular sources might miss. can give us
          insights that regular sources might miss. But what counts as
          alternative data can change depending on the industry and what kind of
          data everyone else is using.
        </p>
        <div className="bg-[#202020] h-[1px] mt-[35px]"></div>
      </div>
    </div>
  )
}

export default Introduction