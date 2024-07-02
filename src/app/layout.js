import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import GtmScript from "../components/tagManager/tagManger"; // Adjust the import path as necessary
import SegementKey from "@/components/segment/SegementKey";
import SegementRoute from "@/components/segment/SegementRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | CloudPro.AI",
    default: "CloudPro.AI",
  },
  description:
    "CloudPro.AI offers innovative AI, data, and software cloud services. We specialize in cloud engineering, generative AI apps, data engineering, BI & data analytics, mobile and web app development for businesses of all sizes. Our global partnerships include top-tier companies like AWS, Google, and Apple. Contact us to assess your business readiness for technological advancements.",
  generator: "CloudPro.AI",
  applicationName: "CloudPro.AI",
  referrer: "origin-when-cross-origin",
  keywords: [
    // ... (your keywords array)
  ],
  authors: [{ name: "Cloudpro.AI", url: "https://www.cloudpro.ai/" }],
  creator: "Cloudpro.AI",
  publisher: "Cloudpro.AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.cloudpro.ai/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "CloudPro.AI",
    description:
      "CloudPro.AI offers innovative AI, data, and software cloud services. We specialize in cloud engineering, generative AI apps, data engineering, BI & data analytics, mobile and web app development for businesses of all sizes. Our global partnerships include top-tier companies like AWS, Google, and Apple. Contact us to assess your business readiness for technological advancements.",
    url: "https://www.cloudpro.ai/",
    siteName: "CloudPro.AI",
    images: {
      url: "https://www.cloudpro.ai/Image/logo/cloudprotheme.jpg",
      width: 200,
      height: 200,
      alt: "cloudpro website",
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "CloudPro.AI",
    title: "CloudPro.AI",
    description:
      "CloudPro.AI offers innovative AI, data, and software cloud services. We specialize in cloud engineering, generative AI apps, data engineering, BI & data analytics, mobile and web app development for businesses of all sizes. Our global partnerships include top-tier companies like AWS, Google, and Apple. Contact us to assess your business readiness for technological advancements.",
    creator: "CloudPro.AI",
    images: {
      url: "https://www.cloudpro.ai/Image/logo/cloudprotheme.jpg",
      alt: "cloudpro website",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      new URL("/favicon.png", "https://www.cloudpro.ai"),
      { url: "/favicon.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/favicon.png"],
    apple: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  archives: ["https://www.cloudpro.ai"],
  bookmarks: ["https://www.cloudpro.ai"],
  category: "technology",
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/Image/logo/cloudprotheme.jpg",
      {
        url: "/Image/logo/cloudprotheme.jpg",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  appLinks: {
    ios: {
      url: "https://www.cloudpro.ai/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://www.cloudpro.ai/web",
      should_fallback: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GtmScript />
        {<SegementKey/>}
      </head>
      <body className={inter.className}>
        <SegementRoute>
        {children}
        <Analytics />
        <Script src="../../static/js/jquery.js"></Script>
        <Script src="../../static/js/script.js"></Script>
        </SegementRoute>
      </body>
    </html>
  );
}