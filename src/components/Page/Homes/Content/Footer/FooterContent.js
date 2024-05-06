import Link from "next/link";
import React from "react";

const FooterContent = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 place-content-between gap-4 py-12">
      <div className="flex flex-col gap-2">
        <div className="text-white tracking-widest font-medium text-sm md:text-base uppercase">
          we are cloudpro ai
        </div>
        <div className="flex flex-col gap-2 text-cloud2 text-[12px] md:text-[14px]">
          <Link href="/aboutus">About Us</Link>
          <Link href="/career">Career</Link>
          <Link href="/casestudy">Case Study</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/events">Events</Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-white tracking-widest font-medium text-sm md:text-base uppercase">
          What we do
        </div>
        <div className="flex flex-col gap-2 text-cloud2 text-[12px] md:text-[14px]">
          <Link href="/services/architecture">Artificial Intelligence</Link>
          <Link href="/services/dataanalytics">BI & Data Analytics</Link>
          <Link href="/services/architecture">Cloud Engineering</Link>
          <Link href="/services/bigdata">Data Engineering</Link>
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-2">
        <div className="text-white tracking-widest font-medium text-sm md:text-base uppercase">
          we are located at
        </div>
        <div className="grid grid-cols-2 gap-3 place-content-between">
          <div className="flex flex-col gap-2">
            <div className="text-white tracking-widest font-medium text-sm md:text-base uppercase">
              USA
            </div>

            <div className="flex flex-col gap-2 text-cloud2 text-[12px] md:text-[14px]">
              <Link href="#" className="text-wrap w-full lg:w-52">
                584 Castro St 2165, San Francisco, CA 94114-2512
              </Link>
              <Link href="#">contact@cloudpro.ai</Link>
              <Link href="#">+1 415-393-2021</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-white tracking-widest font-medium text-sm md:text-base uppercase">
              Nepal
            </div>

            <div className="flex flex-col gap-2 text-cloud2 text-[12px] md:text-[14px]">
              <Link href="#" className="text-wrap w-full lg:w-52">
                Maharajgunj, Basundhara- 3 Kathmandu, Nepal
              </Link>
              <Link href="#">contact@cloudpro.ai</Link>
              <Link href="#">+1 415-393-2021</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
