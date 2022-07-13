import { LIKED_SONGS, MENU_WIDTH } from "constants/menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { TNavItem } from "types";
import clsx from "clsx";
import HomeIcon from "components/icons/HomeIcon";
import SearchIcon from "components/icons/SearchIcon";
import LibraryIcon from "components/icons/LibraryIcon";
import LikedSongsIcon from "components/icons/LikedSongsIcon";
import PlusIcon from "components/icons/PlusIcon";

export const NAV_ITEMS: TNavItem[] = [
  {
    title: "Home",
    route: "/",
    icon: HomeIcon,
  },
  {
    title: "Search",
    route: "/search",
    icon: SearchIcon,
  },
  {
    title: "Your Library",
    route: "/collection/podcasts",
    icon: LibraryIcon,
  },

  {
    title: "Create Playlist",
    route: "/playlist",
    icon: PlusIcon,
    className: "mt-8",
  },
  {
    title: "Liked Songs",
    route: "/collection/tracks",
    icon: LikedSongsIcon,
  },
];

const LikedSongs = () => {
  return (
    <div>
      <ul className="text-sm">
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
  const router = useRouter();

  return (
    <div className="h-screen px-5 z-20 overflow-hidden w-[300px] bg-black">
      <nav>
        <Link href="/#">
          <a className="relative w-full aspect-[2_/_1] h-10 mt-5 mb-6 block">
            <Image
              src="/Spotify_logo_with_text.svg.png"
              className=""
              alt="Spotify logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
        <ul className="text-white">
          {NAV_ITEMS.map((item) => {
            const isActive = item.route === router.asPath;

            return (
              <li key={item.title} className={clsx(item.className, "group")}>
                <Link href={item.route}>
                  <a
                    className={clsx(
                      isActive ? "text-white" : "text-gray-400",
                      `flex gap-3 items-center py-2 group-hover:text-white duration-200 font-light text-sm`
                    )}
                  >
                    {item.icon && (
                      <item.icon fillRule={isActive ? "nonzero" : "evenodd"} />
                    )}
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
          <hr className="border-r border-[#282828] my-4" />
        </ul>
        <LikedSongs />
      </nav>
    </div>
  );
}

export default SideBar;
