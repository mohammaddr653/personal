import { useDarkStore } from "@/store";
import Image from "next/image";

const Footer = () => {
  const { darkmode, setDarkmode } = useDarkStore();

  return (
    <footer className="mt-auto">
      <div className="footer-container bg-[url(/2147734183.jpg)] dark:bg-[url(/417214515_fb463481-61a6-4dde-9787-66a180fa208c.jpg)] bg-cover bg-center bg-[#ffffffb3] dark:bg-[#000000bd] bg-blend-lighten dark:bg-blend-darken px-5 md:px-40 text-neutral-800 dark:text-neutral-200">
        <div className="flex flex-col h-100 w-full overflow-y-hidden">
          <div className="mt-auto">
            <Image
              src={darkmode ? "/derakhshande-dark.png" : "/derakhshande.png"}
              alt="تایپوگرافی"
              width={1906}
              height={133}
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
