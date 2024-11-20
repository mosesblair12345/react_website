import "./Hero.scss";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] md:mt-[-50px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-5">
          Growing with data analytics
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-lg font-bold py-4">
            Fast, flexible finanacing for{" "}
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-lg font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-xl text-base font-bold text-gray-500 mx-auto mt-4 px-4">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="capitalize my-6 md:py-3 py-2  bg-[#00df9a] w-[200px] hover:bg-[#00b87a] rounded-md mx-auto text-black font-medium">
          get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
