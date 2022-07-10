import Img from "components/Img";
import ProfileMenu from "components/DashboardLayout/ProfileMenu";

function Topbar() {
  return (
    <nav
      className={`bg-[#3333A3] flex justify-between w-screen pl-[350px] py-3 pr-10 fixed z-10 pt-3`}
    >
      <div className="flex gap-4">
        <Img
          src="/images/icons/Forward.svg"
          alt="back"
          containerClassName="h-10 w-10 rotate-180"
        />
        <Img
          src="/images/icons/Forward.svg"
          alt="back"
          containerClassName="h-10 w-10"
        />
      </div>
      <ProfileMenu />
    </nav>
  );
}

export default Topbar;
