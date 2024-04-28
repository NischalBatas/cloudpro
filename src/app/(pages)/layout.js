"use client";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "../globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Page/Homes/Content/Footer/Footer";

const ProtectedLayout = ({ children }) => {
  return (
    // <Theme
    //   appearance="dark"
    //   accentColor=""
    //   grayColor="sand"
    //   radius="large"
    //   scaling="95%"
    // >
   <>
      <Header />
      <Navbar />
      <div className="main-container">
        {children}
        <Footer />
      </div>
   </>
    // </Theme>
  );
};

export default ProtectedLayout;
