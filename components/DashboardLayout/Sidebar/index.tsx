import { LIKED_SONGS, MENU_WIDTH } from "constants/menu";
import Link from "next/link";
import { TNavItem } from "types";
import Img from "../../Img";

export const NAV_ITEMS: TNavItem[] = [
  {
    title: "Home",
    route: "/",
    iconPath: "/images/icons/house.svg",
  },
  {
    title: "Search",
    route: "/search",
    iconPath: "/images/icons/Search_S.svg",
  },
  {
    title: "Your Library",
    route: "/your-library",
    iconPath: "/images/icons/your-library.svg",
  },

  {
    title: "Create Playlist",
    route: "/create-playlist",
    iconPath: "/images/icons/create-playlist-icon.svg",
    className: "mt-8",
  },
  {
    title: "Liked Songs",
    route: "/liked-songs",
    iconPath: "/images/icons/liked-songs.svg",
  },
];

const LikedSongs = () => {
  return (
    <div>
      <ul>
        {LIKED_SONGS.map((item) => (
          <li key={item.title} className={item.className}>
            <Link href={"/#"}>
              <a className="flex gap-3 items-center py-2 text-gray-400 hover:text-white duration-200 font-light">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function SideBar() {
  return (
    <nav className={`h-screen bg-black px-5 fixed z-20 w-[300px]`}>
      <ul className="text-white pt-12">
        {NAV_ITEMS.map((item) => (
          <li key={item.title} className={item.className}>
            <Link href={item.route}>
              <a className="flex gap-3 items-center py-2 text-gray-400 hover:text-white duration-200 font-light">
                {item.iconPath && (
                  <Img
                    src={item.iconPath}
                    alt={item.title}
                    containerClassName="h-6 w-6"
                  />
                )}
                {item.title}
              </a>
            </Link>
          </li>
        ))}
        <hr className="border-r border-[#282828] my-4" />
      </ul>
      <LikedSongs />
    </nav>
  );
}

export default SideBar;
