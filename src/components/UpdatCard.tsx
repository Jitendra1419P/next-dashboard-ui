import Image from "next/image";

const UpdatCard = ({
  type,
  icon,
  image,
  text,
}: {
  type: string;
  icon: string;
  image: string;
  text: string;
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
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 pt-3">
        <div className="flex items-center justify-center w-1/3">
          <Image src={image} alt="" width={50} height={50} />
        </div>
        <div className="w-2/3">
          <p className="text-sm flex items-start justify-start">
            <span className="text-[14px] font-medium">{text}</span>
          </p>
          <p className="text-sm flex items-start justify-start text-[#808080] text-[14px]">
            from last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdatCard;
