"use client";
import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
import { MailCheap } from "@/db/mailcheap";
const PopoutNewsForm = ({contentType,contentTitle,contentCategory}) => {
    const pathname=usePathname()

    console.log("slug title",contentType)
    const [formData, setFormData] = useState({
      FNAME: "",
      LName: "",
      EMAIL: "",
      contentType: contentType,
      contentTitle: contentTitle,
      contentCategory:contentCategory,
  
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
      const filterData=MailCheap.filter((item)=>item.name && contentType && item.name.toLowerCase() === contentType.toLowerCase());
      console.log("url",contentType,filterData)


      useEffect(()=>{
        const getFormData=window.localStorage.getItem("UserFormDetails")
        const parseData=JSON.parse(getFormData)
        if(parseData.EMAIL===""){
            window.localStorage.setItem("UserFormDetails",JSON.stringify(formData))
        }
      },[formData])

      

  return (
    <div>
        <Form.Root action='https://cloudpro.us22.list-manage.com/subscribe/post?u=433a51ee95aafec37792a952d&amp;id=ee16cacbcb&amp;f_id=008dd0e1f0' method="POST"
      className="FormRoot5 sm:pb-[32px] mt-[12px]"
     
    >
      <Form.Field className="FormField5" name="FNAME">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Your Full Name</Form.Label> */}
          <Form.Message className="FormMessage5" match="valueMissing">
            Please enter your first name
          </Form.Message>
          <Form.Message className="FormMessage5" match="typeMismatch">
            Please provide a valid first name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            value={formData.FNAME}
            name="FNAME"
            onChange={handleChange}
            className="Input5"
            type="text"
            required
            placeholder="Enter your First Name"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField5" name="LName">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Your Full Name</Form.Label> */}
          <Form.Message className="FormMessage5" match="valueMissing">
            Please enter your last name
          </Form.Message>
          <Form.Message className="FormMessage5" match="typeMismatch">
            Please provide a valid last name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            value={formData.LName}
            name="LName"
            onChange={handleChange}
            className="Input5"
            type="text"
            required
            placeholder="Enter your Last Name"
          />
        </Form.Control>
      </Form.Field>


      <Form.Field className="FormField5" name="EMAIL">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Email</Form.Label> */}
          <Form.Message className="FormMessage5" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage5" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            value={formData.EMAIL}
            name="EMAIL"
            onChange={handleChange}
            className="Input5"
            type="email"
            required
            placeholder="Enter your Email"
          />
        </Form.Control>
      </Form.Field>
      {filterData && filterData.length > 0 &&
        filterData.map((item, index) => (
          <div key={index}>
            <input type="hidden" name="tags" value={`${item.id ? item.id : ""},12960`} />
          </div>
        ))
      }
        

  

      <div>
        <Form.Submit asChild>
          <button type="submit" className="text-[#fff] text-[14px] font-semibold w-full text-center py-2 rounded-[6px] bg-[#000000] mt-[5px]">
            SUBSCRIBE
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
    </div>
  )
}

export default PopoutNewsForm