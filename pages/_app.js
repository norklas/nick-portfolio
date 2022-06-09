import "../styles/globals.css";

import "@fontsource/mukta/500.css";

import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Nick Melanson | Frontend Developer"
        titleTemplate="Nick Melanson | Frontend Developer"
        defaultTitle="Nick Melanson | Frontend Developer"
        description="Hey, I'm Nick! A Frontend Developer, student, and tech enthusiast"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, Web Developer, web development, web developer, tech enthusiast, open source",
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
