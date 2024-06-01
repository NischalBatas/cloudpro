import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import Calendar from "./Calendar";
import emailjs from "emailjs-com";
import {
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const MessageBox = ({ selectTab }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    position: "",
    message: "",
    service: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeService = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({ ...formData, [name]: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      );
      console.log("EmailJS response:", res);
      if (res.status === 200) {
        toast.success(
          "Thank you for reaching out! We will get back to you shortly."
        );

        // Reset the formData fields
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          company: "",
          position: "",
          message: "",
          service: [],
        });
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      toast.error("Please try again.");
    }
  };



const options = [
  {
    label: "Artificial Intelligence",
    value: "Artificial Intelligence",
  },
  {
    label: "BI & Data Analytics",
    value: "BI & Data Analytics",
  },
  {
    label: "Cloud Engineering",
    value: "Cloud Engineering",
  },
  {
    label: "Data Engineering",
    value: "Data Engineering",
  },
  {
    label: "Web Development",
    value: "Web Development",
  },
  {
    label: "App Development",
    value: "App Development",
  },

];

  return (
    <Tabs.Root className="TabsRoot1 mt-8 md:mt-0" defaultValue={`${selectTab}`}>
      <Tabs.List
        className="TabsList1 text-[20px] md:text-[32px]"
        aria-label="Manage your account"
      >
        <Tabs.Trigger className="TabsTrigger1 " value="message">
          Message
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger1" value="call">
          Schedule a Call
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        className="TabsContent1 flex justify-between flex-wrap gap-6 lg:flex-nowrap"
        value="message"
      >
        <Form.Root className="FormRoot" onSubmit={handleSubmit}>
          <Form.Field className="FormField" name="Your full name">
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

          <Form.Field className="FormField" name="email">
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

          <Form.Field className="FormField " name="service">
            <Form.Label className="FormLabel">
            Select the services you may need.
            <p className="text-[#7c7c7c] text-[12px] mt-[-10px] mb-[5px]"><span className="text-white font-bold">Note:</span> Press ctrl key to select multiple services</p>
            </Form.Label>
            <Form.Control asChild>
            <select name="service" className="contactus_main_select md:h-[280px] border p-2 sm:border-none rounded-16px bg-black text-white" multiple
              onChange={handleChangeService} >
            {options.map((option) => (
              <option className="md:my-1 md:p-2 md:w-[200px] md:text-center md:rounded-[16px] md:border" value={option.value}>{option.label}</option>
            ))}
          </select>
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
            <Form.Control asChild>
              <input
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                className="Input"
                type="tel"
                required
                placeholder="Enter your Phone Number"
              />
            </Form.Control>
          </Form.Field>
          



          <Form.Field className="FormField" name="Your Company">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Your Company</Form.Label>
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

          <Form.Field className="FormField" name="Your Position">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Your Position</Form.Label>
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

          <Form.Field className="FormField" name="question">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">
                Tell us something about your project
              </Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                value={formData.message}
                name="message"
                onChange={handleChange}
                className="Textarea"
                required
              />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button
              type="submit"
              className="Button bg-cloud"
              style={{ marginTop: 10 }}
            >
              Send Message
            </button>
          </Form.Submit>
        </Form.Root>
        <div>
          <div className="my-5">
            <span className="text-[20px] font-semibold">Chat with us</span>
            <p className="text-[#888888] text-[14px]">
              Speak to our friendly team via email
            </p>
            <div className="flex items-center gap-2 mt-2 underline">
              <MdOutlineMailOutline className="text-[18px]" />
              <Link href="mailto:contact@cloudpro.ai">Send us an email</Link>
            </div>
          </div>

          <div className="my-8">
            <span className="text-[20px] font-semibold">Call us</span>
            <p className="text-[#888888] text-[14px]">
              Call our team Mon-Fri from 8am to 5pm
            </p>
            <div className="flex items-center gap-2 mt-2">
              <MdOutlinePhoneInTalk className="text-[18px]" />
              <p>+1 415-393-2021</p>
            </div>
          </div>

          <div className="my-5">
            <span className="text-[20px] font-semibold">Mail us</span>
            <p className="text-[#888888] text-[14px]">
              Send correspondence to our headquarters
            </p>
            <div className="flex items-center gap-2 mt-2 underline">
              <MdOutlineLocationOn className="text-[20px]" />
              <Link
                className="lg:max-w-[290px]"
                target="_blank"
                href="https://maps.app.goo.gl/Z8G9DuJLHGfypwM86"
              >
                584 Castro St 2165, San Francisco, CA 94114-2512
              </Link>
            </div>
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content className="TabsContent2" value="call">
        <Calendar />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default MessageBox;
