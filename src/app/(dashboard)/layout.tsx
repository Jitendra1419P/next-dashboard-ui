import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Homepage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[70px] bg-white py-4">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/FaBars.png" alt="" width={32} height={32} />
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[calc(100%_-_70px)] bg-[#EAEBFF] pl-0.5 overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
