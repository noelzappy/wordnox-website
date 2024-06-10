import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import BannerSeven from "../components/banners/BannerSeven";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import Layout from "../components/layouts/Layout";
import { getPostsByTag } from "../helpers/contentAPI";

export async function getStaticProps() {
  let caseStudies = [];
  try {
    caseStudies = await getPostsByTag("case-studies");
  } catch (error) {
    // console.log(error)
  }

  return {
    props: {
      caseStudies,
    },
  };
}

const CaseStudy = ({ caseStudies }) => {
  return (
    <Layout title="Case Studies">
      <main className="page-wrapper">
        <BannerSeven
          title="Case studies"
          subtitle="A quick view of our success stories."
        />

        <div className="axil-featured-area ax-section-gap bg-color-lightest color-darkest">
          <div className="container">
            {caseStudies?.map((caseStudy, index) => (
              <div
                className={`row d-flex flex-wrap axil-featured row--0 ${
                  index !== 0 ? "ax-section-gapTop" : ""
                } ${index % 2 !== 0 ? "axil-featured-left" : ""}`}
                key={`case-study-${index}`}
              >
                <div
                  className={`col-lg-6 col-xl-6 col-md-12 col-12 ${
                    index % 2 !== 0 ? "order-1 order-lg-2" : "order-1"
                  }`}
                >
                  <div className="thumbnail">
                    <Link href={caseStudy.url}>
                      <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                        <Image
                          width={661}
                          height={668}
                          className="image w-100 paralax-image img-fluid"
                          src={caseStudy.feature_image}
                          alt="Featured Images"
                          priority
                        />
                      </Tilt>
                    </Link>
                  </div>
                </div>
                <div
                  className={`col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--40 mt_sm--40 ${
                    index % 2 !== 0 ? "order-2 order-lg-1" : "order-2"
                  }`}
                >
                  <div className="inner">
                    <div className="section-title text-start">
                      <h2 className="title">
                        <Link href={caseStudy.url}>{caseStudy.title}</Link>
                      </h2>
                      <p className="subtitle-2">
                        {caseStudy.excerpt?.length > 100
                          ? caseStudy.excerpt?.substring(0, 100) + "..."
                          : caseStudy.excerpt}
                      </p>
                      <Link
                        href={caseStudy.url}
                        className="axil-button btn-large btn-transparent"
                      >
                        <span className="button-text">Read Case Study</span>
                        <span className="button-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default CaseStudy;
