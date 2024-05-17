import React from "react";

const Conclusion = ({caseData}) => {
  return (
    <div className="navbar-main bg-white text-black py-14" id="conclusion_section">
      <div className="main-container">
        <span className="font-semibold text-[36px]">Conclusion</span>
        <p className="mt-2 text-[#414551] md:max-w-[579px] leading-8">
          {caseData.casestudyfieldgroud.conclusion}
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
