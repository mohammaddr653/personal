"use client";
import { BREAK_POINTS } from "../../../config";
import { useScrollStore, useUserStore, useWidthStore } from "../../store";
import { nastaliq } from "@/app/ui/fonts";
import Link from "next/link";
import DarkmodeSwitch from "./darkmode-switch";

const Header = () => {
  const { isScrolled, setIsScrolled } = useScrollStore();
  const { user } = useUserStore();

  return (
    <header className="fixed z-50 w-full max-w-screen">
      <div
        className={`desktopheader-container flex justify-between gap-10 items-center px-5 md:px-40 py-4 transition-all duration-300 delay-150 ${
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
        <div className="flex gap-5 text-size14 text-primary dark:text-secondary">
          <Link href={"#about-me"}>درباره من</Link>
          <Link href={"#my-skills"}>مهارت ها</Link>
          <Link href={"#my-projects"}>نمونه کار ها</Link>
          <Link href={"#contact-me"}>تماس با من</Link>
        </div>
        <div className="flex gap-2 items-center">
          {user && user.isadmin ? (
            <Link href={"/admin"} className="cu-button-primary dark:bg-red-600">
              پنل ادمین
            </Link>
          ) : null}
          <DarkmodeSwitch></DarkmodeSwitch>
        </div>
      </div>
    </header>
  );
};

export default Header;
