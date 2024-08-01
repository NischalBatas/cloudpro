"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./PopoutNewsForm/style.css";
import { usePathname, useRouter } from "next/navigation";
import { MailCheap } from "@/db/mailcheap";
import PopoutNewsForm from "./PopoutNewsForm/PopoutNewsForm";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NewsletterPopup = ({ contentType, contentTitle, contentCategory }) => {
  const [open,setOpen]=useState(false)
  // const [storageData,setStorageData]=useState(true)
  const router= useRouter()

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


      const handleFormSubmit=()=>{
        const getFormData=window.localStorage.getItem("UserFormDetails")
      if(getFormData){
        const parseData=JSON.parse(getFormData)
      if(parseData.EMAIL === ""){
          window.localStorage.setItem("UserFormDetails",JSON.stringify(formData))
      }
      }else{
        window.localStorage.setItem("UserFormDetails",JSON.stringify(formData))
      }
      router.push('/blog')
      }
 

    useEffect(() => {
      const getFormData = window.localStorage.getItem("UserFormDetails");
      if (getFormData) {
        const parseData = JSON.parse(getFormData);
        if (parseData.EMAIL === "") {
          const handleTimer = setTimeout(() => {
            setOpen(true);
          }, 3000);
          return () => clearTimeout(handleTimer);
        }
      } else {
        const handleTimer = setTimeout(() => {
          setOpen(true);
        }, 3000);
        return () => clearTimeout(handleTimer);
      }
    }, []);


  return (
   <>
   {open &&  <div className="relative newsletter_popup">
      <div
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        className=" fixed z-[999999] px-1  flex flex-col justify-center  bg-[#000000a2] backdrop-blur-[2px] w-full h-screen"
      >
       <div className="main-container bg-[#fff] px-4 py-[40px]  shadow-2xl  rounded-[6px]">
       <div className="flex flex-col    text-[#000] ">
          {/* <div className="flex justify-end  w-full">
            <button onClick={()=>setOpen(false)}>
              <IoClose className="text-[24px]" />
            </button>
          </div> */}
          <div className="flex justify-center items-center sm:justify-between  flex-wrap sm:flex-nowrap gap-2 ">
            <div>
              <Image
                width={500}
                height={500}
                src="/email2.svg"
                alt="email newslettter"
              />
            </div>
            <div className="sm:max-w-[60%] ">
              <div>
              <p className="text-[26px] sm:text-[32px]  font-semibold leading-tight tracking-tight">
                Sign Up For Our Newsletter
              </p>
              <p className="max-w-[450px] mt-2 text-[14px] text-[#929292]">
                Subscribe to our newsletter and stay upto date with the latest
                news, updates and exclusive offers. Get valuable insights.
              </p>
              </div>
              <div>
        <Form.Root onSubmit={handleFormSubmit} action='https://cloudpro.us22.list-manage.com/subscribe/post?u=433a51ee95aafec37792a952d&amp;id=ee16cacbcb&amp;f_id=008dd0e1f0' method="POST"
      className="FormRoot5  sm:pb-[12px] mt-[12px]"
     
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
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>}
   </>
  );
};

export default NewsletterPopup;
