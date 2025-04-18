import BannerSix from "../../components/banners/BannerSix";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import ServiceData from "../../data/Services.json";
import { camelCaseToDashed } from "../../helpers/utilities";
import WorkingProcess from "../../components/services/WorkingProcess";

export async function getStaticPaths() {
  return {
    paths: ServiceData?.map(({ slug, category }) => ({
      params: {
        slug: slug,
        category: camelCaseToDashed(category),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const service = ServiceData.find(
    ({ slug }) => slug.toString() === params.slug
  );

  return {
    props: {
      service,
    },
  };
}

const ServiceDetails = ({ service }) => {
  return (
    <Layout title={service.title}>
      <div className="main-wrapper">
        <BannerSix
          title={service.title}
          subtitle={service.description}
          bannerStyleClass="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient"
          bannerTitleClass="title"
          leftColumn="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--20"
          rightColumn="col-lg-6 order-1 order-lg-2"
          bannerImageOne="/images/slider/single-service-02.png"
          bannerImageTwo="/images/slider/single-service-01.svg"
          isServiceDetails={true}
        />

        <WorkingProcess process={service.process} />

        <CallToActionOne />
      </div>
    </Layout>
  );
};

export default ServiceDetails;
