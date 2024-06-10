import Head from "next/head";
import AboutOne from "../components/abouts/AboutOne";
import BlogOne from "../components/blogs/BlogOne";
import BrandOne from "../components/brands/BrandOne";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import CounterOne from "../components/counters/CounterOne";
import Layout from "../components/layouts/Layout";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import ServiceOne from "../components/services/ServiceOne";
import BannerOne from "../components/banners/BannerOne";
import SliderOne from "../components/sliders/SliderOne";
import TeamOne from "../components/teams/TeamOne";
import TestimonialOne from "../components/testimonials/TestimonialOne";
import { getPosts, getPostsByTag } from "../helpers/contentAPI";

const HomeOne = ({ posts, caseStudies }) => {
  return (
    <Layout title="Home">
      <main className="page-wrapper">
        <BannerOne />

        <AboutOne />

        <ServiceOne />

        <SliderOne caseStudies={caseStudies} />

        <PortfolioOne showMoreLink count={3} />

        <CounterOne />

        <TestimonialOne />

        <TeamOne />

        <BrandOne />
        {!posts ? null : <BlogOne posts={posts} />}

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default HomeOne;

export async function getStaticProps() {
  let posts = [];
  let caseStudies = [];
  try {
    posts = await getPosts();
    caseStudies = await getPostsByTag("case-studies", 3);
  } catch (error) {
    // console.log(error)
  }

  return {
    props: {
      posts: posts
        .filter(
          (post) =>
            !post.tags.find(
              (tag) => tag.slug === "portfolio" || tag.slug === "case-studies"
            )
        )
        .slice(0, 4),
      caseStudies: caseStudies.slice(0, 3),
    },
  };
}
