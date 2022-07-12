import Img from "components/Img";
import ProfileMenu from "components/DashboardLayout/ProfileMenu";

function Topbar() {
  return (
    <div className={`bg-[#3333A3] flex justify-between w-full px-10 py-3`}>
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
    </div>
  );
}

export default Topbar;
