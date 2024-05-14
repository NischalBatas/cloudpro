import React, { useState } from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from '@radix-ui/react-form';
import Image from "next/image";
import Calendar from './Calendar';
import emailjs from 'emailjs-com';
import { MdOutlineLocationOn, MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md';
import Link from 'next/link';



const MessageBox = () => {
  const [formData,setFormData]=useState({
    fullName:'',
    email:'',
    phoneNumber:'',
    message:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }

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
        alert("Sent Successfully, We will get back to you soon.");
  
        // Reset the formData fields
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      alert("Can't send, please check and try again.");
    }
  };
  

  return (
    <Tabs.Root className="TabsRoot1 mt-8 md:mt-0" defaultValue="tab1">
    <Tabs.List className="TabsList1 text-[20px] md:text-[32px]" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger1 " value="tab1">
        Message
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger1" value="tab2">
        Schedule a Call
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent1 flex justify-between" value="tab1">
    <Form.Root className="FormRoot" onSubmit={handleSubmit}>
<Form.Field className="FormField" name="Your full name">
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    
    <Form.Label className="FormLabel">Your Full Name</Form.Label>
    <Form.Message className="FormMessage" match="valueMissing">
      Please enter your full name
    </Form.Message>
    <Form.Message className="FormMessage" match="typeMismatch">
      Please provide a valid full name
    </Form.Message>
  </div>
  <Form.Control asChild>
    <input value={formData.fullName} name='fullName' onChange={handleChange}  className="Input" type="text" required  placeholder="eg.John Smith"/>
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
    <input value={formData.email} name='email' onChange={handleChange} className="Input" type="email" required placeholder="eg.you@example.com"/>
  </Form.Control>
</Form.Field>


{/* <Form.Field  className="FormField" name="Services">
<Form.Label className="FormLabel">Select all services you may need.</Form.Label>
<Form.Control asChild>
<select className="p-2 font-semibold rounded-md bg-[#252525]">
  <option value="AI">Artificial Intelligence </option>
  <option value="BI">BI & Data Analytics </option>
  <option value="AI">Cloud Engineering </option>
  <option value="AI">Data Engineering </option>
  <option value="AI">Web Development </option>
  <option value="AI">App Development </option>
</select>
</Form.Control>
</Form.Field> */}

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
    <input value={formData.phoneNumber} name='phoneNumber' onChange={handleChange} className="Input" type="number" required  placeholder="Enter your phone number"/>
  </Form.Control>
</Form.Field>

<Form.Field className="FormField" name="question">
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    <Form.Label className="FormLabel">Tell us something about your project</Form.Label>
    <Form.Message className="FormMessage" match="valueMissing">
      Please enter a message
    </Form.Message>
  </div>
  <Form.Control asChild>
    <textarea value={formData.message} name='message' onChange={handleChange} className="Textarea" required />
  </Form.Control>
</Form.Field>

<Form.Submit asChild>
  <button type='submit' className="Button bg-cloud" style={{ marginTop: 10 }}>
  Send Message
  </button>
</Form.Submit>
</Form.Root>
   <div>
      <div className='my-5'>
         <span className='text-[20px] font-semibold'>Chat with us</span>
         <p className='text-[#888888] text-[14px]'>Speak to our friendly team via email</p>
         <div className='flex items-center gap-2 mt-2 underline'>
         <MdOutlineMailOutline />
         <Link href='mailto:contact@cloudpro.ai'>Send us an email</Link>
         </div>
      </div>

      <div className='my-8'>
         <span className='text-[20px] font-semibold'>Call us</span>
         <p className='text-[#888888] text-[14px]'>Call our team Mon-Fri from 8am to 5pm</p>
         <div className='flex items-center gap-2 mt-2'>
         <MdOutlinePhoneInTalk />
         <p>+1 415-393-2021</p>
         </div>
      </div>

      <div className='my-5'>
         <span className='text-[20px] font-semibold'>Visit us</span>
         <p className='text-[#888888] text-[14px]'>Chat to us in person at our headquarter</p>
         <div className='flex items-center gap-2 mt-2 underline'>
         <MdOutlineLocationOn />
         <Link className='max-w-[290px]' target="_blank" href='https://maps.app.goo.gl/Z8G9DuJLHGfypwM86'>584 Castro St 2165, San Francisco, CA 94114-2512</Link>
         </div>
      </div>
   </div>
    </Tabs.Content>








    <Tabs.Content className="TabsContent2" value="tab2">
      <Calendar/>
      {/* <Form.Root className="FormRoot mt-6" onSubmit={handleSubmit}>
<Form.Field className="FormField" name="Your full name">
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    
    <Form.Label className="FormLabel">Your Full Name</Form.Label>
    <Form.Message className="FormMessage" match="valueMissing">
      Please enter your full name
    </Form.Message>
    <Form.Message className="FormMessage" match="typeMismatch">
      Please provide a valid full name
    </Form.Message>
  </div>
  <Form.Control asChild>
    <input value={formData.fullName} name='fullName' onChange={handleChange}  className="Input" type="text" required  placeholder="eg.John Smith"/>
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
    <input value={formData.email} name='email' onChange={handleChange} className="Input" type="email" required placeholder="eg.you@example.com"/>
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
    <input value={formData.phoneNumber} name='phoneNumber' onChange={handleChange} className="Input" type="number" required  placeholder="Enter your phone number"/>
  </Form.Control>
</Form.Field>

<Form.Field className="FormField" name="question">
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    <Form.Label className="FormLabel">Message</Form.Label>
    <Form.Message className="FormMessage" match="valueMissing">
      Please enter a message
    </Form.Message>
  </div>
  <Form.Control asChild>
    <textarea value={formData.message} name='message' onChange={handleChange} className="Textarea" required />
  </Form.Control>
</Form.Field>

<Form.Submit asChild>
  <button type='submit' className="Button bg-cloud" style={{ marginTop: 10 }}>
  Send Message
  </button>
</Form.Submit>
</Form.Root> */}
    </Tabs.Content>
  </Tabs.Root>
  )
}

export default MessageBox