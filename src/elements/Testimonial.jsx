import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Testimonies = [
  {
    description:
      "With their expertise, they crafted a seamless platform that empowers us to sell lumber online. The user-friendly interface and efficient features have streamlined our operations and expanded our reach.",
    name: "Richard",
    position: "CEO, Geofrelin Company LTD",
    image: "/assets/images/client/richard.webp",
  },
];

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              {Testimonies.map((item, i) => {
                return (
                  <TabPanel key={i}>
                    <div className="rn-testimonial-content text-center">
                      <div className="inner">
                        <p>{item.description}</p>
                      </div>
                      <div className="author-info">
                        <h6>
                          <span>{item.name} </span> -{item.position}
                        </h6>
                      </div>
                    </div>
                  </TabPanel>
                );
              })}

              <TabList className="testimonial-thumb-wrapper">
                {Testimonies.map((item, i) => {
                  return (
                    <Tab key={i}>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
