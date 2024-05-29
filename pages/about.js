import Head from "next/head";
import BannerSeven from "../components/banners/BannerSeven";
import Layout from "../components/layouts/Layout";
import TeamOne from "../components/teams/TeamOne";
import AboutSectionTwo from "../components/abouts/AboutSectionTwo";
import ContactFormOne from "../components/forms/ContactFormOne";
import CounterTwo from "../components/counters/CounterTwo";
import TestimonialOne from "../components/testimonials/TestimonialOne";
import BrandOne from "../components/brands/BrandOne";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | Wordnox</title>
      </Head>

      <main className="page-wrapper">
        <BannerSeven />

        <div className="axil-about-us-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                <div className="axil-about-inner">
                  <div className="section-title text-start">
                    <span
                      className="sub-title extra08-color"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                    >
                      About Us
                    </span>
                    <h2
                      className="title"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Who We Are
                    </h2>
                    <p
                      className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Welcome to Wordnox, where we transform digital aspirations
                      into tangible business results. As a provider of web
                      development, software solutions, and digital marketing
                      services, we pride ourselves on delivering comprehensive
                      online solutions that drive success for businesses of all
                      sizes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                <div className="axil-about-inner">
                  <div className="section-title text-start">
                    <span
                      className="sub-title extra08-color"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                    >
                      Our Mission
                    </span>
                    <h2
                      className="title"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      The Wordnox Difference
                    </h2>
                    <p
                      className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Our mission is simple yet profound: to go beyond merely
                      creating an online presence and designing websites and
                      software. We strive to lead our clients to tangible
                      business outcomes, ensuring their users have the best
                      possible experience. Leveraging our extensive digital
                      marketing experience, we connect you with the right
                      audience and tailor custom strategies to match each
                      client&rsquo;s unique needs and goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CounterTwo />

        <TeamOne />

        <div className="axil-about-us-area ax-section-gap bg-color-lightest axil-shape-position">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                <div className="axil-about-inner">
                  <div className="section-title text-start">
                    <span
                      className="sub-title extra08-color"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                    >
                      Why Us
                    </span>
                    <h2
                      className="title"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Why Choose Wordnox
                    </h2>
                    <p
                      className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Choosing Wordnox as your digital partner means choosing a
                      trusted ally dedicated to your success. We offer a full
                      suite of services tailored to match your goals, budget,
                      and unique needs. Whether you&apos;re a small startup or a
                      large enterprise, we have the expertise and resources to
                      guide your project to success and see you through to your
                      business goals.
                    </p>
                    <p
                      className="subtitle-2"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      Ready to take your digital presence to the next level?
                      Choose Wordnox as your trusted partner, and let&apos;s
                      embark on a journey towards digital success together.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--30 mt_sm--30">
                <div className="contact-form-wrapper">
                  <div className="axil-contact-form contact-form-style-1">
                    <h3 className="title">Get a free quote now</h3>
                    <ContactFormOne />
                    <div className="callto-action-wrapper text-center">
                      <span className="text">Or call us now</span>
                      <span>
                        <i className="fal fa-phone-alt"></i>{" "}
                        <a href="tel:+233208432103">(233) 20 843 2103</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-shape-group">
            <div className="shape shape-1">
              <i className="icon icon-shape-12"></i>
            </div>
            <div className="shape shape-2">
              <i className="icon icon-shape-03"></i>
            </div>
          </div>
        </div>

        <TestimonialOne />

        <BrandOne />
      </main>
    </Layout>
  );
};

export default About;
