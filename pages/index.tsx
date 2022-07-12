import DashboardLayout from "components/DashboardLayout";
import Home from "components/Home";
import Head from "next/head";

export default function App(props: any) {
  return (
    <>
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/Spotify_logo_without_text.svg.webp" />
      </Head>
      <DashboardLayout>
        <div className="bg-[linear-gradient(180deg,_#3333a3_7%,_#121212_14%)] py-10">
          <Home />
        </div>
      </DashboardLayout>
    </>
  );
}
