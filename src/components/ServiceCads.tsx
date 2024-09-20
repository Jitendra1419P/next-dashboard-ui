import Image from "next/image";

const ServiceCads = ({
  image,
  title,
  icon,
  follow,
  like,
}: {
  image: string;
  title: string;
  icon: string;
  follow: string;
  like: string;
}) => {
  return (
    <div className="w-1/4 p-3  border-2 rounded-xl border-[#e6e6e6]">
      <div className="flex justify-center items-center pt-1 mb-2">
        <Image src={image} alt="" width={170} height={220} />
      </div>
      <div className="flex justify-start items-start px-1 mb-2">
        <h1 className="text-xs font-semibold">{title}</h1>
      </div>
      <div className="w-full flex">
        <div className="w-1/3">
          <Image src={icon} alt="" width={50} height={50} />
        </div>
        <div className="w-1/3 flex justify-start items-center">
          <p className="flex text-[10px] justify-start items-start">{follow}</p>
        </div>
        <div className="w-1/3 flex justify-start items-center">
          <p className="flex text-[10px] justify-start items-start py-1 px-2 bg-[#E6F8EF] rounded-full text-[#18CE98]">
            {like}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCads;
