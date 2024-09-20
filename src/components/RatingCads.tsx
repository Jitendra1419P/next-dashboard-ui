import Image from "next/image";

const RatingCads = ({
  type,
  icon,
  image,
}: {
  type: string;
  icon: string;
  image: string;
}) => {
  return (
    <div className="rounded-xl bg-white py-6 w-full px-6">
      <div className="flex items-center justify-center gap-1 w-full mb-3 border-b-2 pb-4">
        <div className="flex items-center justify-center w-1/3 ">
          <div className="p-3 flex items-center justify-center bg-lamaSkyCornflowerLight2 rounded-lg">
            <Image src={icon} alt="" width={35} height={35} />
          </div>
        </div>
        <div className="w-2/3">
          <p className="text-[15px] text-[#808080] pb-1">{type}</p>
          <Image src="/retingstar.svg" alt="" width={100} height={10} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 pt-4">
        <div className="flex items-center justify-center w-[25%]">
          <Image src={image} alt="" width={49} height={49} />
        </div>
        <div className="w-[55%] ">
          <p className="text-sm flex items-start justify-start">
            <span className="text-[16px]">Abhinav</span>
          </p>
          <p className="text-sm flex items-start justify-start">
            <Image
              src="/reting.svg"
              alt=""
              width={50}
              height={10}
              className="mt-[5px]"
            />
            <span className="text-[12px] ml-[5px]">4.0</span>
          </p>
        </div>
        <div className="w-[20%]">
          <h3 className="text-[10px] pb-1 text-[#4318FF]">View All</h3>
          <p className="text-[10px] text-[#808080]">1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCads;
