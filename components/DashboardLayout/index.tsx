import Player from "components/Player";
import { MENU_WIDTH } from "constants/menu";
import { ReactNode } from "react";
import SideBar from "./Sidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <SideBar />
      <Topbar />
      <div style={{ paddingLeft: MENU_WIDTH }}>{children}</div>
      <Player />
    </div>
  );
}

export default DashboardLayout;
