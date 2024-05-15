"use client"
import ContactInfoMain from "@/components/Page/Services/containers/ContactInfo/ContactInfoMain";
import { useEffect } from "react";

const ProtectedLayout = ({ children }) => {
//   useEffect(() => {
//     let valueDisplays = document.querySelectorAll(".num");
// let interval = 2000;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

//     // Clean up the interval when the component unmounts
//     return () => {
//       valueDisplays.forEach(valueDisplay => {
//         valueDisplay.textContent = ''; // Reset the content
//       });
//     };
//   }, []);
  return (
    <>
      {children}

      {/* <ContactInfoMain /> */}
    </>
  );
};

export default ProtectedLayout;
