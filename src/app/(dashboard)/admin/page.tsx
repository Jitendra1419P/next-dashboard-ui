"use client";

import LeftPenalDiv from "@/components/LeftPenalDiv";
import PieChartsDiv from "@/components/PieChartsDiv";
import SectorPerformance from "@/components/SectorPerformance";
import TopNavbar from "@/components/TopNavbar";
import Updates from "@/components/Updates";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4">
      <TopNavbar />
      <div className="py-4 flex gap-4 flex-col md:flex-row">
        {/* Left   */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            <UserCard
              type="Total Sales"
              icon="/Vector.svg"
              total="₹. 162.15"
              image="/total_sales.svg"
              info="+ 5%"
            />
            <UserCard
              type="Total Customers"
              icon="/Customers.svg"
              total="1354"
              image="/Total_Customers.svg"
              info="- 10%"
            />
            <UserCard
              type="Total Orders"
              icon="/Cart.svg"
              total="1354"
              image="/Total_Orders.svg"
              info="+ 10%"
            />
          </div>
          {/* Middle charts */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {/* Total Orders charts */}
            <div className="w-full lg:w-1/3 h-[450px]">
              <PieChartsDiv />
            </div>
            {/* Sector Performance charts */}
            <div className="w-full lg:w-2/3 h-[450px]">
              <SectorPerformance />
            </div>
          </div>
          {/* bottom charts */}
          <div className="">
            <Updates />
          </div>
        </div>
        {/* Right   */}
        <div className="w-full lg:w-1/3">
          <LeftPenalDiv />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
