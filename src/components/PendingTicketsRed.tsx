import Image from "next/image";

const PendingTicketsRed = ({
  image,
  name,
  raiser,
  headTitle,
  divBodytext,
  status,
}: {
  image: string;
  name: string;
  raiser: string;
  headTitle: string;
  divBodytext: string;
  status: string;
}) => {
  return (
    <div className="mx-4 px-4 pb-4 mb-8 shadow-md rounded-xl">
      <div className="flex gap-2 justify-between mb-2">
        <div className="flex items-center justify-between w-1/2">
          <div className="w-[35%] flex items-center justify-center">
            <Image src={image} alt="" width={65} height={65} />
          </div>
          <div className="w-[60%]">
            <h3 className="font-semibold text-base">{name}</h3>
            <p className="font-medium text-xs">{raiser}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 w-1/2">
          <div className=" text-[10px] px-3 py-1 border-2 border-[#FF847C] rounded-full bg-[#fdebe9]">
            Technical Error
          </div>
          <div className="text-[10px] px-3 py-1 border-2 border-[#4318FF] rounded-full bg-[#e1dbff]">
            Healthcare
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-[#F4F7FE] my-4 rounded-full" />
      <div className="w-full p-2 mb-2">
        <h3 className="text-[14px] font-semibold text-[#2B3674] pb-1">
          {headTitle}
        </h3>
        <p className="text-[12px] font-medium text-[#72768B]">{divBodytext}</p>
      </div>
      <div className="p-2 mb-2 flex ">
        <div className="flex items-center justify-center font-medium text-xs px-4 py-1 border-2 border-[#FF847C] rounded-full text-[#FF847C] bg-[#fdebe9] w-auto">
          Status : {status}
        </div>
      </div>
    </div>
  );
};

export default PendingTicketsRed;
