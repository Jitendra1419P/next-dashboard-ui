"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "MOM",
    Active_Service_Provider: 3200,
    Service_Provider_Retension_Rate: 3100,
    New_Service_Provider: 1000,
    Service_Completion_Rate: 1800,
    Total_Service_Provider: 2200,
    Average_Rating: 2500,
  },
  {
    name: "TUE",
    Active_Service_Provider: 3200,
    Service_Provider_Retension_Rate: 4300,
    New_Service_Provider: 1300,
    Service_Completion_Rate: 1000,
    Total_Service_Provider: 3000,
    Average_Rating: 2200,
  },
  {
    name: "WED",
    Active_Service_Provider: 2500,
    Service_Provider_Retension_Rate: 3000,
    New_Service_Provider: 4000,
    Service_Completion_Rate: 2300,
    Total_Service_Provider: 1800,
    Average_Rating: 3900,
  },
  {
    name: "THD",
    Active_Service_Provider: 3500,
    Service_Provider_Retension_Rate: 2500,
    New_Service_Provider: 1600,
    Service_Completion_Rate: 1300,
    Total_Service_Provider: 3050,
    Average_Rating: 3500,
  },
  {
    name: "FRI",
    Active_Service_Provider: 2500,
    Service_Provider_Retension_Rate: 4200,
    New_Service_Provider: 2100,
    Service_Completion_Rate: 4200,
    Total_Service_Provider: 3500,
    Average_Rating: 4000,
  },
  {
    name: "SAT",
    Active_Service_Provider: 4000,
    Service_Provider_Retension_Rate: 3000,
    New_Service_Provider: 3300,
    Service_Completion_Rate: 2000,
    Total_Service_Provider: 1900,
    Average_Rating: 2800,
  },
  {
    name: "SUN",
    Active_Service_Provider: 3500,
    Service_Provider_Retension_Rate: 4100,
    New_Service_Provider: 2800,
    Service_Completion_Rate: 3800,
    Total_Service_Provider: 2900,
    Average_Rating: 3700,
  },
];

const AreaChart = () => {
  return (
    <div className="bg-white rounded-xl w-full pl-5 pr-7 pt-5">
      <div className="w-full h-[500px] mt-5">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
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
            <Line
              dataKey="Active_Service_Provider"
              legendType="circle"
              stroke="#FF5D8D"
            />
            <Line
              dataKey="Service_Provider_Retension_Rate"
              legendType="circle"
              stroke="#72BBFF"
            />
            <Line
              dataKey="New_Service_Provider"
              legendType="circle"
              stroke="#11BEA9"
            />
            <Line
              dataKey="Service_Completion_Rate"
              legendType="circle"
              stroke="#FF834D"
            />
            <Line
              dataKey="Total_Service_Provider"
              legendType="circle"
              stroke="#FA18FF"
            />
            <Line
              dataKey="Average_Rating"
              legendType="circle"
              stroke="#FBBC05"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChart;
