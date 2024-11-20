import "./Analytics.scss";
import analyticsImg from "../../assets/analytics.png";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={analyticsImg}
          alt="analytics-image"
          className="w-[250px] md:w-[350px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold py-2">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-3">
            Manage Data Analtics Centrally
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            viverra, ipsum sed laoreet bibendum, sapien nisl iaculis tellus, at
            fringilla metus magna non neque. Praesent hendrerit ipsum ex, et
            rhoncus.
          </p>
          <button className="capitalize my-6 md:py-3 py-2 bg-black w-[200px] hover:bg-gray-900 rounded-md mx-auto md:mx-0 text-[#00df9a] font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
