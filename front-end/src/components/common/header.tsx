"use client";
import { BREAK_POINTS } from "../../../config";
import { useScrollStore, useUserStore, useWidthStore } from "../../store";
import { nastaliq } from "@/app/ui/fonts";
import Link from "next/link";
import DarkmodeSwitch from "./darkmode-switch";
import MenuSvg from "../icons/menu-svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState<boolean>(false);
  const { isScrolled, setIsScrolled } = useScrollStore();
  const { user } = useUserStore();
  const pathname = usePathname(); // Detects route changes

  useEffect(() => {
    setMobileMenuShow(false); //با هربار تغییر آدرس منوی موبایل بسته شود
  }, [pathname]);

  return (
    <header className="fixed z-50 w-full max-w-screen">
      <div
        className={`header-container relative flex justify-between gap-10 items-center px-5 md:px-40 py-4 transition-all duration-300 delay-150 ${
          isScrolled
            ? "bg-[#ffffffeb] dark:bg-[#171717ef] shadow-b-lean-300 dark:shadow-b-lean-light backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div>
          <h1
            className={`${nastaliq.className} text-4xl text-primary dark:text-secondary font-weight400`}
          >
            محمدامین درخشنده
          </h1>
        </div>
        <div className="hidden md:flex gap-5 text-size14 text-primary dark:text-secondary">
          <Link href={"#about-me"}>درباره من</Link>
          <Link href={"#my-skills"}>مهارت ها</Link>
          <Link href={"#my-projects"}>نمونه کار ها</Link>
          <Link href={"#contact-me"}>تماس با من</Link>
        </div>
        <div className="flex gap-2 items-center text-primary dark:text-secondary">
          {user && user.isadmin ? (
            <Link href={"/admin"} className="cu-button-primary dark:bg-red-600">
              پنل ادمین
            </Link>
          ) : null}
          <DarkmodeSwitch></DarkmodeSwitch>
          <MenuSvg
            width={30}
            fill={"currentColor"}
            className={"cursor-pointer md:hidden"}
            onClick={() => setMobileMenuShow(true)}
          ></MenuSvg>
        </div>
        {mobileMenuShow ? (
          <div
            onClick={() => setMobileMenuShow(false)}
            className="mobileMenu-overlay bg-glass-shadow w-[100%] h-[100dvh] right-0 top-0 absolute"
          ></div>
        ) : null}
        <div
          className={`mobileMenu h-[100dvh] w-[90%] bg-white dark:bg-neutral-900 absolute transition-[left] duration-500 top-0 ${
            mobileMenuShow ? "left-0" : "left-[-100%]"
          }`}
        >
          afef
          <button onClick={() => setMobileMenuShow(false)}>close</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
