import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MobileNavigation from "@/components/Navbar/MobileMenu/MobileNavigation";
import ProgressBar from "@/components/Animation/ProgressBar";
import ScrollToTops from "@/components/ScrollToTop/ScrollToTop";






const ProtectedLayout = ({ children }) => {
  return (

<>

 <ProgressBar/>
   {/* <Header /> */}
   <Navbar />
   <MobileNavigation/>
  
     {children}

    <ScrollToTops/>    
  


</>
  );
};

export default ProtectedLayout;
