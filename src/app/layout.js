import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import "../../static/resources/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css";
import "../../static/resources/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
import "../../static/resources/animate.css-main/animate.css";
import { Theme } from "@radix-ui/themes";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "CloudPro.AI",
  description: "Data, AI and Software Cloud Services Consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="shortcut icon" href="/favicon.png" />
        <Suspense>{children}</Suspense>
        <Script src="../../static/js/jquery.js"></Script>
        <Script src="../../static/js/script.js"></Script>
        <Script src="../../static/resources/Magnific-Popup-master/dist/jquery.magnific-popup.js"></Script>

        <Script src="../../static/resources/OwlCarousel2-2.3.4/dist/owl.carousel.js"></Script>

        <Script src="../../static/resources/WOW-master/dist/wow.js"></Script>
      </body>
    </html>
  );
}
