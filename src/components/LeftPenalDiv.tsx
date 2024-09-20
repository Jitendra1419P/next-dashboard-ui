"use client";

import Image from "next/image";
import RightButton from "./RightButton";
import PendingTicketsRed from "./PendingTicketsRed";
import PendingTicketsBlue from "./PendingTicketsBlue";
import PendingTicketsYellow from "./PendingTicketsYellow";

const LeftPenalDiv = () => {
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="rounded-xl bg-white pt-6 w-full px-6 flex justify-between">
        <div className="flex items-start justify-start gap-1 pb-5 w-[70%]">
          <div className="flex items-start justify-start w-[25%] ">
            <div className="p-3 flex items-center justify-center bg-lamaSkyCornflowerLight2 rounded-lg">
              <Image src="/qushan.svg" alt="" width={35} height={35} />
            </div>
          </div>
          <div className="w-[75%]">
            <p className="text-[15px] text-[#808080] pb-1">Total tickets</p>
            <h1 className="text-2xl font-bold">560</h1>
          </div>
        </div>
        <div className="w-[30%]">
          <RightButton texts="Raise a Ticket" />
        </div>
      </div>
      {/* line */}
      <div className="w-full px-4">
        <div className="w-full rounded-full h-1 bg-[#E5E6FF]">
          <div className="w-[70%] rounded-full h-1 bg-[#FBBC05]" />
        </div>
      </div>
      {/* info */}
      {/* Title */}
      <div className="w-full p-2 my-4 flex justify-between">
        <h1 className="text-base font-medium ">Pending Tickets (03)</h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      <div className="w-full">
        <PendingTicketsRed
          image="/avatar2.png"
          name="019273645"
          raiser="Name of the Raiser"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          status="Acknowledged"
        />
        <PendingTicketsBlue
          image="/avatar2.png"
          name="019273645"
          raiser="Name of the Raiser"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
          status="Open"
        />
        <PendingTicketsYellow
          image="/avatar2.png"
          name="019273645"
          raiser="Name of the Raiser"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          status="On Hold"
        />
      </div>
    </div>
  );
};

export default LeftPenalDiv;
