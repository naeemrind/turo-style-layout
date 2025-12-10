import React from "react";
import cars from "./api.js";
import "./App.css";

const App = () => {
  const card =
    "bg-[#fefefe] border border-[#D1D0CE] hover:border-[#75d8b4] p-2 w-[320px] h-[310px] rounded-xl hover:bg-[#eff9f6] active:bg-[#eff9f6] cursor-pointer transition duration-400 ease-in-out";
  return (
    <>
      <div className="container min-w-full flex flex-row justify-center py-4 sm:py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center max-w-[1100px] p-4 md:p-8 place-items-center mx-auto">
          {cars.map((car, index) => (
            <div key={car.id} className={card}>
              <img src={car.image} alt="car" className="w-[100%] rounded-lg" />
              <h2 className="text-lg font-bold py-2 pl-[8px]">{car.title}</h2>
              <div className="flex justify-between p-2">
                <p className="text-sm text-gray-600">
                  {car.trips > 0
                    ? `${car.trips} trip${car.trips > 1 ? "s" : ""}`
                    : "New Listing"}
                </p>
                <p>{car.rating}</p>
              </div>
              <div className="flex justify-between p-2">
                <p>
                  <span
                    className={`bg-green-100 border border-green-500 text-xs rounded-2xl text-sm w-full h-full py-[4px] px-[12px] text-green-950 ${
                      !car.save && "invisible"
                    }`}
                  >
                    Save {car.save ?? ""}
                  </span>
                </p>
                <p className="text-sm font-semibold">
                  ${car.price} for {car.priceDuration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center p-4 mt-10 mb-0 text-sm text-[#827c4b] bg-[#f7f2f2] w-full border-t border-t-[#c4bcbc]">
        &copy; Naeem Rind, 2025
      </footer>
    </>
  );
};

export default App;
