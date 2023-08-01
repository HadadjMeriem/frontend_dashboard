import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { LineChart } from "../components";
import { useStateContext } from "../context/contextProvider";
import { generalInfo } from "../data/utils";
import Button from "../components/Button";

const Accueil = () => {
  return (
    <div className="mt-12">
         <div className="flex ml-20 mt-10 text-2xl pb-5 font-semibold ui-sans-serif">
            <h1>Bilan Générale</h1>
          </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-contain bg-right bg-center">
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Tests effectuees</p>
              <p className="text-2xl">1000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="#5703C1"
              text="plus"
              borderRadius="10px"
              size="md"
            ></Button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {generalInfo.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                    {item.amount}

                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}

                </span>

              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className="flex justify-between">
                <p className="font-semibold text-xl">
                      Performances du modele
                </p>
                <div className="flex items-center gap-4">
                    <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                        <span>
                            <GoPrimitiveDot></GoPrimitiveDot>
                        </span>
                        <span>
                            Accuracy
                        </span>
                    </p>
                    <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                        <span>
                            <GoPrimitiveDot></GoPrimitiveDot>
                        </span>
                        <span>
                            Specificite
                        </span>
                    </p>

                </div>  

            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
                <div className="border-r-1 border-color m-4 pr-10">
                    <div>
                        <p>
                            <span className="text-3xl font-semibold">93.7%</span>
                            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">1%</span>
                        </p>
                        <p className="text-gray-500 mt-1">
                            Accuracy
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="text-3xl font-semibold">70.7%</span>
                          
                        </p>
                        <p className="text-gray-500 mt-1">
                            Speceficity
                        </p>
                    </div>
                    <div className="mt-5">
                        <LineChart>
                          
                        </LineChart>

                    </div>
                 </div>
       


            </div>

        </div>

      </div>
    </div>
  );
};

export default Accueil;
