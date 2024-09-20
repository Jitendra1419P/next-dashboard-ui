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
    name: "Jan",
    Number_of_active_services: 15,
    New_services_added: 21,
  },
  {
    name: "Fab",
    Number_of_active_services: 19,
    New_services_added: 22,
  },
  {
    name: "Mar",
    Number_of_active_services: 19,
    New_services_added: 4,
  },
  {
    name: "Apr",
    Number_of_active_services: 10,
    New_services_added: 24,
  },
  {
    name: "May",
    Number_of_active_services: 25,
    New_services_added: 42,
  },
  {
    name: "Jun",
    Number_of_active_services: 40,
    New_services_added: 80,
  },
  {
    name: "Jul",
    Number_of_active_services: 20,
    New_services_added: 50,
  },
  {
    name: "Aug",
    Number_of_active_services: 60,
    New_services_added: 100,
  },
  {
    name: "Sep",
    Number_of_active_services: 55,
    New_services_added: 60,
  },
  {
    name: "Oct",
    Number_of_active_services: 85,
    New_services_added: 85,
  },
  {
    name: "Nov",
    Number_of_active_services: 92,
    New_services_added: 105,
  },
  {
    name: "Dec",
    Number_of_active_services: 95,
    New_services_added: 110,
  },
];

const LineDivChart = () => {
  return (
    <div className="bg-white rounded-xl w-full pl-5 pr-2 pt-5">
      <div className="w-full h-[200px] mt-5">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={500} height={300} data={data}>
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
            <Line
              dataKey="Number_of_active_services"
              legendType="circle"
              stroke="#FF5D8D"
            />
            <Line
              dataKey="New_services_added"
              legendType="circle"
              stroke="#72BBFF"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineDivChart;
