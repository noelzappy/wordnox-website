import React, { Component, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
  };
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    let Data = [
      {
        countNum: 100,
        countTitle:
          "We've successfully delivered over 100 projects that have brought digital innovation to life.",
      },
      {
        countNum: 50,
        countTitle:
          "Our team has proudly collaborated with over 50 satisfied clients across various industries.",
      },
      {
        countNum: 5,
        countTitle:
          "With over 5 years of dedicated service since 2019, we've honed our expertise and celebrated numerous milestones alongside our clients.",
      },
    ];

    return (
      <Fragment>
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <h5 className="counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    end={this.state.didViewCountUp ? value.countNum : 0}
                  />
                </VisibilitySensor>
              </h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CounterOne;
