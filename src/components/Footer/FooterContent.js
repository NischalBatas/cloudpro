import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import './footer.css'
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
const FooterContent = () => {
  return (
    <div className="footer_width footer_content grid md:grid-cols-2 lg:grid-cols-4 place-content-between gap-10 lg:gap-4 py-12">
      <div className="flex flex-col gap-[16px]">
        <div className="text-[#FFFFFF] tracking-widest text-[14px] text-sm md:text-base uppercase">
          we are cloudpro ai
        </div>
        <div className="cloudpro_1 flex flex-col gap-[16px] text-cloud2 text-[14px]">
          <Link href="/aboutus">About Us</Link>
          <Link href="/casestudy">Case Study</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>

      <div className="cloudpro_2 flex flex-col gap-[16px]">
        <div className="text-[#FFFFFF] tracking-widest text-[14px] text-sm md:text-base uppercase">
          What we do
        </div>
        <div className="flex flex-col gap-[16px] text-cloud2 text-[14px]">
          <Link href="/services/alconsulting">AI Consulting</Link>
          <Link href="/services/bigdata">Big Data Consulting</Link>
          <Link href="/services/dataanalytics">Data Analytics</Link>
          <Link href="/services/datavisual">Data Visualization Solution</Link>
        </div>
      </div>


      <div className="flex flex-col gap-[16px]">
        <div className="text-[#FFFFFF] tracking-widest text-[14px] text-sm md:text-base uppercase">
          Our Locations
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex max-w-[277px] h-[62px] border-[1px] rounded-[8px] border-[#1E1E1E] px-[14px]">
            <div className="flex items-end"><Image width={52} height={52} alt='location' src='/Image/footerIcon/1.svg'/></div>
            <div className="text-[14px] pl-[21px] flex flex-col justify-center">
              <span className="text-[#fff] font-semibold">USA</span>
              <p className="text-[#CED0D1]">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex max-w-[277px] h-[62px] border-[1px] rounded-[8px] border-[#1E1E1E] px-[14px]">
            <div className="flex items-end"><Image width={52} height={52} alt='location' src='/Image/footerIcon/2.svg'/></div>
            <div className="text-[14px] pl-[21px] flex flex-col justify-center">
              <span className="text-[#fff] font-semibold">Nepal</span>
              <p className="text-[#CED0D1]">Maharajgunj, Kathmandu</p>
            </div>
          </div>


          <div className="flex max-w-[277px] h-[62px] border-[1px] rounded-[8px] border-[#1E1E1E] px-[14px]">
            <div className="flex items-end"><Image width={52} height={52} alt='location' src='/Image/footerIcon/3.svg'/></div>
            <div className="text-[14px] pl-[21px] flex flex-col justify-center">
              <span className="text-[#fff] font-semibold">AUSTRALIA</span>
              <p className="text-[#CED0D1]">Ashfield, NSW 2131</p>
            </div>
          </div>


          <div className="flex max-w-[277px] h-[62px] border-[1px] rounded-[8px] border-[#1E1E1E] px-[14px]">
            <div className="flex items-end"><Image width={52} height={52} alt='location' src='/Image/footerIcon/4.svg'/></div>
            <div className="text-[14px] pl-[21px] flex flex-col justify-center">
              <span className="text-[#fff] font-semibold">COLOMBIA</span>
              <p className="text-[#CED0D1]">050030, Medellín</p>
            </div>
          </div>


        </div>
     
      </div>

      {/* <div className="flex flex-col gap-[16px]">
        <div className="text-[#FFFFFF] tracking-widest text-[14px] text-sm md:text-base uppercase">
          Our Locations
        </div>
        <table className="text-cloud2 text-[14px]">
          <tbody className="">
          <tr className="">
            <td className="text-[#FFFFFF] tracking-widest text-[14px] uppercase">USA</td>
            <td> <Link target="_blank" href='https://maps.app.goo.gl/Z8G9DuJLHGfypwM86'>584 Castro St 2165, San Francisco, CA 94114-2512</Link></td>
          </tr>

          <tr>
            <td className="text-white tracking-widest text-[14px] uppercase">Nepal</td>
            <td>Maharajgunj, Kathmandu</td>
          </tr>

          <tr>
            <td className="text-white tracking-widest text-[14px] uppercase">Colombia</td>
            <td>050030, Medellín</td>
          </tr>

          <tr>
            <td className="text-white tracking-widest text-[14px] uppercase">Australia</td>
            <td>Ashfield, NSW 2131</td>
          </tr>

          </tbody>
        </table>
     
      </div> */}

      <div className="grid gap-[16px] text-[14px] lg:place-content-end lg:content-start">
        <div className="text-white tracking-widest text-[14px] text-sm md:text-base uppercase">
          Contact us
        </div>
        <div className="flex flex-col gap-[16px] text-cloud2 text-[14px]">
          <Link href="#" className="flex gap-2 items-center"><MdOutlinePhoneInTalk /> +1 415-393-2021</Link>
          <Link href='mailto:contact@cloudpro.ai' className="flex gap-2 items-center">  <MdOutlineMailOutline /> contact@cloudpro.ai</Link>
          <Link
            className="flex items-center gap-[16px] border rounded-full py-[0.3rem] px-4 max-w-max border-[#494949]"
            href="#"
          >
            <span>
              <IoLogoWhatsapp className="text-[#494949]" />
            </span>
            <span>Whatsapp</span>
          </Link>
          <Link
            className="flex items-center gap-[16px] border rounded-full py-[0.3rem] px-4 max-w-max border-[#494949]"
            href="#"
          >
            <span>
              <FaViber className="text-[#717171]" />
            </span>
            <span>Viber</span>
          </Link>
        </div>
      </div>

    
    </div>
  );
};

export default FooterContent;
