"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

const ChatUI = () => {
  const [open, setOpen] = useState(false);
  const [newMessage, setNewMessage] = useState({ info: '', time: '' });
  const [allMessages, setAllMessages] = useState([]);
  const [chatResponse, setChatResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.info !== '') {
      const message = {
        info: newMessage.info,
        time: new Date().toLocaleTimeString([], {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setAllMessages(prev => [...prev, message]);
      setNewMessage({ info: '', time: '' });
      setLoading(true); // Start loading

      // Make API call to get chatbot response
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: newMessage.info,
            thread_id: ""
          })
        });
        const data = await res.json();
        setChatResponse(prev => [...prev, ...data.response.content]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // End loading
      }
    }
  };

  useEffect(() => {
    const storedMessages = JSON.parse(window.localStorage.getItem('allMessages'));
    if (storedMessages) {
      setAllMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    if (allMessages.length > 0) {
      window.localStorage.setItem('allMessages', JSON.stringify(allMessages));
    }
  }, [allMessages]);

  useEffect(() => {
    if (chatResponse.length > 0) {
      window.localStorage.setItem('chatResponse', JSON.stringify(chatResponse));
    }
  }, [chatResponse]);

  return (
    <>
      {open && (
        <div className="fixed z-[9999] max-w-[310px] w-full shadow-2xl bottom-[0.6rem] right-[5.9rem]"
          style={{ transform: "translate(-0%,-0%)" }}>
          <div className="rounded-[6px] bg-[#ffffff]">
            <div className="flex justify-between bg-[#5677e1] items-center p-2 rounded-t-[6px]">
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
                    style={{ top: "90%", left: "105%", transform: "translate(-50%,-50%)" }}
                  />
                </div>
                <div className="leading-snug">
                  <p className="text-[14px] font-semibold">Cloudpro Chatbot</p>
                  <Link className="flex items-center text-[10px]" href='https://docchat.cloudpro.ai/'>Powered by DocChat</Link>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>
                <IoClose className="text-[20px]" />
              </button>
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
                  <p>Hello, I'm CloudproAI! How can I assist you?</p>
                  <span className="flex justify-end text-[10px] mt-1 text-[#525252]">08:42 am</span>
                </div>
              </div>
              {allMessages.map((item, index) => (
                <div key={index} className="flex justify-end gap-2">
                  <div className="max-w-[220px] text-[12px] text-[#fff] bg-[#5677e1] px-2 pt-2 pb-1 rounded-[6px]">
                    <p>{item.info}</p>
                    <span className="flex justify-end text-[10px] mt-1 text-[#e0e0e0]">{item.time}</span>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex  items-center gap-3">
                 <div className="w-[24px]">
                  <Image
                    className="border-2 border-[#5677e1] rounded-full"
                    width={24}
                    height={24}
                    src="/Image/icon/chatbot.svg"
                    alt="chatbot"
                  />
                </div>
                <p className="animate-pulse text-[#888] text-[24px]">...</p>
                </div>
              )}
              {chatResponse.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
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
                    <p>{item.text.value}</p>
                    <span className="flex justify-end text-[10px] mt-1 text-[#525252]">08:42 am</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#f5f5f5] p-2 rounded-b-[6px] border-t-[1px]">
              <form onSubmit={handleSubmit} className="flex items-center justify-between gap-1">
                <input
                  value={newMessage.info}
                  name="newMessage"
                  onChange={(e) => setNewMessage({ info: e.target.value })}
                  className="bg-[#f5f5f5] p-1 w-full text-[#000] text-[14px] outline-none"
                  placeholder="Type your message"
                />
                <button type="submit">
                  <RiSendPlaneFill className="text-[#5677e1] text-[24px]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => setOpen(!open)} className="chatbot_main flex gap-1 text-black">
          <div>
            {/* {!open &&  <span className="bg-white  px-3 py-[2px] max-h-fit rounded-[6px] text-[14px]">Chat with us ...</span>} */}
          </div>
          <AiOutlineMessage className="chatbot_btn text-[#4f91ff]" />
        </button>
      </div>
    </>
  );
};

export default ChatUI;
