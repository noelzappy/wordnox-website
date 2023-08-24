import React, { Component } from "react";

const ServiceList = [
  {
    icon: "01",
    title: "Software Development",
    description:
      "Crafting innovative mobile and web solutions to elevate user experiences and drive business growth.",
  },
  {
    icon: "02",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that boost brand visibility, engagement, and ROI in Africa's dynamic market.",
  },
  {
    icon: "03",
    title: "SEO Services",
    description:
      "Tailored SEO strategies to amplify online presence, enhance search visibility, and capture targeted audiences.",
  },
];

class ServiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {ServiceList.map((val, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--1">
                <div className="icon">
                  <img
                    src={`/assets/images/icons/icon-${val.icon}.png`}
                    alt="Digital Agency"
                  />
                </div>
                <div className="content">
                  <h4 className="title">{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceOne;
