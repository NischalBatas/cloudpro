"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const ChatUI = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed z-[9999] max-w-[310px]   w-full         bottom-[0.6rem] right-[5.9rem]"
          style={{
            transform: "translate(-0%,-0%)",
          }}
        >
          <div className="rounded-[6px] bg-[#ffffff]">
            <div className="flex justify-between bg-[#5677e1] items-center  p-2 rounded-t-[6px]">
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <Image
                    width={24}
                    height={24}
                    src="/Image/icon/chatbot.svg"
                    alt="chatbot"
                  />
                  <GoDotFill
                    className="text-[#41eb41] absolute"
                    style={{
                      top: "90%",
                      left: "105%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </div>
                <div className="leading-snug">
                  <p className="text-[14px] font-semibold">
                    Powered by DocChat
                  </p>
                  <p className="flex items-center text-[12px]">Online</p>
                </div>
              </div>

              <div>
                <button onClick={() => setOpen(false)}>
                  <IoClose className="text-[20px]" />
                </button>
              </div>
            </div>

            <div className="bg-[#ffffff] p-2 h-[350px] overflow-y-scroll flex flex-col gap-2 mb-1">
              <div className="flex items-center gap-2">
                <div className="w-[24px]">
                  <Image
                    className="border-2 border-[#5677e1] rounded-full"
                    width={24}
                    height={24}
                    src="/Image/icon/chatbot.svg"
                    alt="chatbot"
                  />
                </div>

                <div className="max-w-[220px] text-[12px] text-[#000] bg-[#dce0f2] px-2 pt-2 pb-1 rounded-[6px]">
                  <p>
                    We're Gen AI-Ready and Eager to Collaborate. Business and
                    Infrastructure Readiness
                  </p>
                  <span className="flex justify-end text-[10px] mt-1 text-[#525252]">
                    08:42 am
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <div className="max-w-[220px] text-[12px] text-[#fff] bg-[#5677e1] px-2 pt-2 pb-1 rounded-[6px]">
                  <p>
                    We're Gen AI-Ready and Eager to Collaborate. Business and
                    Infrastructure Readiness
                  </p>
                  <span className="flex justify-end text-[10px] mt-1 text-[#e0e0e0]">
                    08:42 am
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-[24px]">
                  <Image
                    className="border-2 border-[#5677e1] rounded-full"
                    width={24}
                    height={24}
                    src="/Image/icon/chatbot.svg"
                    alt="chatbot"
                  />
                </div>

                <div className="max-w-[220px] text-[12px] text-[#000] bg-[#dce0f2] px-2 pt-2 pb-1 rounded-[6px]">
                  <p>
                    We're Gen AI-Ready and Eager to Collaborate. Business and
                    Infrastructure Readiness
                  </p>
                  <span className="flex justify-end text-[10px] mt-1 text-[#525252]">
                    08:42 am
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <div className="max-w-[220px] text-[12px] text-[#fff] bg-[#5677e1] px-2 pt-2 pb-1 rounded-[6px]">
                  <p>
                    We're Gen AI-Ready and Eager to Collaborate. Business and
                    Infrastructure Readiness
                  </p>
                  <span className="flex justify-end text-[10px] mt-1 text-[#e0e0e0]">
                    08:42 am
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5]  p-2 rounded-b-[6px] border-t-[1px]">
              <form className="flex items-center justify-between gap-1">
                <input
                  className="bg-[#f5f5f5] p-1 w-full text-[#000] text-[14px] outline-none"
                  placeholder="Type your message"
                />
                <button>
                  {" "}
                  <RiSendPlaneFill className="text-[#5677e1] text-[24px]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => setOpen(!open)} className="chatbot_main  flex gap-1  text-black">
        {!open &&  <span className="bg-white px-3 py-[2px] max-h-fit rounded-[6px] text-[14px]">Chat with us ...</span>} 
          <AiFillMessage className="chatbot_btn text-white"/>
        </button>
      </div>
    </>
  );
};

export default ChatUI;
