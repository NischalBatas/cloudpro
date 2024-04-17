"use client";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "../globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

const ProtectedLayout = ({ children }) => {
  return (
    <Theme
      appearance="light"
      accentColor=""
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <Header />
      <Navbar />
      {children}
    </Theme>
  );
};

export default ProtectedLayout;
