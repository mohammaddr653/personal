import "../../assets/css/greetings.css";
const Greetings = () => {
  return (
    <div className="bg-[url(/Background_Image.jpg)] w-full bg-bottom object-cover h-[700px] bg-no-repeat bg-[#ffffffb3] bg-blend-lighten flex justify-between items-center px-36">
      <div className="font-vazir font-weight500 ms-4 text-neutral-800">
        <p className="text-2xl hello-typing">سلام ،</p>
        <p className="text-5xl my-5">محمد امین درخشنده</p>
        <p className="text-2xl ">توسعه دهنده وب</p>
      </div>
      <img src="/7247961_35736489.png" alt="" width={500} />
    </div>
  );
};

export default Greetings;
