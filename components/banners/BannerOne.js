import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const BannerOne = () => {
  return (
    <div className="axil-slider-area axil-slide-activation">
      <div className="axil-slide slide-style-default theme-gradient slider-fixed-height d-flex align-items-center paralax-area">
        <div className="container">
          <div className="row align-items-center pt_md--60 mt_sm--60">
            <div className="col-lg-7 col-12 order-2 order-lg-1">
              <div className="content pt_md--30 pt_sm--30">
                <h1
                  className="axil-display-1"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                >
                  Software & digital marketing.
                </h1>
                <p
                  className="subtitle-3"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Choose Wordnox as your Software, <br />
                  Web design & Digital marketing solutions partner to unlock
                  result-driven solutions that grow your business
                </p>
                <Link
                  href="/contact"
                  className="axil-button btn-large btn-transparent"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <span className="button-text">Get In Touch</span>
                  <span className="button-icon" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-12 order-1 order-lg-2">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="topskew-thumbnail-group text-start text-lg-end">
                  <div className="thumbnail paralax-image">
                    <div className="light-image">
                      <Image
                        width={500}
                        height={630}
                        src="https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Wordnox Images"
                      />
                    </div>
                    <div className="dark-image">
                      <Image
                        width={500}
                        height={630}
                        src="https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Wordnox Images"
                      />
                    </div>
                  </div>

                  <div className="shape-group">
                    <div className="shape shape-1 paralax--1">
                      <i className="icon icon-shape-05" />
                    </div>
                    <div className="shape shape-2 customOne">
                      <i className="icon icon-shape-06" />
                    </div>
                    <div className="shape shape-3 paralax--3">
                      <i className="icon icon-shape-04" />
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
