import AOS from "aos";
import NextTopLoader from "nextjs-toploader";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "../assets/css/plugins/font-awesome.css";
import "../assets/css/plugins/icomoon.css";
import "../assets/css/plugins/plugins.css";
import "../assets/scss/style.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import * as gtag from "../helpers/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");

    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <NextTopLoader />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
