import Link from "next/link";
import DarkmodeSwitch from "./darkmode-switch";

const DesktopHeader = ({ user }: any) => {
  return (
    <header>
      <div className="desktopheader-container shadow-b-lean-300 flex justify-between gap-10 items-center px-20 pt-3">
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
