"use client";
import { roboto } from "@/app/ui/fonts";
import { useDarkStore } from "@/store";
import Image from "next/image";

const Contact = () => {
  const { darkmode, setDarkmode } = useDarkStore();

  return (
    <div
      id="contact-me"
      className="contact-container px-5 md:px-40 flex flex-col gap-6 text-neutral-800 dark:text-neutral-200"
    >
      <h3 className="text-2xl font-weight400">تماس با من :</h3>
      <div className=" flex justify-between gap-5 items-center">
        <div className="bg-green-400 flex-[3]">aefae</div>
        <div className="relative group dark:shadow dark:border border-secondary shadow-primary-glass rounded-lg flex-[2] overflow-hidden">
          <Image
            src={darkmode ? "/2147734183.jpg" : "/8419.jpg"}
            alt="form-background"
            className="absolute w-full object-center transition-transform duration-5000 group-hover:scale-150"
            fill={true}
          ></Image>
          <div className="relative z-10 flex flex-col gap-5 items-stretch bg-[#ffffff90] dark:bg-[#00000098]">
            <h4
              className={`text-center text-primary-glass dark:text-secondary text-2xl p-2 py-3 opacity-50 dark:opacity-30 ${roboto.className}`}
            >
              GET IN TOUCH
            </h4>
            <div className="flex flex-col gap-4">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
