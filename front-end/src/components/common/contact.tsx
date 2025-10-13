"use client";
import { roboto } from "@/app/ui/fonts";
import { useDarkStore, useWidthStore } from "@/store";
import Image from "next/image";
import PhoneSvg from "../icons/phone-svg";
import EmailSvg from "../icons/email-svg";
import LocationSvg from "../icons/location-svg";
import { BREAK_POINTS } from "../../../config";

const Contact = () => {
  const { width, setWidth } = useWidthStore();

  return (
    <div
      id="contact-me"
      className="contact-container px-5 md:px-40 flex flex-col gap-6 text-neutral-800 dark:text-neutral-200 scroll-mt-20"
    >
      <h3 className="text-2xl font-weight400">تماس با من :</h3>
      <div className="relative overflow-hidden">
        {width < BREAK_POINTS.md ? null : (
          <video
            src="/2040076-hd_1920_1080_24fps.mp4"
            className="absolute object-center object-cover h-full w-full"
            poster="/Annotation 2025-10-12 171545.jpg"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        )}
        <div className="relative z-10 flex items-stretch p-2 md:p-15 gap-10 justify-between md:bg-[#ffffff77] md:dark:bg-[#000000bd] bg-transparent">
          <div className="flex-[7] hidden md:flex items-center justify-start">
            <Image
              src={"/Annotation 2025-10-12 172044.png"}
              alt="lets talk - typography"
              className="w-full object-cover"
              width={763}
              height={387}
            ></Image>
          </div>
          <div className="flex md:backdrop-blur-xl shadow shadow-primary-glass rounded-lg flex-[3] flex-col gap-5 py-5 px-10 pb-6 items-stretch">
            <h4
              className={`text-center text-primary-glass dark:text-secondary text-2xl opacity-50 dark:opacity-30 ${roboto.className} font-weight800`}
            >
              GET IN TOUCH
            </h4>
            <form className="flex flex-col items-stretch gap-4">
              <input
                type="text"
                placeholder="نام"
                className=" text-primary transition-all duration-300 dark:text-neutral-600 bg-[#fafafaea] border border-transparent backdrop-blur-lg scrollbar-hide focus:border-secondary focus:shadow shadow-secondary rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="ایمیل یا شماره تماس"
                className=" text-primary transition-all duration-300 dark:text-neutral-600 bg-[#fafafaea] border border-transparent backdrop-blur-lg scrollbar-hide focus:border-secondary focus:shadow shadow-secondary rounded-lg p-2"
              />
              <textarea
                placeholder="پیام خود را بنویسید"
                className=" resize-none transition-all duration-300 text-primary dark:text-neutral-600 bg-[#fafafaea] border border-transparent backdrop-blur-lg scrollbar-hide h-[100px] focus:border-secondary focus:shadow shadow-secondary rounded-lg p-2"
              />
              <button
                type="submit"
                className=" text-shadow transition-all duration-300 hover:animate-pulse cursor-pointer text-neutral-50 rounded-lg p-2 bg-primary border border-transparent hover:border-secondary hover:shadow shadow-secondary"
              >
                تایید و ارسال
              </button>
            </form>
            <div
              className={`flex flex-col items-stretch text-left text-sm gap-3 ${roboto.className} font-weight500 text-neutral-600 dark:text-neutral-300 dark:text-shadow-md`}
            >
              <h4 className="flex flex-row-reverse gap-1 items-end">
                <PhoneSvg width={20} fill={"currentColor"}></PhoneSvg>
                0989377372231
              </h4>
              <h4 className="flex flex-row-reverse gap-1 items-end">
                <EmailSvg width={20} fill={"currentColor"}></EmailSvg>
                mohammaddr653@gmail.com
              </h4>
              <h4 className="flex flex-row gap-1 items-center" dir="ltr">
                <LocationSvg width={20} fill={"currentColor"}></LocationSvg>
                Iran , Khozestan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
