import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";

class SliderOne extends Component {
  render() {
    return (
      <div className="slider-activation">
        {/* Start Single Slide */}
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--33"
          data-black-overlay="6"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">Fostering Growth</h1>
                  <div className="content">
                    <h4 className="title text-white">
                      Through Software Development and Marketing Excellence.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            <div className="service-wrapper service-white">
              <ServiceOne />
            </div>
            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    );
  }
}
export default SliderOne;
