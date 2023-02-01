import "../styles/globals.css";

import "@fontsource/mukta/500.css";

import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Nick Melanson | Full Stack Developer"
        titleTemplate="Nick Melanson | Full Stack Developer"
        defaultTitle="Nick Melanson | Full Stack Developer"
        description="Hey, I'm Nick! A Full Stack Developer, student, and tech enthusiast"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Developer, Web Developer, web development, web developer, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/jpeg" href="./assets/avatar.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
