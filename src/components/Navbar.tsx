import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 pt-4 bg-white">
      {/* Search Bar */}
      <div className="flex items-center gap-2 text-xs rounded-full px-2 ring-[1.5px] ring-gray-300">
        <Image src="/search.svg" alt="" width={19} height={19} />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-[200px] p-2 bg-transparent"
        />
      </div>
      {/* Icons amd User */}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="flex items-center gap-5 border-r-2 pr-7">
          <div className="bg-lamaSkyCornflowerLight rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer relative">
            <Image
              src="/notification.svg"
              alt="notification"
              width={25}
              height={25}
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-lamaSkyNavyBlue border-4 border-lamaSkyCornflowerLight rounded-full text-xs text-white">
              21
            </div>
          </div>
          <div className="bg-lamaSkyCornflowerLight rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer relative">
            <Image src="/message.svg" alt="message" width={25} height={25} />
            <div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-lamaSkyNavyBlue border-4 border-lamaSkyCornflowerLight rounded-full text-xs text-white">
              53
            </div>
          </div>
          <div className="bg-lamaSkyRedLight rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer relative">
            <Image src="/Seting_icon.svg" alt="Cart" width={25} height={25} />
            <div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-lamaSkyRed border-4 border-lamaSkyCornflowerLight rounded-full text-xs text-white">
              19
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="">Hi, Saikumar</span>
          </div>
          <Image src="/expand_more.svg" alt="" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
