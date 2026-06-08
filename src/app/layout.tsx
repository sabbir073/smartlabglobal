export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import "./globals.scss";
import "./contentStyles.css";
import ReduxProvider from "@/store/provider";
import ToastListener from "@/components/common/toast/toastListener";
import { SITE_INFORMATION } from "@/config/seo";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ChromeGate from "@/components/layout/chromeGate";
import { inter, poppins } from "./fonts";

export const metadata: Metadata = {
  title: SITE_INFORMATION.appName,
  description: SITE_INFORMATION.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`antialiased`}>
        <ReduxProvider>
          <div className="min-h-[100dvh] flex flex-col ">
            <ChromeGate>
              <Header />
            </ChromeGate>
            <div className="flex-grow"> {children}</div>
            <ChromeGate>
              <Footer />
            </ChromeGate>
          </div>
          <ToastListener />
        </ReduxProvider>
      </body>
    </html>
  );
}
