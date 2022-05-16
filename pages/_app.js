import "../styles/globals.css";

import "@fontsource/mukta/500.css";

import avatarPic from "../public/assets/avatar.jpg";

import Head from "next/head";

<Head>
  <link rel="icon" type="image/jpeg" href={avatarPic} />
</Head>;
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
