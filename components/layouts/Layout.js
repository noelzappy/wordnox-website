import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import ScrollUp from "./ScrollUp";

const Layout = ({
  layoutSettings = { header: "", footer: "" },
  children,
  showFooter = true,
  title = "",
  metaKeyword = "",
  metaAuthor = "",
  metaDescription = "Wordnox is a leading software development and digital marketing agency based in Ghana. info@wordnox.com | +233208432103",
  orgTitle = "Wordnox - Premiere web design & digital marketing agency in Ghana",
  ogImage = "/images/about/wordnox-org-image.png",
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <title>
          {title} | Wordnox - Premiere web design & digital marketing agency in
          Ghana
        </title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keyword"
          content={`${metaKeyword}, web design, software development, digital marketing, mobile apps, website design`}
        />
        <meta name="author" content={metaAuthor || "Wordnox"} />
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={orgTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={orgTitle} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={"@wordnox"} />
        <meta name="twitter:description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
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
