import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import "../../static/resources/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css";
import "../../static/resources/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
import "../../static/resources/animate.css-main/animate.css";
import { Theme } from "@radix-ui/themes";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "CloudPro.AI",
  description: "Data, AI and Software Cloud Services Consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta name="application-name" content="cloudproai" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="cloudproai" />
        <meta name="description" content="Data, AI and Software Cloud Services Consultant" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="default" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="default" />


        <link rel="mask-icon" href="/favicon.png" color="#000" />
        <link rel="shortcut icon" href="/favicon.png" />

        
<meta property="og:title" content="CloudPro.AI" />
  <meta property="og:description" content="Data, AI and Software Cloud Services Consultant" />
  <meta property="og:image" content="https://www.cloudpro.ai/Image/logo/cloudpro-theme.png" />
  <meta property="og:url" content="https://www.cloudpro.ai/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="CloudPro.AI Services" />


  <meta name="twitter:card" content="CloudPro.AI Services" />
  <meta name="twitter:title" content="CloudPro.AI" />
  <meta name="twitter:description" content="Data, AI and Software Cloud Services Consultant" />
  <meta name="twitter:image" content="https://www.cloudpro.ai/Image/logo/cloudpro-theme.png" />


        </head>
      <body className={inter.className}>
        
        
        {children}
        <Script src="../../static/js/jquery.js"></Script>
        <Script src="../../static/js/script.js"></Script>
        <Script src="../../static/resources/Magnific-Popup-master/dist/jquery.magnific-popup.js"></Script>

        <Script src="../../static/resources/OwlCarousel2-2.3.4/dist/owl.carousel.js"></Script>

        <Script src="../../static/resources/WOW-master/dist/wow.js"></Script>
        <script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-LMLSG0PP51"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
        gtag('config', 'G-LMLSG0PP51');
      }
    `,
  }}
></script>
      </body>
    </html>
  );
}
