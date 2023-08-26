import React from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { useParams } from "react-router-dom";
import { getServiceBySlug } from "../data/services";

function ServiceDetails() {
  const { slug } = useParams();

  const service = getServiceBySlug(slug);

  return (
    <React.Fragment>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle={service.title} />
      {/* End Pagehelmet  */}

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
        data-black-overlay="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src="/assets/images/service/service-01.png"
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>{service.body}</p>
                        <p>{service.body2}</p>
                        <h4 className="title">Our Process</h4>
                        <ul className="liststyle">
                          {service.process?.map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>{service.body3}</p>

                        <h4 className="title">What Sets Us Apart</h4>
                        <ul className="liststyle">
                          {service.difference?.map((item, i) => {
                            return <li>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/service-02.png"
                          alt="Service Images"
                        />

                        <button className="video-popup">
                          <span className="play-icon"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Wrapper */}

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
export default ServiceDetails;
