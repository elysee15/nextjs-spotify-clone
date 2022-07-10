import Link from "next/link";
import { useState } from "react";
import Img from "../Img";

const PROFILE_MENU_ITEMS: { title: string; className?: string }[] = [
  {
    title: "Account",
  },
  {
    title: "Profile",
  },
  {
    title: "Private session",
  },
  {
    title: "Settings",
  },
  {
    title: "Log out",
    className: "border-t border-[#3E3E3E]",
  },
];

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenuClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={handleToggleMenuClick}
        className="flex gap-2 text-white items-center bg-black rounded-[32px] py-1 pl-1 pr-2"
      >
        <Img
          src="/images/avatar.svg"
          alt="User profile"
          containerClassName="h-10 w-10"
          priority
        />
        davedirect3
        <Img
          src="/images/icons/arrow-down.svg"
          alt="User profile"
          containerClassName={`h-3 w-3 duration-100	 ${
            isOpen ? "rotate-180" : undefined
          }`}
          priority
        />
      </button>
      {isOpen && (
        <ul
          className={`absolute bg-[#282828] text-white w-52 rounded-sm translate-y-1 origin-top-left	right-0`}
        >
          {PROFILE_MENU_ITEMS.map((item) => (
            <li key={item.title} className={`py-3 ${item.className} px-4`}>
              <Link href="/#">{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProfileMenu;
