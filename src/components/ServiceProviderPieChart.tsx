"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 112.68 },
  { name: "B", value: 48.24 },
  { name: "C", value: 57.96 },
  { name: "D", value: 32.04 },
  { name: "E", value: 68.44 },
  { name: "F", value: 44.64 },
];

const COLORS = [
  "#FF847C",
  "#722391",
  "#48CFAF",
  "#FFCF50",
  "#CD7ED9",
  "#165DC9",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ServiceProviderPieChart = () => {
  return (
    <div className="w-full h-[285px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={1000} height={1000}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
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
      </ResponsiveContainer>
    </div>
  );
};

export default ServiceProviderPieChart;
