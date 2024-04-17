import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CloudPro.AI",
  description: "CloudPro.AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
            {children}
            <Script src="../../static/js/jquery.js"></Script>
            <Script src="../../static/js/script.js"></Script>

      </body>
    </html>
  );
}
