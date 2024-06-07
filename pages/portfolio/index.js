import BannerSeven from "../../components/banners/BannerSeven";
import Layout from "../../components/layouts/Layout";
import PortfolioOne from "../../components/portfolio/PortfolioOne";

const Portfolio = () => {
  return (
    <Layout title="Our Work">
      <main className="page-wrapper">
        <BannerSeven
          title="Our projects"
          subtitle="Explore our diverse portfolio of successful client projects spanning various industries and sectors. See how our solutions have helped businesses achieve their goals."
        />

        <PortfolioOne bgColor="bg-transparent" />
      </main>
    </Layout>
  );
};

export default Portfolio;
