import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#1DB954" height={2} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
