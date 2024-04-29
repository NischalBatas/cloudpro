"use client"
import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { FaAngleDown } from "react-icons/fa6";
import "./faq.css";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { faqApp } from "@/db/faq";

const Faq = () => {
  return (
    <div className="navbar-main py-20 flex justify-between flex-wrap gap-2">
      <div className="w-[219px]">
        <p className="font-bold text-[36px] w-[219px]">FAQ</p>
        <p className="text-[16px] text=[#BCBCBC] w-[219px]">Generative AI & Applications</p>
      </div>

      <Accordion.Root className="AccordionRoot mt-[1.5rem] md:mt-0" type="single" defaultValue="item-1" collapsible>
  {faqApp.map((item,index)=>{
    return(
      <Accordion.Item key={index} className="AccordionItem" value={`item-${item.number}`}>
      <Accordion.Trigger className="AccordionTrigger text-[14px]">{item.question}<FaAngleDown className="ml-2 FaAngleDown"/> </Accordion.Trigger>
      <div className="line-faq"></div >
      <Accordion.Content className="AccordionContent"> 
      <div className="AccordionContentText">
         {item.answer}
        </div>
        </Accordion.Content>
  
    </Accordion.Item>
    )
  })}
 

  
</Accordion.Root>

    </div>
  );
};


export default Faq;
