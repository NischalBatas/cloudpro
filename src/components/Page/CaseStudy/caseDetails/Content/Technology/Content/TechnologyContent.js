import React from "react";
import "./table.css";
const TechnologyContent = ({ content,caseData }) => {
  const TechnologyDetails=JSON.parse(caseData.casestudyfieldgroud.technology)
  console.log(TechnologyDetails)
  return (
    <div className="navbar-main bg-[#EDF5FB] text-black pt-5 pb-16">
      <div className="main-container">
        <table>
          <tbody>
            {TechnologyDetails.map((item, index) => {
              return (
                <tr key={index}>
                  <td
                    className="text-[16px] font-semibold leading-6"
                    data-label="Account"
                  >
                    {item.title}
                  </td>
                  <td className="text-[14px] leading-6" data-label="Due Date">
                    <span className="font-semibold text-[14px] mr-1">
                      Procedure:
                    </span>
                    {item.procedure}
                  </td>
                  <td className="text-[14px] leading-6" data-label="Amount">
                    <span className="font-semibold text-[14px] mr-1">Impact:</span>{" "}
                    {item.impact}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnologyContent;
