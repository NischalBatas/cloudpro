"use client";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import MobileNavigation from "@/components/Navbar/MobileMenu/MobileNavigation";
import ProgressBar from "@/components/Animation/ProgressBar";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Suspense } from "react";


const client = new ApolloClient({
  uri: 'https://blogscloudproai-7a4c2b.ingress-erytho.ewp.live/graphql',
  cache: new InMemoryCache(),
});

const ProtectedLayout = ({ children }) => {
  return (
    // <Theme
    //   appearance="dark"
    //   accentColor=""
    //   grayColor="sand"
    //   radius="large"
    //   scaling="95%"
    // >
   <Suspense>
   <ApolloProvider client={client}>
   <ProgressBar/>
      {/* <Header /> */}
      <Navbar />
      <MobileNavigation/>
     
        {children}
        <Footer />
        <ScrollToTop top='40' component={<FaArrowUp />} className='scroll_top' smooth width='15' height="15"/>
        </ApolloProvider>
   </Suspense>
    // </Theme>
  );
};

export default ProtectedLayout;
