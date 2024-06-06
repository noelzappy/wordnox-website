import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import ScrollUp from "./ScrollUp";

const Layout = ({
  layoutSettings = { header: "", footer: "" },
  children,
  showFooter = true,
  title = "",
}) => {
  return (
    <>
      <Head>
        <title>
          {title} | Wordnox - Premiere web design & digital marketing agency in
          Ghana
        </title>
      </Head>

      <div className="main-content">
        <Header headerSetting={layoutSettings.header} />
        {children}
        {showFooter && <Footer footerSetting={layoutSettings.footer} />}
      </div>
      <ScrollUp />
    </>
  );
};

export default Layout;
