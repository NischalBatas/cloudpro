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
    "artificial intelligence",
    "machine learning",
    "cloud computing",
    "cloud services",
    "AI solutions",
    "cloud platform",
    "data analytics",
    "cloud infrastructure",
    "AI technology",
    "cloud hosting",
    "SaaS solutions",
    "AI development",
    "cloud storage",
    "PaaS platform",
    "cloud security",
    "AI applications",
    "cloud migration",
    "deep learning",
    "cloud integration",
    "AI research",
    "hybrid cloud",
    "cloud provider",
    "AI innovation",
    "multi-cloud",
    "cloud optimization",
    "natural language processing",
    "cloud management",
    "AI automation",
    "cloud deployment",
    "edge computing",
    "AI tools",
    "serverless computing",
    "AI consulting",
    "cloud-native",
    "AI systems",
    "cloud backup",
    "computer vision",
    "cloud development",
    "AI-powered",
    "public cloud",
    "AI-driven",
    "private cloud",
    "AI algorithms",
    "cloud ecosystem",
    "AI platforms",
    "cloud networking",
    "AI data processing",
    "cloud architecture",
    "intelligent systems",
    "cloud solutions",
    "AI integration",
    "cloud strategy",
    "AI advancements",
    "cloud transformation",
    "AI frameworks",
    "cloud orchestration",
    "AI software",
    "cloud performance",
    "AI-driven insights",
    "cloud computing trends",
    "AI deployment",
    "cloud cost management",
    "AI models",
    "cloud scalability",
    "AI analytics",
    "cloud automation",
    "AI innovation hub",
    "cloud service management",
    "AI business solutions",
    "cloud consultancy",
    "AI ethics",
    "cloud modernization",
    "AI ethics and governance",
    "cloud data protection",
    "AI project management",
    "cloud solutions architect",
    "AI research and development",
    "cloud computing services",
    "AI business intelligence",
    "cloud-based AI",
    "AI data security",
    "cloud innovation",
    "AI product development",
    "cloud service provider",
    "AI infrastructure",
    "cloud collaboration",
    "AI-driven applications",
    "cloud-based solutions",
    "AI-driven decision making",
    "cloud technology trends",
    "AI-powered analytics",
    "cloud computing benefits",
    "AI and big data",
    "cloud hosting services",
    "AI-enabled services",
    "cloud software development",
    "AI-driven marketing",
    "cloud business solutions",
    "AI-powered cloud",
    "cloud engineering",
    "AI-powered tools",
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