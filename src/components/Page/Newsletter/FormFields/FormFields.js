"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./newsletter.css";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Loading from "./Loading";
const FormFields = () => {
  const [loading, setLoading] = useState(false); // Add loading state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangePhone = (value) => {
    setFormData(prevState => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const res =await fetch(`${process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      if (res.status === 200) {
        // alert("Sent Successfully, We will get back to you soon.");
        toast.success('Thank you for reaching out! We will get back to you shortly.');

        // Reset the formData fields
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          company: "",
          position: "",
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));

      }
    } catch (error) {
      console.log("Please try again.", error);
      toast.error("Please try again.");

    }finally {
      setLoading(false); // Set loading to false after submission
    }
  };
  return (
   <>
   {!loading ?
    <Form.Root className="FormRoot2   md:max-w-[500px]" onSubmit={handleSubmit}>
    <Form.Field className="FormField2" name="Your full name">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Your Full Name</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your full name
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid full name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          value={formData.fullName}
          name="fullName"
          onChange={handleChange}
          className="Input"
          type="text"
          required
          placeholder="Enter your Full Name"
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField2" name="email">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="Input"
          type="email"
          required
          placeholder="Enter your Email"
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField2" name="Company">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Company</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your Company
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          value={formData.company}
          name="company"
          onChange={handleChange}
          className="Input"
          type="text"
          required
          placeholder="Enter your Company Name"
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField2" name="Position">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Position</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your position
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          value={formData.position}
          name="position"
          onChange={handleChange}
          className="Input"
          type="text"
          required
          placeholder="Enter your Current Position"
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="phonenumber">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel"> Phone Number</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Enter the Phone Number
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid number
            </Form.Message>
          </div>
 
          <PhoneInput
             country={'us'}
              value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleChangePhone}
              className="text-black bg-black"
              // type="tel"
      
              // placeholder="Enter your Phone Number"
            />
        
        </Form.Field>

   <div>
   <Form.Submit asChild>
      <button
        type="submit"
        className="Button4 "
        style={{ marginTop: 5 }}
      >
        SUBSCRIBE
      </button>
    </Form.Submit>

   
      <p className="mt-4 text-[14px] leading-[19px] text-[#878787] italic">
      Your information will only be used for personalization purposes and
      sharing you the contents produced by Cloudpro AI. You can unsubscribe
      anytime.
    </p>
   </div>

  </Form.Root> :<Loading/>}
   </>
  );
};

export default FormFields;
