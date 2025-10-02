"use client";
import type { Metadata } from "next";
import "../assets/css/globals.css";
import DesktopHeader from "@/components/common/desktopHeader";
import Footer from "@/components/common/footer";
import { Toaster } from "sonner";
import useLoadUser from "@/hooks/useLoadUser";
import axios from "axios";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, userLoading, getAuthedUser } = useLoadUser();

  useEffect(() => {
    axios.defaults.withCredentials = true; //sends httponly cookies to the server by default
    getAuthedUser(); //if token exist , set the user
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col">
        <Toaster position="top-right" />
        <DesktopHeader user={user}></DesktopHeader>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
