import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/Home.svg",
        label: "Home",
        href: "/admin",
      },
      {
        icon: "/ArchiveBox.svg",
        label: "Teachers",
        href: "/list/Order",
      },
      {
        icon: "/Chet.svg",
        label: "Students",
        href: "/list/message",
      },
    ],
  },
];

const menuItemsBotam = [
  {
    title: "OTHER",
    items: [
      {
        icon: "/qna.svg",
        label: "Profile",
        href: "/qna",
      },
      {
        icon: "/setting.svg",
        label: "Settings",
        href: "/settings",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm ">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 h-[450px] pt-32" key={i.title}>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center gap-4 py-4 hover:bg-slate-400"
            >
              <Image src={item.icon} alt="" width={28} height={28} />
            </Link>
          ))}
        </div>
      ))}

      {menuItemsBotam.map((i) => (
        <div className="flex flex-col gap-2 " key={i.title}>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center gap-4 py-4 hover:bg-slate-400"
            >
              <Image src={item.icon} alt="" width={28} height={28} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
