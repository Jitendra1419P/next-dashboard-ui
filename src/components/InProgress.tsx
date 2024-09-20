import Image from "next/image";
import React from "react";

const InProgress = ({
  image,
  name,
  raiser,
}: {
  image: string;
  name: string;
  raiser: string;
}) => {
  return (
    <div className="mx-4 px-4 pb-4 mb-5 pt-3 shadow-md rounded-xl">
      <div className="flex gap-2 justify-between mb-2 ">
        <div className="flex items-center justify-between w-1/2">
          <div className="w-[35%] flex items-center justify-center">
            <Image src={image} alt="" width={65} height={65} />
          </div>
          <div className="w-[60%]">
            <h3 className="font-semibold text-base">{name}</h3>
            <p className="font-medium text-[12px] text-[#808080]">{raiser}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 w-1/2">
          <div className="text-[10px] px-3 py-1 border-2 border-[#4318FF] rounded-full bg-[#e1dbff]">
            Healthcare
          </div>
          <div className=" text-[10px] px-3 py-1 border-2 border-[#FF847C] rounded-full bg-[#fdebe9]">
            Technical Error
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-[#F4F7FE] my-4 rounded-full" />
      <div className="w-full p-2 my-2 flex justify-between">
        <h1 className="text-base font-medium ">Status Pending</h1>
      </div>
      {/* line */}
      <div className="w-full px-2 mb-2">
        <div className="w-full rounded-full h-1 bg-[#E5E6FF]">
          <div className="w-[65%] rounded-full h-1 bg-[#FBBC05]" />
        </div>
      </div>
    </div>
  );
};

export default InProgress;
