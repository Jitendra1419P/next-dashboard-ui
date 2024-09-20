import React from "react";
import PendingTicketsRed from "./PendingTicketsRed";
import PendingTicketsBlue from "./PendingTicketsBlue";
import PendingTicketsYellow from "./PendingTicketsYellow";
import RightButton from "./RightButton";
import Image from "next/image";
import InProgress from "./InProgress";
import PendingTicketsGreen from "./PendingTicketsGreen";

const LeftPenalDivOrder = () => {
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="rounded-xl bg-white pt-6 w-full px-6 flex justify-between">
        <div className="flex items-center justify-center gap-1 pb-5 w-full">
          <div className="flex items-start justify-start w-[20%] ">
            <div className="p-3 flex items-center justify-center bg-lamaSkyCornflowerLight2 rounded-lg">
              <Image src="/Compliance.svg" alt="" width={35} height={35} />
            </div>
          </div>
          <div className="w-[80%] flex items-center justify-start">
            <h1 className="text-xl font-bold">Support & Compliance</h1>
          </div>
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
        <h1 className="text-base font-medium ">Support tickets </h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      <div className="w-full">
        <PendingTicketsBlue
          image="/avatar2.png"
          name="019273645"
          raiser="Name of the Raiser"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext=""
          status="Open"
        />
        <PendingTicketsYellow
          image="/avatar2.png"
          name="019273645"
          raiser="Name of the Raiser"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext=""
          status="Escalated"
        />
      </div>

      {/* Title */}
      <div className="w-full p-2 my-4 flex justify-between">
        <h1 className="text-base font-medium ">Open tickets </h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      <div className="w-full">
        <PendingTicketsBlue
          image="/avatar2.png"
          name="019273645"
          raiser="Name of the Raiser"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext=""
          status="Open"
        />
        <PendingTicketsBlue
          image="/avatar2.png"
          name="019273645"
          raiser="Samantha Williams"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext=""
          status="Open"
        />
      </div>
      {/* Title */}
      <div className="w-full p-2 my-4 flex justify-between">
        <h1 className="text-base font-medium ">In Progress</h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      <div className="w-full">
        <InProgress
          image="/Ellipse_75.png"
          name="019273645"
          raiser="Robert Williams"
        />
        <InProgress
          image="/Ellipse_75.png"
          name="019273645"
          raiser="Robert Williams"
        />
      </div>
      {/* Title */}
      <div className="w-full p-2 my-4 flex justify-between">
        <h1 className="text-base font-medium ">Solved</h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      <div className="w-full">
        <PendingTicketsGreen
          image="/avatar2.png"
          name="019273645"
          raiser="Samantha Williams"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext=""
          status="Resolved"
        />
        <PendingTicketsGreen
          image="/Ellipse_75.png"
          name="019273645"
          raiser="Samantha Williams"
          headTitle="I am facing Technical Issue during the Signup process"
          divBodytext=""
          status="Resolved"
        />
      </div>
      {/* Title */}
      <div className="w-full p-2 my-4 flex justify-between">
        <h1 className="text-base font-medium ">Compliance Status</h1>
        <div className="py-1 px-5 rounded-full bg-[#F4F7FE]">
          <span className="text-[12px] text-[#4318FF] font-medium">
            View All
          </span>
        </div>
      </div>
      <div className="w-full">
        <InProgress
          image="/Ellipse_75.png"
          name="019273645"
          raiser="Robert Williams"
        />
        <InProgress
          image="/avatar2.png"
          name="019273645"
          raiser="Robert Williams"
        />
      </div>
      <div className="flex px-5 gap-2">
        <RightButton texts="Raise a Ticket" />
      </div>
    </div>
  );
};

export default LeftPenalDivOrder;
