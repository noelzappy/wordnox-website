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
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");

    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <NextTopLoader />
      <Toaster />
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-JZK6Q6LGCY" />
    </>
  );
}

export default MyApp;
