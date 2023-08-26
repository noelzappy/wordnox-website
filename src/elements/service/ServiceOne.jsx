import React, { Component } from "react";
import { FiCast, FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Software Development",
    description:
      "Crafting innovative mobile and web solutions to elevate user experiences and drive business growth.",
  },
  {
    icon: <FiCast />,
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that boost brand visibility, engagement, and ROI in Africa's dynamic market.",
  },
  {
    icon: <FiCast />,
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
              <div className="service service__style--3">
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
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
