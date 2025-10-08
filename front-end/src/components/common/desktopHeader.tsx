import Link from "next/link";
import DarkmodeSwitch from "./darkmode-switch";
import { useScrollStore } from "@/store";

const DesktopHeader = ({ user }: any) => {
  const { isScrolled, setIsScrolled } = useScrollStore();

  return (
    <header className="fixed z-50 w-full max-w-screen">
      <div
        className={`desktopheader-container flex justify-between gap-10 items-center px-5 md:px-40 transition-all duration-300 delay-150 ${
          isScrolled
            ? "bg-[#ffffffeb] dark:bg-[#171717ef] shadow-b-lean-300 dark:shadow-b-lean-light backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div>
          <img src="/Negar_1759320537226.png" alt="" width={60} />
        </div>
        <div className="flex gap-5 text-size14 text-primary dark:text-secondary">
          <Link href={"#about-me"}>درباره من</Link>
          <Link href={"#my-skills"}>مهارت ها</Link>
          <Link href={"#my-projects"}>نمونه کار ها</Link>
          <Link href={"#"}>تماس با من</Link>
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

export default DesktopHeader;
