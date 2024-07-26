import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MobileNavigation from "@/components/Navbar/MobileMenu/MobileNavigation";
import ProgressBar from "@/components/Animation/ProgressBar";
import ScrollToTops from "@/components/ScrollToTop/ScrollToTop";
import ChatUI from "@/components/ChatUI/ChatUI";






const ProtectedLayout = ({ children }) => {
  return (

<div className="">
 <ProgressBar/>
   {/* <Header /> */}
   <Navbar />
   <MobileNavigation/>
    <ChatUI/>
     {children}

    <ScrollToTops/>    
  


</div>
  );
};

export default ProtectedLayout;
