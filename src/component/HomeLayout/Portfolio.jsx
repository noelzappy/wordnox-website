import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../page-demo/script";
import PortfolioList from "../../data/portfolio";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Our Work</h2>
                  <p>
                    Our portfolio is a testament to our dedication and expertise
                    in creating impactful digital solutions for businesses
                    across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2}>
              {PortfolioList.map((value, index) => (
                <div key={index}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href={`/portfolio/${value.slug}`}>
                        <img
                          className="w-100"
                          src={`/assets/images/portfolio/${value.mainBg}.webp`}
                          alt="Portfolio Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href={`/portfolio/${value.slug}`}>{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a
                          className="rn-btn text-white"
                          href={`/portfolio/${value.slug}`}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
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
