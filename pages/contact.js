import BrandOne from "../components/brands/BrandOne";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <Breadcrumb title="Contact" current="Contact" />

      <main className="main-wrapper">
        <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                <div className="contact-form-wrapper">
                  <div className="axil-contact-form contact-form-style-1">
                    <h3 className="title">Get a free quote now</h3>
                    <ContactFormThree />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                <div className="axil-address-wrapper">
                  <div
                    className="axil-address"
                    data-aos="aos-fade-in-up"
                    data-aos-duration="1000"
                  >
                    <div className="inner">
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="content">
                        <h4 className="title">Phone</h4>
                        <p>
                          Our customer care is open from Mon-Fri, 10:00 am to
                          6:00 pm
                        </p>
                        <p>
                          <a className="axil-link" href="tel:+233208432103">
                            (233) 20 843 2103
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="axil-address mt--60 mt_sm--30 mt_md--30"
                    data-aos="aos-fade-in-up"
                    data-aos-duration="1000"
                  >
                    <div className="inner">
                      <div className="icon">
                        <i className="fal fa-envelope"></i>
                      </div>
                      <div className="content">
                        <h4 className="title">Email</h4>
                        <p>We will respond in 10 minutes. We promise!</p>
                        <p>
                          <a
                            className="axil-link"
                            href="mailto:info@wordnox.com"
                          >
                            info@wordnox.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-group">
            <div className="shape shape-01">
              <i className="icon icon-contact-01" />
            </div>
            <div className="shape shape-02">
              <i className="icon icon-contact-02" />
            </div>
            <div className="shape shape-03">
              <i className="icon icon-contact-03" />
            </div>
          </div>

          <BrandOne />
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
