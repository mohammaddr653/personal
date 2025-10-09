import { vazir } from "@/app/ui/fonts";
import SocialIcons from "./social-icons";
import TypeWriter from "./typeWriter";

const Greetings = () => {
  return (
    <div className="bg-[url(/Background_Image.jpg)] dark:bg-[url(/jason-mavrommatis-FzURx0rFhUk-unsplash.jpg)] w-full bg-bottom dark:bg-center bg-cover h-[700px] bg-no-repeat bg-[#ffffffb3] dark:bg-[#000000bd] bg-blend-lighten dark:bg-blend-darken flex flex-col gap-5 justify-center items-center px-2 md:px-36">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-5 w-full h-full">
        <div
          className={`${vazir.className} text-shadow-xs dark:text-shadow-sm text-shadow-lime-400 dark:text-shadow-primary font-weight600 ms-4 text-neutral-800 dark:text-neutral-50 flex flex-col gap-2 md:gap-5 items-center md:items-start`}
        >
          <TypeWriter
            text={"سلام 👋"}
            speed={200}
            className="text-2xl hidden md:flex"
          ></TypeWriter>
          <TypeWriter
            text={"محمد امین درخشنده"}
            speed={200}
            className="text-2xl md:text-5xl leading-tight"
          ></TypeWriter>
          <TypeWriter
            text={"توسعه دهنده وب 💻"}
            speed={200}
            className="text-size15 md:text-2xl"
          ></TypeWriter>
        </div>
        <img src="/7247961_35736489.png" alt="" width={500} />
      </div>
      <div className="flex mt-auto mb-5 gap-3 text-neutral-700 dark:text-neutral-50">
        <SocialIcons
          width={"20px"}
          height={"20px"}
          fill={"currentColor"}
        ></SocialIcons>
      </div>
    </div>
  );
};

export default Greetings;
