import Player from "components/Player";
import { MENU_WIDTH } from "constants/menu";
import { ReactNode } from "react";
import SideBar from "./Sidebar";
import Topbar from "./Topbar";
import styles from "styles/dashboard.module.scss";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.container}>
      <aside>
        <SideBar />
      </aside>
      <header>
        <Topbar />
      </header>
      <main className="overflow-x-scroll">{children}</main>
      <footer>
        <Player />
      </footer>
    </div>
  );
}

export default DashboardLayout;
