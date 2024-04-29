import React from "react";
import * as Accordion from '@radix-ui/react-accordion';

import "./faq.css";

const Faq = () => {
  return (
    <div>
      <div>
        <p>FAQ</p>
        <p>Generative AI & Applications</p>
      </div>

      <div>
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look
              and feel.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                Yes! You can animate the Accordion with CSS or JavaScript.
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};


export default Faq;
