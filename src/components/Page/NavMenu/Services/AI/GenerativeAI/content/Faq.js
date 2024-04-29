import React from "react";
import * as Accordion from '@radix-ui/react-accordion';

import "./faq.css";

const Faq = () => {
  return (
    <div className="navbar-main py-20">
      <div>
        <p className="font-bold text-[36px]">FAQ</p>
        <p className="text-[16px] text=[#BCBCBC]">Generative AI & Applications</p>
      </div>

      <Accordion.Root>
    <Accordion.Item>
      <Accordion.Header>
        <Accordion.Trigger />
      </Accordion.Header>
      <Accordion.Content />
    </Accordion.Item>
  </Accordion.Root>
    </div>
  );
};


export default Faq;
