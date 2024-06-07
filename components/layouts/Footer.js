import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FooterMenu from "../../data/FooterMenu.json";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

const Footer = ({ footerSetting = {} }) => {
  const [footerSettings, setFooterSettings] = useState({});

  const form = useRef(null);

  useEffect(() => {
    if (footerSetting === "") {
      const setting = {
        showCopyrightOnly: false,
      };
      setFooterSettings(setting);
    } else {
      setFooterSettings(footerSetting);
    }
  }, [footerSetting]);

  const onSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    toast.loading("Subscribing...", {
      id: "subscribe",
      position: "bottom-left",
    });
    try {
      await axios.post("/api/subscribe", { email, name: "Subscriber" });
      toast.success("Subscribed successfully", {
        id: "subscribe",
        position: "bottom-left",
      });
      form.current?.reset();
    } catch (error) {
      toast.error("Failed to subscribe. Please try again", {
        id: "subscribe",
        position: "bottom-left",
      });
    }
  };

  return (
    <footer
      className={`axil-footer footer-default ${
        footerSettings.showCopyrightOnly ? "bg-color-lightest" : ""
      } ${
        footerSettings.style === "three"
          ? "footer-style-3 bg-color-extra09"
          : "theme-gradient-2"
      }`}
    >
      <div
        className={
          !footerSettings.showCopyrightOnly && footerSettings.style !== "three"
            ? "bg_image--2"
            : ""
        }
      >
        {!footerSettings.showCopyrightOnly && (
          <>
            <div className="ft-social-icon-wrapper ax-section-gapTop">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                      {FooterMenu.social?.map((socialItem, index) => (
                        <li key={`social-${index}`}>
                          <a
                            href={socialItem.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={`fab ${socialItem.icon}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-top ax-section-gap">
              <div className="container">
                <div className="row">
                  <div
                    className={`${"col-xl-5 col-lg-3 col-md-6 col-sm-6 col-12"}`}
                  >
                    <div className={`${"footer-widget-item"}`}>
                      <>
                        <h2>Get in touch!</h2>
                        <p>
                          Let&apos;s start working on your project <br /> today
                        </p>
                        <div className="axil-newsletter">
                          <form
                            className="newsletter-form"
                            onSubmit={onSubscribe}
                            ref={form}
                          >
                            <input
                              type="email"
                              placeholder="Email"
                              required
                              name="email"
                            />
                            <button
                              type="submit"
                              className="axil-button btn-transparent"
                            >
                              <span className="button-text">Subscribe</span>
                            </button>
                          </form>
                        </div>
                      </>
                    </div>
                  </div>

                  <div
                    className={`${"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--30"}`}
                  >
                    <div className="footer-widget-item">
                      <h6 className="title">Services</h6>
                      <div className="footer-menu-container">
                        <ul
                          className={`ft-menu liststyle link-hover ${
                            footerSettings.style === "three"
                              ? "color-var--2"
                              : ""
                          }`}
                        >
                          {FooterMenu.services?.map((menuItem, index) => (
                            <li key={`footer-service-${index}`}>
                              <Link href={menuItem.url}>{menuItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${"col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30"}`}
                  >
                    <div className="footer-widget-item">
                      <h6 className="title">Resourses</h6>
                      <div className="footer-menu-container">
                        <ul
                          className={`ft-menu liststyle link-hover ${
                            footerSettings.style === "three"
                              ? "color-var--2"
                              : ""
                          }`}
                        >
                          {FooterMenu.resources?.map((menuItem, index) => (
                            <li key={`footer-resource-${index}`}>
                              <Link href={menuItem.url}>{menuItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      footerSettings.style === "three"
                        ? "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30"
                        : "col-xl-1 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30"
                    }`}
                  >
                    <div
                      className={`footer-widget-item ${
                        footerSettings.style !== "three" ? "widget-support" : ""
                      }`}
                    >
                      <h6 className="title">Support</h6>
                      <div className="footer-menu-container">
                        <ul
                          className={`ft-menu liststyle link-hover ${
                            footerSettings.style === "three"
                              ? "color-var--2"
                              : ""
                          }`}
                        >
                          {FooterMenu.support?.map((menuItem, index) => (
                            <li key={`footer-support-${index}`}>
                              <Link href={menuItem.url}>{menuItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="copyright copyright-default">
          <div className="container">
            <div className="row row--0 ptb--20 axil-basic-thine-line">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="inner text-center text-md-start">
                  <p>
                    <Image
                      src="/images/logo.png"
                      alt="Wordnox Software Solutions"
                      width={27}
                      height={27}
                    />{" "}
                    © {new Date().getFullYear()}. Wordnox by{" "}
                    <Link target="_blank" href="https://edromart.com">
                      Edromart Tech. LTD.
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="quick-contact">
                  <ul
                    className={`link-hover d-flex justify-content-center justify-content-md-end liststyle ${
                      footerSettings.style === "three" ? "color-var--2" : ""
                    }`}
                  >
                    <li>
                      <Link data-hover="Privacy Policy" href="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
