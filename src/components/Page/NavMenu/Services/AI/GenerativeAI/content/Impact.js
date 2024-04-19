import React from "react";
import Testimonial from "./Testimonial";

const Impact = () => {
  return (
    <div className="navbar-main bg-cloudBtn2 py-5 md:py-14">
     
        <div className="w-full md:w-5/12">
          <div className="text-2xl lg:text-3xl font-semibold ">
            The Transformative Impact of Generative AI in Business
          </div>
          <div className="text-cloud3 text-sm py-3 leading-6 ">
            Generative AI apps are revolutionizing the way businesses operate,
            offering a myriad of possibilities from crafting personalized
            marketing content to innovating product designs swiftly and
            cost-effectively. These technological marvels significantly enhance
            operational efficiencies, foster customer engagement, and drive a
            dramatic upsurge in growth and competitiveness. By leveraging
            generative AI, businesses can achieve:
          </div>
        </div>
     
      <div className="w-full bg-cloud4 my-5 md:my-14" style={{height:'1px'}}></div>
      <Testimonial/>
    </div>
  );
};

export default Impact;
