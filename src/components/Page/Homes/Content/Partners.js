"use client";
import { partners } from "@/db/partners";
import Image from "next/image";
import React, { useState } from "react";

const Partners = () => {
  return (
    <div className="navbar-main flex items-center justify-between bg-white py-3 px-2">
      {partners.map((item, index) => {
        return (
          <div key={index}>
            <Image width={50} height={50} src={item.image}alt={`Partner ${index}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
