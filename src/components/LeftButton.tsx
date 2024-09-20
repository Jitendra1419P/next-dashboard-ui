import Image from "next/image";

const LeftButton = ({ texts }: {texts:string}) => {
  return (
    <div className="p-2 bg-white flex items-center justify-center gap-2 rounded-lg">
      
      <span className="text-xs">{texts}</span>
      <Image
        src="/expand_more.svg"
        alt=""
        width={12}
        height={12}
        className="flex items-end justify-end"
      />
    </div>
  );
};

export default LeftButton;
