"use client";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 450 },
  { name: "Group B", value: 200 },
];
const COLORS = ["#4A3AFF", "#FBBC05"];

const PieChartsDiv = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-5">
      {/* Title */}
      <div className="w-full mb-5 flex items-center justify-center">
        <h1 className="text-base font-bold ">Total Orders</h1>
      </div>
      {/* Chart */}
      <div className="w-full relative">
        <PieChart
          width={600}
          height={300}
          className="flex mt-[-125px] mb-[27px]"
        >
          <Pie
            data={data}
            cx={120}
            cy={200}
            startAngle={250}
            endAngle={-70}
            innerRadius="50%"
            outerRadius="60%"
            fill="#4A3AFF"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute top-52 left-32 -translate-x-1/2 -translate-y-1/2">
          <p className="text-[12px] text-[#808080] pb-1">Total Order</p>
          <h1 className="text-xl font-bold">89,500</h1>
        </div>
      </div>
      {/* Bottom */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-1 w-full mb-1 pb-1">
          <div className="flex justify-center content-start  w-1/3 ">
            <div className="w-6 h-1 bg-[#4A3AFF] rounded-2xl " />
          </div>
          <div className="w-2/3">
            <p className="text-[12px] text-[#808080] pb-1">Active Orders</p>
            <h3 className="text-base font-bold">10,05,165</h3>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 w-full mb-1 pb-1">
          <div className="flex items-center justify-center w-1/3 ">
            <div className="w-6 h-1 bg-[#FBBC05] rounded-2xl" />
          </div>
          <div className="w-2/3">
            <p className="text-[12px] text-[#808080] pb-1">Completed Orders</p>
            <h3 className="text-base font-bold">25,00,916</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartsDiv;
