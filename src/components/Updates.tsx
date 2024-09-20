"use client";

const Updates = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-5">
      {/* Title */}
      <div className="w-full mb-5 flex justify-between">
        <h1 className="text-base font-bold ">Updates (10)</h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      {/* body */}
      <div className="w-full">
        <div className="p-4 border-2 border-[#FA18FF] rounded-xl bg-[#FFF0FF] mb-4">
          <h1 className="font-medium text-[14px] text-[#2B3674]">
            Title of the update
          </h1>
          <p className="text-[12px] text-[#72768B] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="p-4 border-2 border-[#11BEA9] rounded-xl bg-[#F1FFFD] mb-4">
          <h1 className="font-medium text-[14px] text-[#2B3674]">
            Title of the update
          </h1>
          <p className="text-[12px] text-[#72768B] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="p-4 border-2 border-[#FA18FF] rounded-xl bg-[#FFF0FF] mb-4">
          <h1 className="font-medium text-[14px] text-[#2B3674]">
            Title of the update
          </h1>
          <p className="text-[12px] text-[#72768B] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
