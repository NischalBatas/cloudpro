import React from "react";

const FaqContainer = ({content}) => {
  return (
    <div className="w-[219px]">
      <p className="font-bold text-[36px] w-[219px]">FAQ</p>
      {content.map((item,index)=>{
        return(
          <p key={index} className="text-[16px] text-[#BCBCBC] max-w-[219px] tracking-normal">
            {item.title}
          </p>
        )
      })}
    
    </div>
  );
};

export default FaqContainer;
