import React from "react";
import BarGraph from "./charts/BarGraph";
import BarGraphPath from "./charts/BarGraphPath";
import PieChart from "./charts/PieChart";
import PieChartPath from "./charts/PieChartPath";
const ICBHI = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="flex ml-20 mt-10  rounded-xl text-2xl pb-5 font-semibold ui-sans-serif">
          {" "}
          Distribution des classes
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 m-10 h-3/4 w-3/4">
          <div>
            <BarGraph />
          </div>
          <div>
            <PieChart></PieChart>
          </div>
          <div>
          <PieChartPath></PieChartPath>
       
          </div>
          <div>
          <BarGraphPath />
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default ICBHI;
