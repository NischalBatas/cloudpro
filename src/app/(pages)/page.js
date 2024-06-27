import Footer from "@/components/Footer/Footer";
import Homes from "@/components/Page/Homes/Homes";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
const Home = () => {
  return (
    <div className="px-1 md:px-2">
      <Homes />
      <Footer />

    </div>
  );
};

export default Home;
