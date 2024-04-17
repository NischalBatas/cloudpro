import React from "react";
import { industries } from "@/db/industries";
const Industries = () => {
  return (
    <div className="navbar-main bg-cloud1 text-white py-10 mt-8">
      <p className="text-2xl font-semibold">Industries</p>
      <p className="text-cloud2 text-sm w-4/12 py-2">
        We bring cloud and data best practices to our customers so they can
        focus on what they do best—not how they get there
      </p>
      <div className="flex justify-between gap-4 my-5">
        {industries.map((item,index)=>{
            return(
                <div key={index} style={{width:'190px',height:'190px'}} className="bg-cloud5 flex flex-col justify-center p-2 rounded-md">
                    <div className="text-9xl">{item.icon}</div>
                    <div className="flex justify-end text-cloudBtn">{item.title}</div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Industries;
