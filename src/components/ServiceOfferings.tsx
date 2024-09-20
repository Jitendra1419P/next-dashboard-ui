import React from "react";
import PiaDivChart from "./PiaDivChart";
import LineDivChart from "./LineDivChart";

const ServiceOfferings = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full py-5 pl-5">
      {/* Title */}
      <div className="w-full pt-2 pl-3 mb-3 flex">
        <h1 className="text-xl font-semibold ">Service offerings</h1>
      </div>
      <div className="w-full p-1 flex">
        <div className="w-[20%]">
          <PiaDivChart />
        </div>
        <div className="w-[75%]">
          <LineDivChart />
        </div>
      </div>
      <div className="w-full px-5 pt-3">
        <div className="flex items-start justify-start gap-6 mb-3">
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#3FE900] mt-1" />
            <h2 className="text-[13px] text-[#808080]">
              Number of active services{" "}
            </h2>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#FFE603] mt-1" />
            <h2 className="text-[13px] text-[#808080]">New services added</h2>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#FF0000] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Services removed </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;
