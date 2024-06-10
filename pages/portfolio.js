import BannerSeven from "../components/banners/BannerSeven";
import Layout from "../components/layouts/Layout";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import { getPortfolioPosts } from "../helpers/contentAPI";

const Portfolio = ({ portfolioPosts }) => {
  return (
    <Layout title="Our Work">
      <main className="page-wrapper">
        <BannerSeven
          title="Our projects"
          subtitle="Explore our diverse portfolio of successful client projects spanning various industries and sectors. See how our solutions have helped businesses achieve their goals."
        />

        <PortfolioOne
          bgColor="bg-transparent"
          portfolioPosts={portfolioPosts}
        />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  let portfolioPosts = [];
  try {
    portfolioPosts = await getPortfolioPosts(3);
  } catch (error) {
    // console.log(error)
  }

  return {
    props: {
      portfolioPosts,
    },
  };
}

export default Portfolio;
