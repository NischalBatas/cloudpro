import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { FaAngleDown } from "react-icons/fa6";
const FaqMain = ({faqApp}) => {
  return (
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
  )
}

export default FaqMain