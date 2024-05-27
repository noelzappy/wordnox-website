import Head from "next/head";
import BannerSeven from "../../components/banners/BannerSeven";
import Layout from "../../components/layouts/Layout";
import PortfolioOne from "../../components/portfolio/PortfolioOne";

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Our projects | Wordnox</title>
      </Head>

      <main className="page-wrapper">
        <BannerSeven
          title="Our projects"
          subtitle="We delight in helping brands evolve, engage and grow in the digital space. View our digital portfolio."
        />

        <PortfolioOne bgColor="bg-transparent" />
      </main>
    </Layout>
  );
};

export default Portfolio;
