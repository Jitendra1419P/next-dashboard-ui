import React from "react";
import ServiceProviderPieChart from "./ServiceProviderPieChart";
import Image from "next/image";

const ServiceProvider = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-5">
      {/* Title */}
      <div className="w-full pt-3 pl-3 mb-5 flex">
        <h1 className="text-xl font-semibold ">Total Orders</h1>
      </div>
      <div className="flex items-start justify-start gap-8 mb-3">
        <div className="w-1/2 p-3 border-[1px] ml-5 rounded-xl border-[#d8d8d8]">
          <h3 className="flex items-center justify-center text-sm text-[#a4a4a4] mb-5 pt-2">
            Service Provider accross different Segments{" "}
          </h3>
          <ServiceProviderPieChart />
        </div>
        <div className="w-1/2 p-3 border-[1px] mr-7 rounded-xl border-[#d8d8d8]">
          <h3 className="flex items-center justify-center text-sm text-[#a4a4a4] mb-7 px-6 pt-2">
            Attributes as per location, years of experience, specialization
          </h3>
          <div className="flex items-center justify-center">
            <Image src="/Map.svg" alt="" width={250} height={300} />
          </div>
        </div>
      </div>
      <div className="w-full px-5 pt-3">
        <div className="flex items-start justify-start gap-6 mb-3">
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#FF847C] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Healthcare Sector</h2>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#165DC9] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Construction Sector</h2>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#48CFAF] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Home Services Sector</h2>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#FFB5B1] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Petcare Sector</h2>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#722391] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Entertainment Sector</h2>
          </div>
        </div>
        <div className="flex items-start justify-start gap-6">
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#FFDC7E] mt-1" />
            <h2 className="text-[13px] text-[#808080]">Event Sector</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
