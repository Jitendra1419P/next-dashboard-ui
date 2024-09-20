import Image from "next/image";
const UserCard = ({
  type,
  icon,
  total,
  image,
  info,
}: {
  type: string;
  icon: string;
  total: string;
  image: string;
  info: string;
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
          <p className="text-[12px] text-[#808080] pb-1">{type}</p>
          <h1 className="text-2xl font-bold">{total}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 pt-4">
        <div className="flex items-center justify-center w-1/3 ">
          <Image src={image} alt="" width={50} height={50} />
        </div>
        <div className="flex items-start justify-start w-2/3">
          <p className="text-sm">
            <span>{info}</span> more from last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
