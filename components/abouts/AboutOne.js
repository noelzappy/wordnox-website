import ContactFormOne from "../forms/ContactFormOne";

const AboutOne = () => {
  return (
    <div className="axil-about-us-area ax-section-gap bg-color-white axil-shape-position">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-12">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                <span
                  className="sub-title extra08-color"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                >
                  About Us
                </span>
                <h2
                  className="title"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Software solutions & digital marketing.
                </h2>
                <p
                  className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Wordnox was founded in <strong>2019</strong> with a vision to
                  empower businesses through digital transformation. We are a
                  team of passionate professionals offering comprehensive
                  software solutions and strategic digital marketing services.
                </p>
                <p
                  className="subtitle-2"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Our unique blend of technical expertise and creative ingenuity
                  enables us to deliver innovative solutions that drive tangible
                  results for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--30 mt_sm--30">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Get a free quote now</h3>
                <ContactFormOne />
                <div className="callto-action-wrapper text-center">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href="tel:+233208432103">(233) 20 843 2103</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-shape-group">
        <div className="shape shape-1">
          <i className="icon icon-shape-12"></i>
        </div>
        <div className="shape shape-2">
          <i className="icon icon-shape-03"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
