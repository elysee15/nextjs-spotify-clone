import DashboardLayout from "components/DashboardLayout";
import Home from "components/Home";

export default function App(props: any) {
  return (
    <DashboardLayout>
      <div className="bg-[linear-gradient(180deg,_#3333a3_7%,_#121212_14%)] py-24">
        <Home />
      </div>
    </DashboardLayout>
  );
}
