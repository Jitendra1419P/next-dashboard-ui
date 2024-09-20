"use client";

import AreaChart from "@/components/AreaChart";
import LeftButton from "@/components/LeftButton";
import LeftPenalDiv from "@/components/LeftPenalDiv";
import LeftPenalDivOrder from "@/components/LeftPenalDivOrder";
import PieChartsDiv from "@/components/PieChartsDiv";
import RatingCads from "@/components/RatingCads";
import RightButton from "@/components/RightButton";
import SectorPerformance from "@/components/SectorPerformance";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceProvider from "@/components/ServiceProvider";
import TopNavbar from "@/components/TopNavbar";
import TopServiceProviders from "@/components/TopServiceProviders";
import UpdatCard from "@/components/UpdatCard";
import Updates from "@/components/Updates";
import UserCard from "@/components/UserCard";
import Image from "next/image";

const OrderPage = () => {
  return (
    <div className="p-4">
      {/* <TopNavbar /> */}
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-2">
          <div className="p-2 bg-white flex w-[125px] items-center justify-center gap-2 rounded-lg">
            <Image src="/calendar_month.svg" alt="" width={24} height={24} />
            <span className="text-xs">This Year</span>
            <Image
              src="/expand_more.svg"
              alt=""
              width={12}
              height={12}
              className="flex items-end justify-end"
            />
          </div>
          <LeftButton texts="Location" />
          <LeftButton texts="Status" />
        </div>
        <div className="flex gap-2">
          <RightButton texts="Assign  Order" />
          <RightButton texts=" Add New Service Provider" />
        </div>
      </div>
      <div className="py-4 flex gap-4 flex-col md:flex-row">
        {/* Left   */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            <UserCard
              type="Total Service Provider"
              icon="/Vector.svg"
              total="₹. 162.15"
              image="/total_sales.svg"
              info="+ 5%"
            />
            <UserCard
              type="New Service Provider"
              icon="/Customers.svg"
              total="1354"
              image="/Total_Customers.svg"
              info="- 10%"
            />
            <UserCard
              type="Active Service Provider"
              icon="/Cart.svg"
              total="1354"
              image="/Total_Orders.svg"
              info="+ 10%"
            />
          </div>
          <div className="flex gap-4">
            <RatingCads
              type="Average Rating"
              icon="/star.svg"
              image="/Ellipse.png"
            />
            <UpdatCard
              type="Service Completion Rate"
              icon="/PieChart.svg"
              image="/Pie.svg"
              text="85%  completed"
            />

            <UpdatCard
              type="Service Provider Retension Rate"
              icon="/mdi_hand-coin.svg"
              image="/Total_Orders.svg"
              text="+ 100%  more "
            />
          </div>
          <div className="w-full">
            <AreaChart />
          </div>
          <div className="w-full">
            <ServiceProvider />
          </div>
          <div className="w-full">
            <TopServiceProviders />
          </div>
          <div className="w-full">
            <ServiceOfferings />
          </div>
        </div>
        {/* Right   */}
        <div className="w-full lg:w-1/3">
          <LeftPenalDivOrder />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
