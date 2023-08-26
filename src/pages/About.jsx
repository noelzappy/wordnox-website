import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class About extends Component {
  render() {
    let title = "About Us",
      description =
        "Welcome to Wordnox.com, your dedicated digital partner. As a specialized digital agency, we're committed to delivering top-tier services that drive your business forward. Since our establishment in 2019, we've been on a mission to transform the digital landscape by offering a range of solutions tailored to your needs.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"About"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-3.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Crafting Digital Solutions</h3>
                          <p>
                            Our software development expertise encompasses web
                            and mobile app creation, REST API development, and
                            the creation of intuitive UI/UX designs. We shape
                            your ideas into interactive realities that captivate
                            and engage.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">
                            Elevating Visibility and Engagement
                          </h3>
                          <p>
                            Our digital marketing strategies encompass Social
                            Media Marketing, Content Marketing, Display Ads,
                            SEM, and SEO. We amplify your brand's online
                            visibility, engaging your target audience in
                            meaningful ways.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Get Started Now</h4>
                <p>
                  Step into the world of Wordnox.com and embark on a
                  transformative journey towards digital brilliance. Let's shape
                  the digital future together.
                </p>
                <a className="rn-btn btn-white" href="/contact">
                  Get Started
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img
                  src="/assets/images/about/finding-us-01.png"
                  alt="Finding Images"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
