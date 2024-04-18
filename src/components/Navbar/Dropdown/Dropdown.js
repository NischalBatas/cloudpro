import React from "react";
import { Flex, Button } from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Image from "next/image";
import "./dropdown.css";
import { TriggerIcon } from "@radix-ui/themes/dist/cjs/components/dropdown-menu";
const Dropdown = ({ title }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="windows-group flex items-center gap-2">
          {title}
          <TriggerIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content variant="soft"
        color="indigo"
          className="DropdownMenuContent gap-8"
          sideOffset={5}
        >
          <DropdownMenu.Group className="flex gap-2 text-sm">
            <div className="">
              <div className="bg-cloudBtn border border-black rounded-md p-2">
                <Image
                  width={20}
                  height={20}
                  src="/Image/navbar_icon/cloud.svg"
                  alt="navbar_icon"
                />
              </div>
            </div>
            <div>
              <div className="font-semibold text-base py-2">
                Cloud Engineering
              </div>
              <DropdownMenu.Item className="DropDownItem">
                Data Platform Engineering
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Data Lakes & Warehouses
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Application Modernization
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Architecture Consulting
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Cloud Test Engineering
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Cloud Ops
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Security & Governance
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Private Cloud
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Group>
          <DropdownMenu.Group className="flex gap-2 text-sm">
            <div className="">
              <div className="bg-cloudBtn border border-black rounded-md p-2">
                <Image
                  width={20}
                  height={20}
                  src="/Image/navbar_icon/database.svg"
                  alt="navbar_icon"
                />
              </div>
            </div>
            <div>
              <div className="font-semibold text-base py-2">
                Data Engineering
              </div>
              <DropdownMenu.Item className="DropDownItem">
                Data Lakes & Warehouses
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Data Pipelining
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Architecture Consulting
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Data Analytics
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Data Platform Engineering
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Group>

          <DropdownMenu.Group className="flex gap-2 text-sm">
            <div className="">
              <div className="bg-cloudBtn border border-black rounded-md p-2">
                <Image
                  width={20}
                  height={20}
                  src="/Image/navbar_icon/ai.svg"
                  alt="navbar_icon"
                />
              </div>
            </div>
            <div>
              <div className="font-semibold text-base py-2">
                Generative AI And ML
              </div>
              <DropdownMenu.Item className="DropDownItem">
                AI Chatbot Services
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                Generative AI Apps
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                AI Implementation Services
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropDownItem">
                LLM (Large Language Model)
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Group>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
