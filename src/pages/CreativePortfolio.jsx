import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
// import Pagination from "../elements/common/Pagination";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import PortfolioListTwo from "../elements/portfolio/PortfolioListTwo";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Portfolio" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Our Works"} />
        {/* End Breadcrump Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area ptb--120 bg_color--1">
          <div className="container">
            <PortfolioListTwo />
            {/*      <div className="row mt--20">
              <div className="col-lg-12">
              
                <Pagination />
              
              </div>
    </div>*/}
          </div>
        </div>
        {/* End Blog Area */}

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
export default Portfolio;
