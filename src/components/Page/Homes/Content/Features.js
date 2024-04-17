import React from "react";
import { features } from "@/db/features";
import Image from "next/image";
const Features = () => {
  return (
    <div className="navbar-main bg-cloudbg2 flex flex-wrap gap-6 pb-10">
      {features.map((item, index) => {
        return (
          <div key={index} className="bg-white px-2 py-1 rounded-md flex items-center gap-2 border">
            <div>{item.icons}</div>
            <div className="font-medium text-sm">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
