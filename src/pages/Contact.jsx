import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "../elements/common/Breadcrumb";

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Contact" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Contact Us"} />
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact With Phone Number</h4>
                    <p>
                      <a href="tel:+233 542 778 775">+233 542 778 775</a>
                    </p>
                    <p>
                      <a href="tel:+233 209 049 804">+233 209 049 804</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email Address</h4>
                    <p>
                      <a href="mailto:info@wordnox.com">info@wordnox.com</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p>
                      13 Hannah School Road, Madina <br /> Greater Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}

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
export default Contact;
