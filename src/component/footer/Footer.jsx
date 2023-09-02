import React, { Component } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/wordnox" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/wordnox" },
  { Social: <FaTwitter />, link: "https://twitter.com/wordnox" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Ready To Do This?</span>
                    <h2>
                      Let's get <br /> to work
                    </h2>
                    <a className="rn-button-style--2" href="/contact">
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div
                  className="footer-right bg_image bg_image--6"
                  data-black-overlay="6"
                >
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Links</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/portfolio">&gt; Our Work</a>
                          </li>
                          <li>
                            <a href="/about">&gt; About</a>
                          </li>
                          <li>
                            <a href="/contact">&gt; Let's Talk</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Say Hello</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:info@wordnox.com">
                              &gt; info@wordnox.com
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © {new Date().getFullYear()} Wordnox.com.
                          All Rights Reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
