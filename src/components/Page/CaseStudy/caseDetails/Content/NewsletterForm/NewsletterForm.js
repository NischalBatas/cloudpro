"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
const NewsletterForm = () => {
  const pathanme=usePathname()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    url: pathanme,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Form Data ",formData)
      if (res.status === 200) {
        alert("Sent Successfully, We will get back to you soon.");

        // Reset the formData fields
        setFormData({
          fullName: "",
          email: "",
          url: pathanme,
        });
      }
    } catch (error) {
      console.log("Newsletter error:", error);
      alert("Can't send, please check and try again.", error);
    }
  };
  return (
    <Form.Root
      className="FormRoot4 mt-[43px]  max-w-[325px]"
      onSubmit={handleSubmit}
    >
      <Form.Field className="FormField4" name="Your full name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Your Full Name</Form.Label> */}
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
            className="Input4"
            type="text"
            required
            placeholder="Enter your Full Name"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField4" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Email</Form.Label> */}
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
            className="Input4"
            type="email"
            required
            placeholder="Enter your Email"
          />
        </Form.Control>
      </Form.Field>

   

      <div>
        <Form.Submit asChild>
          <button type="submit" className="Button5 max-w-[325px]  mt-[4px]">
            SUBSCRIBE
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default NewsletterForm;
