import "../assets/css/globals.css";
import Footer from "@/components/common/footer";
import { Toaster } from "sonner";
import { iransans } from "./ui/fonts";
import Header from "@/components/common/header";
import ClientBootstrap from "@/components/common/clientBootstrap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`bg-white dark:bg-neutral-900 transition-colors duration-300 font-weight300 flex flex-col ${iransans.className} max-w-screen mx-auto`}
      >
        <ClientBootstrap></ClientBootstrap>
        <Toaster position="top-right" />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
