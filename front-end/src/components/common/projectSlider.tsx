import BootstrapSvg from "../icons/bootstrap-svg";
import CheckSvg from "../icons/check-svg";
import ReactSvg from "../icons/react-svg";
import TypescriptSvg from "../icons/typescript-svg";

const ProjectSlider = () => {
  return (
    <div className="projectslider-container w-full flex flex-col-reverse md:flex-row justify-between items-start md:gap-5">
      <div className="flex flex-[4] flex-col self-stretch md:self-auto gap-7 py-5 h-fit">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h5 className="text-center text-2xl font-weight400 text-primary dark:text-secondary">
            الکران
          </h5>
          <p className=" text-center text-size15 font-weight200">
            الکران یعنی یک مرجع تخصصی برای خودروهای الکتریکی
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-weight300">درباره این پروژه :</p>
          <ul className="text-neutral-800 dark:text-neutral-300 font-weight200 flex flex-col gap-2 text-size15">
            <li className="flex gap-1 items-start">
              <CheckSvg width={15} fill={"currentColor"}></CheckSvg>
              طراحی کاملا ریسپانسیو
            </li>
            <li className="flex gap-1 items-start">
              <CheckSvg width={15} fill={"currentColor"}></CheckSvg>
              الهام گرفته شده از ویجیاتو
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-2 mt-2">
          <button className="border border-primary rounded-lg p-2 text-primary">
            ریپازیتوری گیت هاب
          </button>
          <button className="border border-neutral-800 rounded-lg p-2 px-3 cursor-pointer text-neutral-800 bg-secondary">
            نمونه آنلاین
          </button>
        </div>
      </div>
      <div className="flex flex-[9] justify-end relative h-fit">
        <figure className="w-full aspect-[1027/642] relative text-neutral-900 dark:text-neutral-200 h-fit">
          <div className="top-0 right-0 absolute w-full">
            <img src="/f9ccd1187b7c1c3c4d6ecc3b4be12efe.png" alt="laptop" />
          </div>
          <div className="relative image-wrapper w-[76%] h-[80%] mx-auto bg-amber-700 outline-4 outline-black rounded-lg mt-[2%] overflow-y-scroll scrollbar-hide">
            <img
              src="/localhost_3000_ (7).jpg"
              alt="elecrun web design"
              className="object-cover"
            />
          </div>
        </figure>
        <figure className="w-[20%] absolute bottom-0 right-[-2px] aspect-[526/961] text-neutral-900 dark:text-neutral-200">
          <div className="top-0 right-0 absolute w-full h-full">
            <img src="/30c3c9f943e1f47729c6a627bb02ccef.png" alt="smartphone" />
          </div>
          <div className="relative image-wrapper w-[75%] h-[73%] mx-auto bg-amber-700 outline-2 outline-black mt-[21%] overflow-y-scroll scrollbar-hide">
            <img
              src="/localhost_3000_ (8).png"
              alt="elecrun responsive web design"
            />
          </div>
        </figure>
        <div className="flex dark:bg-white w-[8%] p-2 border border-neutral-300 rounded-lg flex-col absolute left-0 top-0 items-end">
          <ReactSvg className={"w-full"}></ReactSvg>
          <TypescriptSvg className={"w-full"}></TypescriptSvg>
          <BootstrapSvg className={"w-full"}></BootstrapSvg>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
