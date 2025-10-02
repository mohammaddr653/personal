import Link from "next/link";

const DesktopHeader = () => {
  return (
    <header>
      <div className="desktopheader-container flex justify-between gap-10 items-center px-20 pt-3">
        <div>
          <img src="/Negar_1759320537226.png" alt="" width={60} />
        </div>
        <div className="flex gap-5 text-size14 text-primary">
          <Link href={"#"}>نمونه کار ها</Link>
          <Link href={"#"}>درباره من</Link>
          <Link href={"#"}>تماس با من</Link>
        </div>
        <div>
          ❤
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
