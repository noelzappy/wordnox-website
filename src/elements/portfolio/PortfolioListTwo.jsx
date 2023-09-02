import React, { Component, Fragment } from "react";
import PortfolioList from "../../data/portfolio";

class PortfolioListTwo extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          {PortfolioList.map((value, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href={`/portfolio/${value.slug}`}>
                    <img
                      className="w-100"
                      src={`/assets/images/portfolio/${value.mainBg}.webp`}
                      alt="Blog Images"
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
        </div>
      </Fragment>
    );
  }
}
export default PortfolioListTwo;
