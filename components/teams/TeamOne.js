import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

const TeamOne = () => {
  return (
    <div className="axil-team-area shape-position ax-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <div className="thumbnail">
              <div className="image">
                <Image
                  width={630}
                  height={514}
                  src="https://images.pexels.com/photos/3869651/pexels-photo-3869651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Images"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <SectionTitle
                  title="Together we can do so much."
                  subtitle="Our Team"
                  description="Behind every successful project at Wordnox is a team of dedicated professionals with years of experience in their respective fields."
                  color="extra08-color"
                  alignment="left"
                />
                <div className="axil-button-group mt--40">
                  <Link
                    href="/team"
                    className="axil-button btn-large btn-transparent"
                  >
                    <span className="button-text">Our Team</span>
                    <span className="button-icon"></span>
                  </Link>
                  {/*              <a className="axil-button axil-link-button" href="#">
                    Careers
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-group">
        <div className="shape shape-1 customOne">
          <i className="icon icon-shape-06"></i>
        </div>
        <div className="shape shape-2">
          <i className="icon icon-shape-13"></i>
        </div>
        <div className="shape shape-3">
          <i className="icon icon-shape-14"></i>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
