"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Active_Service_Provider: 95,
    Service_Provider_Retension_Rate: 45,
    New_Service_Provider: 79,
    Service_Completion_Rate: 95,
    Total_Service_Provider: 75,
    Average_Rating: 20,
  },
];

const SectorPerformance = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-5">
      {/* Title */}
      <div className="w-full mb-5 flex">
        <h1 className="text-base font-bold ">Total Orders</h1>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={40}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E5EF"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{
              fill: "#d1d5db",
            }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{
              fill: "#d1d5db",
            }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightgrey",
              background: "#fff",
            }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          />
          <Bar
            dataKey="Active_Service_Provider"
            fill="#FF5D8D"
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="Service_Provider_Retension_Rate"
            fill="#72BBFF"
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="New_Service_Provider"
            fill="#11BEA9"
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="Service_Completion_Rate"
            fill="#FF834D"
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="Total_Service_Provider"
            fill="#FA18FF"
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="Average_Rating"
            fill="#FBBC05"
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SectorPerformance;
