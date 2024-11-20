import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="bg-[#000300] w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl text-lg font-bold">
            {" "}
            Want tips & tricks to optimize your flow?
          </h1>
          <p> Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="w-full p-2 border-2 border-gray-700 rounded-md focus:outline-none mt-5 sm:mt-0
              focus:ring-0  text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="capitalize ml-6 py-2 my-6 bg-[#00df9a] w-[200px] hover:bg-[#00b87a] rounded-md text-black font-medium">
              Sign Up
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
