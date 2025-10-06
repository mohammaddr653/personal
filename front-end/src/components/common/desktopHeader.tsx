import Link from "next/link";
import DarkmodeSwitch from "./darkmode-switch";
import { useScrollStore } from "@/store";

const DesktopHeader = ({ user }: any) => {
  const { isScrolled, setIsScrolled } = useScrollStore();

  return (
    <header className="fixed z-50 w-full max-w-screen">
      <div
        className={`desktopheader-container flex justify-between gap-10 items-center px-5 md:px-40 pt-3 transition-all duration-300 delay-150 ${
          isScrolled ? "bg-white dark:bg-neutral-900 shadow-b-lean-300 dark:shadow-b-lean-light" : "bg-transparent"
        }`}
      >
        <div>
          <img src="/Negar_1759320537226.png" alt="" width={60} />
        </div>
        <div className="flex gap-5 text-size14 text-primary">
          <Link href={"#"}>نمونه کار ها</Link>
          <Link href={"#"}>درباره من</Link>
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
