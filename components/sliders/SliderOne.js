import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CaseStudyData from "../../data/CaseStudies.json";
import Link from "next/link";

const SliderOne = ({ caseStudies }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!caseStudies) return null;

  return (
    <div className="axil-featured-area ax-section-gap bg-color-lightest">
      <div
        className="container axil-featured-activation axil-carousel"
        ref={ref}
      >
        {caseStudies.length > 0 && (
          <Slider {...settings}>
            {caseStudies.map((item, index) => {
              return (
                <div
                  className="row d-flex flex-wrap axil-featured row--0"
                  key={`slider-item-${item.id}`}
                >
                  <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                    <div className="thumbnail">
                      <Image
                        width={760}
                        height={650}
                        className="image w-100 img-fluid"
                        src={item.feature_image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-5 col-md-12 col-12 offset-xl-1 mt_md--40 mt_sm--40">
                    <div className="inner">
                      <div className="section-title text-start">
                        <h2 className="title">
                          <Link href={item.url}>{item.title}</Link>
                        </h2>
                        <p className="subtitle-2">
                          {" "}
                          {item.excerpt?.length > 100
                            ? item.excerpt?.substring(0, 100) + "..."
                            : item.excerpt?.substring(0, 100)}
                        </p>
                        <Link
                          href={item.url}
                          className="axil-button btn-large btn-transparent"
                        >
                          <span className="button-text">View Case Study</span>
                          <span className="button-icon" />
                        </Link>
                      </div>
                      <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                        {item.counter?.map((counter, counterIndex) => {
                          return (
                            <div
                              className="single-counterup counterup-style-1"
                              key={`counter-item-${counterIndex}`}
                            >
                              <h3
                                className={`count ${
                                  item.counter.length - 1 === counterIndex
                                    ? "counter-k"
                                    : ""
                                }`}
                              >
                                <CountUp
                                  start={0}
                                  end={inView ? counter.amount : 0}
                                />
                              </h3>
                              <p>{counter.title}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let posts = [];
  try {
    posts = await getPosts();
  } catch (error) {
    // console.log(error)
  }

  return {
    props: {
      posts,
    },
  };
}

export default SliderOne;
