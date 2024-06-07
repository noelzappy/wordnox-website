import Image from "next/image";
import Tilt from "react-parallax-tilt";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import CaseStudiesData from "../../data/CaseStudies.json";
import BannerSix from "../../components/banners/BannerSix";

export async function getStaticPaths() {
  return {
    paths: CaseStudiesData?.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudy = CaseStudiesData.find((item) => item.slug === params.slug);

  return {
    props: {
      caseStudy,
    },
  };
}

const CaseStudyDetails = ({ caseStudy }) => {
  return (
    <Layout title={caseStudy.title}>
      <main className="page-wrapper">
        <BannerSix
          title={caseStudy.title}
          subtitle={caseStudy.description}
          bannerStyleClass="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient"
          bannerTitleClass="title"
          leftColumn="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--20"
          rightColumn="col-lg-6 order-1 order-lg-2"
          bannerImageOne="/images/slider/single-service-02.png"
          bannerImageTwo="/images/slider/single-service-01.svg"
          shapeImage={caseStudy.image}
          isServiceDetails={true}
          showPersonImage={false}
        />

        <div className="axil-project-brief project-bief-styles ax-section-gap bg-color-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                <div className="thumbnail position-relative">
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <Image
                      width={550}
                      height={596}
                      className="image w-100 paralax-image"
                      src={caseStudy.projectBrief.image}
                      alt="Featured Images"
                    />
                  </Tilt>

                  <div className="shape-group shape-01">
                    <Image
                      width={257}
                      height={179}
                      src="/images/others/contact-01.svg"
                      alt="Shape image"
                    />
                  </div>
                  <div className="shape-group shape-02">
                    <Image
                      width={410}
                      height={424}
                      src="/images/others/contact-03.svg"
                      alt="Shape image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12">
                <div className="content mt_md--30 mt_sm--30">
                  <div className="inner">
                    <h2 className="title mb--20">Project Brief</h2>
                    {caseStudy.projectBrief.description?.map((brief, index) => (
                      <p
                        key={`project-breif-${index}`}
                        className={
                          index !==
                          caseStudy.projectBrief.description.length - 1
                            ? "mb--30"
                            : ""
                        }
                      >
                        {brief}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="axil-project-solutions-area shape-group-position ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="content">
                  <div className="section-title-inner text-start">
                    <h2 className="title mb--20">Solutions</h2>
                    {caseStudy.solution.description?.map((solution, index) => (
                      <p
                        key={`project-solution-${index}`}
                        className={`subtitle-2 ${
                          index !== caseStudy.solution.description.length - 1
                            ? "mb--30"
                            : ""
                        }`}
                      >
                        {solution}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {caseStudy.images.map((image) => (
              <div className="mt--60" key={`project-solution-image-${image}`}>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <img
                    className="image w-100 paralax-image"
                    src={image}
                    alt={caseStudy.title}
                  />
                </Tilt>
              </div>
            ))}
          </div>
          <div className="shape-group">
            <div className="shape">
              <i className="icon icon icon-shape-19" />
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default CaseStudyDetails;
