import React from "react";
import Introduction from "./content/Introduction";
import Impact from "./content/Impact";
import Journey from "./content/Journey";
import Services from "./content/Services";
import Products from "./content/Products";
import Industries from "./content/Industries";
import Faq from "./content/Faq";
import Enterprises from "./content/Enterprises";
import Blogs from "../containers/Blog/Blogs";
const CloudOps = () => {
  return (
    <div>
        <Introduction/>

        <Impact/>
        <Enterprises/>
        <Products/>
        <Industries/>
        <Faq/>
 
        
        <Journey/>
        {/* <Services/> */}
 
        <Blogs/>
       
    </div>
  )
}

export default CloudOps