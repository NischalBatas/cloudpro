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
// export const metadata = {
//   title: "CloudPro.AI",
//   description: "Data, AI and Software Cloud Services Consultant",
// };


 
export const metadata= {
  title: {
    template: '%s | CloudPro.AI',
    default: 'CloudPro.AI',
  },
  description: 'Data, AI and Software Cloud Services Consultant',
  metadataBase: new URL('https://photos.google.com/share/AF1QipMWUcH0Wf38VEBPT5Z1NXfQcVqHYYFXeXot-UsyjcmgYy8RKgJUxBL1iq9iKFDtCQ/photo/AF1QipOLyMlHCYV7WpzAiwry9V9piTDDnOZqTKoSpc4Q?key=S0REYnRONmx4QlZCS0lVR2FkQ211MWk1UnBhYWdR'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="shortcut icon" href="/favicon.png" />
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
