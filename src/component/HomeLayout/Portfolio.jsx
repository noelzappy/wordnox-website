import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../page-demo/script";
import { Link } from "react-router-dom";
import PortfolioList from "../../data/portfolio";

class Portfolio extends Component {
  render() {
    let title = "Our Works",
      description =
        "Our portfolio is a testament to our dedication and expertise in creating impactful digital solutions for businesses across Africa.";
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2}>
              {PortfolioList.map((value, index) => (
                <div className="portfolio" key={index}>
                  <div className="thumbnail-inner">
                    <div className="thumbnail"></div>
                    <div
                      className={`bg-blr-image bg_image-01 pbg_image_${value.mainBg}`}
                    ></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{value.category}</p>
                      <h4 className="title">
                        <a href={`/portfolio/${value.slug}`}>{value.title}</a>
                      </h4>
                      <div className="portfolio-button">
                        <a className="rn-btn" href="/portfolio-details">
                          Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="link-overlay"
                    to={`/portfolio/${value.slug}`}
                  ></Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;
