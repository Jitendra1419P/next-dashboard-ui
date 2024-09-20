import Image from "next/image";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";

const TopNavbar = () => {
  return (
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
        <RightButton texts="Create Order" />
        <RightButton texts="+ Add Customer" />
        <RightButton texts="+ Add Service Provider" />
      </div>
    </div>
  );
};

export default TopNavbar;
