import React from "react";
import PageHelmet from "../component/common/Helmet";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import PortfolioList, { getPortfolioBySlug } from "../data/portfolio";
import { useParams } from "react-router-dom";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/wordnox" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/wordnox" },
  { Social: <FaTwitter />, link: "https://twitter.com/wordnox" },
];

const PortfolioDetails = () => {
  const { slug } = useParams();

  const item = getPortfolioBySlug(slug);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Portfolio Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image pbg_image_${item.mainBg}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{item.title}</h2>
                <p>{item.excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>{item.client}</h2>
                  <p className="subtitle">{item.description}</p>
                  <p>{item.body}</p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Category</span>
                      <h4>{item.category}</h4>
                    </div>

                    {/*       <div className="port-view">
                      <span>Project Types</span>
                      <h4>Website</h4>
  </div> */}
                  </div>

                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="portfolio-thumb-inner">
                  {item.images?.map((val, i) => {
                    return (
                      <div className="thumb" key={i}>
                        <img src={val} alt={item.title} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

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
};
export default PortfolioDetails;
