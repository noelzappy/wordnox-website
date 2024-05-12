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
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
