import { cardComponents } from "../../constants/cardComponents";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="w-full md:py-[10rem] px-4 bg-white py-[2rem]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardComponents.map(
          ({
            id,
            name,
            image,
            price,
            storage,
            users,
            transfer,
            buttonText,
          }) => {
            return (
              <div
                className={
                  id == 2
                    ? "w-full shadow-xl flex flex-col p-4 y-4 rounded-lg hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-20 bg-gray-100"
                    : "w-full shadow-xl flex flex-col p-4 y-4 rounded-lg hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-20"
                }
                key={id}
              >
                <img
                  src={image}
                  className="md:w-20 mx-auto mt-[-3rem] bg-transparent w-16"
                  alt="single-img"
                />
                <h2 className="text-2xl font-bold text-center py-3">{name}</h2>
                <p className="text-center text-4xl font-bold">{price}</p>
                <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8 border-t">{storage}</p>
                  <p className="py-2 border-b mx-8">{users}</p>
                  <p className="py-2 border-b mx-8">{transfer}</p>
                </div>
                <button
                  className={
                    id == 2
                      ? "capitalize py-2 my-6 bg-black w-[200px] hover:bg-gray-900 rounded-md text-[#00df9a]  mx-auto font-medium"
                      : "capitalize py-2 my-6 bg-[#00df9a] w-[200px] hover:bg-[#00b87a] rounded-md text-black mx-auto font-medium"
                  }
                >
                  {buttonText}
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Cards;
