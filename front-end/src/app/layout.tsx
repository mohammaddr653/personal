"use client";
import "../assets/css/globals.css";
import DesktopHeader from "@/components/common/desktopHeader";
import Footer from "@/components/common/footer";
import { Toaster } from "sonner";
import useLoadUser from "@/hooks/useLoadUser";
import axios from "axios";
import { useEffect } from "react";
import { useScrollStore, useWidthStore } from "@/store";
import { iransans } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, userLoading, getAuthedUser } = useLoadUser();
  const { isScrolled, setIsScrolled } = useScrollStore();
  const { width, setWidth } = useWidthStore();

  function handleScroll() {
    let lastScrollTop = 0;
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      isScrolled ? null : setIsScrolled(true);
    } else if (st === 0) {
      setIsScrolled(false);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    axios.defaults.withCredentials = true; //sends httponly cookies to the server by default
    getAuthedUser(); //if token exist , set the user
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body
        className={`bg-white dark:bg-neutral-900 font-weight300 flex flex-col ${iransans.className} max-w-screen mx-auto`}
      >
        <Toaster position="top-right" />
        <DesktopHeader user={user}></DesktopHeader>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
