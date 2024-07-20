import React from "react";

const FaqContainer = ({content}) => {
  return (
    <div className="w-[219px]">
      <p className="font-bold text-[36px] w-[219px]">FAQ</p>

          <p className="text-[16px] text-[#BCBCBC] max-w-[219px] tracking-normal">
            {content?.title}
          </p>
     
    
    </div>
  );
};

export default FaqContainer;
