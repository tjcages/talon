import localFont from "@next/font/local";
import Remux from "remux-preview";

import "../styles/globals.css";

const sneakersPro = localFont({ src: "./SneakersPro-Medium.woff" });

function MyApp({ Component, pageProps }) {
  return (
    <Remux scale={0.99}>
      <main className={sneakersPro.className}>
        <Component {...pageProps} />
      </main>
    </Remux>
  );
}

export default MyApp;
