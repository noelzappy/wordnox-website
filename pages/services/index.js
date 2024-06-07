import BannerSix from "../../components/banners/BannerSix";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import ServiceOne from "../../components/services/ServiceOne";

const Services = () => {
  return (
    <Layout title="Our Services">
      <main className="page-wrapper">
        <BannerSix />
        <ServiceOne />
        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default Services;
