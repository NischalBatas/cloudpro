"use client"
import Footer from "@/components/Footer/Footer";


const ProtectedLayout = ({ children }) => {

  return (
    <>
      {children}
      <Footer />
      {/* <ContactInfoMain /> */}
    </>
  );
};

export default ProtectedLayout;

