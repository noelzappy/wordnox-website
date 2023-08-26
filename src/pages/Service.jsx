import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ServiceList from "../data/services";

const MarketingServices = ServiceList.slice(3, 6);
const MarketingList = ServiceList.slice(6);
const SoftwareServices = ServiceList.slice(0, 3);

class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Services" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Services"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Software Development</h2>
                  <p>
                    Our team of skilled developers creates cutting-edge mobile
                    apps and websites that engage users and deliver seamless
                    experiences. We also provide ongoing maintenance and
                    management to ensure your digital assets remain top-notch.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {SoftwareServices.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a href={`/services/${val.slug}`}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.body}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Digital Marketing & SEO</h2>
                  <p>
                    Unlock the full potential of your online presence with our
                    strategic digital marketing campaigns. From social media
                    engagement to content marketing and SEO optimization, we
                    craft targeted approaches that resonate with your audience
                    and amplify your brand visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {MarketingServices.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href={`/services/${val.slug}`}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.body}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}

              {MarketingList.map((val, i) => (
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href={`/services/${val.slug}`}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.body}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

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
export default Service;
