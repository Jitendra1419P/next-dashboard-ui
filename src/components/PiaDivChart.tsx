"use client";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 450 },
  { name: "Group B", value: 180 },
  { name: "Group C", value: 100 },
];
const COLORS = ["#3FE900", "#FFE603", "#FF0000"];

const PiaDivChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-5">
      {/* Title */}
      {/* <div className="w-full mb-5 flex items-center justify-center">
        <h1 className="text-base font-bold ">Total Orders</h1>
      </div> */}
      {/* Chart */}
      <div className="w-full relative">
        <PieChart
          width={600}
          height={300}
          className="flex mt-[-125px] mb-[27px]"
        >
          <Pie
            data={data}
            cx={90}
            cy={200}
            startAngle={360}
            endAngle={0}
            innerRadius="35%"
            outerRadius="60%"
            fill="#FFE603"
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
      </div>
    </div>
  );
};

export default PiaDivChart;
