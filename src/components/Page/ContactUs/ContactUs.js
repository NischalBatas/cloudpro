"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from '@radix-ui/react-form';

import "./contactus.css";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="navbar-main mt-28 mb-24">
        <div className="main-container flex justify-between gap-8 ">
        <div className="relative">
        <Image className="absolute top-0" style={{zIndex:'-1'}} width={978} height={628} src='/Image/ellipse88.svg' alt="image_shade"/>

          <p className="max-w-[423px] font-semibold text-[40px] md:text-[42px]">
            Let's start a project together.
          </p>
          <p className="max-w-[533px] text-[16px] mt-2 text-cloud2">
            We love to sit down and talk about ideas. Let‘s get your project up
            and running. Get in touch for a tech consultation today.
          </p>
       
      </div>

      <Tabs.Root className="TabsRoot1 mt-8 md:mt-0" defaultValue="tab1">
        <Tabs.List className="TabsList1 text-[20px] md:text-[32px]" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger1 " value="tab1">
            Message
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger1" value="tab2">
            Schedule a Call
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent1" value="tab1">
            
        <Form.Root className="FormRoot">
    <Form.Field className="FormField" name="Your full name">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        
        <Form.Label className="FormLabel">Your full name</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your full name
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid full name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="text" required  placeholder="eg.John Smith"/>
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required placeholder="eg.you@example.com"/>
      </Form.Control>
    </Form.Field>


    <Form.Field  className="FormField" name="Services">
  <Form.Label className="FormLabel">Select all services you may need.</Form.Label>
  <Form.Control asChild>
    <select className="p-2  font-semibold rounded-md bg-[#252525]">
      <option value="AI">Artificial Intelligence </option>
      <option value="AI">Machine Learning </option>

    </select>
  </Form.Control>
</Form.Field>

<Form.Field className="FormField" name="phonenumber">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        
        <Form.Label className="FormLabel"> Phone Number</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Enter the Phone Number
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="number" required  placeholder="eg.+977-9812345678"/>
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="question">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Tell us something about your project</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a answer
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required />
      </Form.Control>
    </Form.Field>
    
    <Form.Submit asChild>
      <button className="Button bg-cloud" style={{ marginTop: 10 }}>
      Send Message
      </button>
    </Form.Submit>
  </Form.Root>
        </Tabs.Content>

        <Tabs.Content className="TabsContent1" value="tab2">
          <Image className="mb-10" width={500} height={500} src='/Image/phone.jpg' alt="phone_image"/>
          <Form.Root className="FormRoot">
    <Form.Field className="FormField" name="Your full name">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        
        <Form.Label className="FormLabel">Your full name</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your full name
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid full name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="text" required  placeholder="eg.John Smith"/>
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required placeholder="eg.you@example.com"/>
      </Form.Control>
    </Form.Field>


 

<Form.Field className="FormField" name="phonenumber">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        
        <Form.Label className="FormLabel"> Phone Number</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Phone Number
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="number" required  placeholder="eg.+977-9812345678"/>
      </Form.Control>
    </Form.Field>

    
    <Form.Submit asChild>
      <button className="Button bg-cloud" style={{ marginTop: 10 }}>
        Send Message
      </button>
    </Form.Submit>
  </Form.Root>
        </Tabs.Content>
      </Tabs.Root>
      </div>
      
    </div>
  );
};

export default ContactUs;
