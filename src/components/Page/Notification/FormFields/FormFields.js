"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./newsletter.css";

const FormFields = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res =await fetch(`${process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      if (res.status === 200) {
        alert("Sent Successfully, We will get back to you soon.");

        // Reset the formData fields
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          company: "",
          position: "",
        });
      }
    } catch (error) {
      console.log("Newsletter error:", error);
      alert("Can't send, please check and try again.",error);
    }
  };
  return (
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

      <Form.Field className="FormField2" name="phonenumber">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">
            Phone Number (Optional)
          </Form.Label>
     
        </div>
        <Form.Control asChild>
          <input
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            className="Input"
            type="number"
            placeholder="Enter your Phone Number"
          />
        </Form.Control>
      </Form.Field>

     <div>
     <Form.Submit asChild>
        <button
          type="submit"
          className="Button4 w-full bg-cloud"
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
  
    </Form.Root>
  );
};

export default FormFields;
