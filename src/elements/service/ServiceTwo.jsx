import React, { Component } from "react";
import { FiCast, FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Software Development",
    description:
      "Our team of skilled developers creates cutting-edge mobile apps and websites that engage users and deliver seamless experiences. We also provide ongoing maintenance and management to ensure your digital assets remain top-notch.",
  },
  {
    icon: <FiCast />,
    title: "Digital Marketing & SEO",
    description:
      "Unlock the full potential of your online presence with our strategic digital marketing campaigns. From social media engagement to content creation and SEO optimization, we craft targeted approaches that resonate with your audience and amplify your brand visibility.",
  },
];

class ServiceTwo extends Component {
  render() {
    let title = "Our Services",
      description =
        "We bring your digital aspirations to life through a comprehensive range of services tailored to meet your business needs and drive success in Africa's evolving market.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/contact">
                  <span className="text">Request Quote</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
