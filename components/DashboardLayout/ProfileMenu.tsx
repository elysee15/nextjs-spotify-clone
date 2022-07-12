import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
} from "@reach/menu-button";
import useOutsideAlerter from "hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdownOpen || dropdown.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  const handleToggleMenuClick = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Menu>
        {({ isExpanded }) => (
          <>
            <MenuButton className="flex gap-2 text-white items-center bg-black rounded-[32px] py-1 pl-1 pr-2">
              <Img
                src="/images/avatar.svg"
                alt="User profile"
                containerClassName="h-10 w-10"
                priority
              />
              <span className="text-sm">davedirect3</span>
              <Img
                src="/images/icons/arrow-down.svg"
                alt="User profile"
                containerClassName={`h-3 w-3 duration-100	 ${
                  isExpanded ? "rotate-180" : undefined
                }`}
                priority
              />
            </MenuButton>
            <MenuList
              className={`bg-[#282828] text-white w-52 rounded-sm mt-1 p-1`}
            >
              {PROFILE_MENU_ITEMS.map((item) => (
                <MenuItem
                  key={item.title}
                  onSelect={() => console.log("Download")}
                  className={`py-3 hover:bg-[#55555552] cursor-pointer ${item.className} px-4 rounded-sm text-sm`}
                >
                  {item.title}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}

export default ProfileMenu;
