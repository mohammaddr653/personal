//این کامپوننت داده های اولیه مورد نیاز ما را میگیرد و در گلوبال ذخیره میکند

"use client";
import { useScrollStore, useWidthStore } from "@/store";
import { useEffect } from "react";
import axios from "axios";
import useLoadUser from "@/hooks/useLoadUser";

const ClientBootstrap = () => {
  const { user, getAuthedUser } = useLoadUser();
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

  return null;
};

export default ClientBootstrap;
