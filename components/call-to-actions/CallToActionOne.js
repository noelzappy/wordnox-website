import Link from "next/link";
import SectionTitle from "../common/SectionTitle";

const CallToActionOne = () => {
  return (
    <div className="axil-call-to-action-area shape-position ax-section-gap theme-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="axil-call-to-action">
              <SectionTitle
                title="Ready to get started?"
                subtitle="Let's work together"
                color="extra04-color"
                alignment="center"
              />
              <div className="text-center">
                <Link
                  className="axil-button btn-large btn-transparent"
                  href="/contact"
                >
                  <span className="button-text">Book a Call</span>
                  <span className="button-icon" />
                </Link>
                <div className="callto-action">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt" />
                    <a href="tel:+233208432103">(233) 20 843 2103</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-group">
        <div className="shape shape-01">
          <i className="icon icon-shape-14" />
        </div>
        <div className="shape shape-02">
          <i className="icon icon-shape-09" />
        </div>
        <div className="shape shape-03">
          <i className="icon icon-shape-10" />
        </div>
        <div className="shape shape-04">
          <i className="icon icon-shape-11" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionOne;
