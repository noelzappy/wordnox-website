import Head from "next/head";
import AboutOne from "../components/abouts/AboutOne";
import BlogOne from "../components/blogs/BlogOne";
import BrandOne from "../components/brands/BrandOne";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import CounterOne from "../components/counters/CounterOne";
import Layout from "../components/layouts/Layout";
import PortfolioOne from "../components/portfolio/PortfolioOne";
// import PricingOne from "../components/pricings/PricingOne";
import ServiceOne from "../components/services/ServiceOne";
import BannerOne from "../components/banners/BannerOne";
import SliderOne from "../components/sliders/SliderOne";
import TeamOne from "../components/teams/TeamOne";
import TestimonialOne from "../components/testimonials/TestimonialOne";
import { getPosts } from "../helpers/contentAPI";

const HomeOne = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Home | Wordnox Creative Agency </title>
      </Head>

      <main className="page-wrapper">
        <BannerOne />

        <AboutOne />
        <ServiceOne />

        <SliderOne />

        <PortfolioOne />x

        <CounterOne />

        <TestimonialOne />

        <TeamOne />

        <BrandOne />
        {!posts ? null : <BlogOne posts={posts.slice(0, 4)} />}

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default HomeOne;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
