import Head from "next/head";
import BannerSix from "../../components/banners/BannerSix";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import ServiceOne from "../../components/services/ServiceOne";

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>Our Services | Wordnox</title>
      </Head>

      <main className="page-wrapper">
        <BannerSix />
        <ServiceOne />
        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default Services;
