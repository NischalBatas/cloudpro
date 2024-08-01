"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

const ChatUI = () => {
  const [open, setOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const message = {
        info: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "user",
      };
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      setNewMessage("");
      setLoading(true);

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: newMessage, thread_id: "" }),
        });
        const data = await res.json();
        const botMessage = {
          info: data.response,
          time: new Date().toLocaleTimeString([], {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
          }),
          type: "bot",
        };
        setMessages([...updatedMessages, botMessage]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const storedMessages = JSON.parse(window.localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      window.localStorage.setItem("messages", JSON.stringify(messages));
      const timeoutId = setTimeout(() => {
        window.localStorage.removeItem("messages");
      }, 20000); //  24 hours

      return () => clearTimeout(timeoutId);
    }
  }, [messages]);

  useEffect(()=>{
    clearTimeout(()=>{

    })
  },[])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {open && (
        <div
          className="fixed z-[9999] max-w-[310px] w-full shadow-2xl bottom-[0.6rem] right-[5.9rem]"
          style={{ transform: "translate(-0%,-0%)" }}
        >
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
                    style={{
                      top: "90%",
                      left: "105%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </div>
                <div className="leading-snug">
                  <p className="text-[14px] font-semibold">Cloudpro Chatbot</p>
                  <Link
                    className="flex items-center text-[10px]"
                    href="https://docchat.cloudpro.ai/"
                  >
                    Powered by DocChat
                  </Link>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>
                <IoClose className="text-[20px]" />
              </button>
            </div>

           

            <div
              ref={chatContainerRef}
              className="bg-[#ffffff] p-2 h-[350px] overflow-y-scroll flex flex-col gap-2 mb-1"
            >
                 <div className="flex flex-col justify-center items-center text-[#000] mt-2">
                <Image
                  className="border-2 border-[#5677e1] rounded-full"
                  width={40}
                  height={40}
                  src="/Image/icon/chatbot.svg"
                  alt="chatbot"
                />
              <div className="text-center leading-snug">
              <p className="text-[15px] font-medium">Cloudpro Chatbot</p>
                {/* <p className="text-[11px] text-[#8b8d91]">Typically responds with our chatbot</p> */}
                <p className="text-[11px] text-[#8b8d91]">AI & Technology</p>
              </div>
              </div>

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    msg.type === "user" ? "justify-end" : ""
                  }`}
                >
                  <div
                    className={`w-[24px] ${
                      msg.type === "user" ? "hidden" : ""
                    }`}
                  >
                    <Image
                      className="border-2 border-[#5677e1] rounded-full"
                      width={24}
                      height={24}
                      src="/Image/icon/chatbot.svg"
                      alt="chatbot"
                    />
                  </div>
                  <div
                    className={`max-w-[220px] text-[12px] ${
                      msg.type === "user"
                        ? "text-[#fff] bg-[#5677e1]"
                        : "text-[#000] bg-[#dce0f2]"
                    } px-2 pt-2 pb-1 rounded-[6px]`}
                  >
                    <p>{msg.info}</p>
                    <span className="flex justify-end text-[10px] mt-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-3">
                  <div className="w-[24px]">
                    <Image
                      className="border-2 border-[#5677e1] rounded-full"
                      width={24}
                      height={24}
                      src="/Image/icon/chatbot.svg"
                      alt="chatbot"
                    />
                  </div>
                  <p className="animate-pulse text-[#888] text-[32px]">...</p>
                </div>
              )}
            </div>
            <div className="bg-[#f5f5f5] p-2 rounded-b-[6px] border-t-[1px]">
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-between gap-1"
              >
                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="bg-[#f5f5f5] p-1 w-full text-[#000] text-[14px] outline-none"
                  placeholder="Type your message"
                  disabled={loading}
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
        <button
          onClick={() => setOpen(!open)}
          className="chatbot_main flex gap-1 text-black"
        >
          <AiOutlineMessage className="chatbot_btn text-[#4f91ff]" />
        </button>
      </div>
    </>
  );
};

export default ChatUI;
