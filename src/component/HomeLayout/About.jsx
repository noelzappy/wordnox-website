import React, { Component } from "react";

class About extends Component {
  render() {
    let title = "About Us",
      description =
        "As a forward-thinking digital agency, we specialize in delivering comprehensive software development solutions and results-driven digital marketing strategies. Our mission is to empower businesses across Africa with innovative technology and effective online visibility, fostering growth and success in the digital age.";
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100 mt--40"
                    src="/assets/images/about/about-1.jpg"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <br />
                  <a class="rn-button-style--2 btn-solid" href="/about">
                    <span>Learn More</span>
                  </a>

                  {/*            <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
