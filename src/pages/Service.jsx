import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast, FiLayers, FiMonitor, FiChevronUp } from "react-icons/fi";
import { GoDeviceMobile } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { MdManageHistory } from "react-icons/md";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { TbSocial } from "react-icons/tb";
import { PiWebhooksLogoLight } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";

const MarketingServices = [
  {
    icon: <TbSocial />,
    title: "Social Media Marketing",
    description:
      "Our experts leverage the power of social platforms to connect you with your audience. We design engaging campaigns, manage your social profiles, and foster meaningful interactions that build brand loyalty and customer engagement.",
  },
  {
    icon: <FiLayers />,
    title: "Content Marketing",
    description:
      "Compelling content is key to capturing your audience's attention. We create relevant, valuable, and shareable content that resonates with your target audience, establishing your brand as an authority in your industry.",
  },
  {
    icon: <PiWebhooksLogoLight />,
    title: "Display Advertising",
    description:
      "We craft visually appealing display ads that grab attention across websites and platforms. Our targeted approach ensures your ads reach the right people, boosting brand visibility and driving conversions.",
  },
  {
    icon: <LuSearch />,
    title: "Search Engine Marketing (SEM)",
    description:
      "Our SEM strategies place your brand at the forefront of search engine results through paid advertising. With optimized keywords and strategic campaigns, we help you achieve immediate visibility and drive qualified traffic to your website.",
  },
  {
    icon: <FiCast />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Enhancing your organic search visibility is our expertise. We conduct thorough keyword research, optimize on-page elements, and develop authoritative backlinks to elevate your website's ranking in search engine results. Our holistic approach ensures sustainable, long-term growth.",
  },
];

const SoftwareServices = [
  {
    icon: <GoDeviceMobile />,
    title: "Mobile Development",
    description:
      "Our skilled developers create cutting-edge mobile applications that cater to the unique needs of your business. From intuitive user interfaces to seamless functionality, we turn ideas into impactful mobile experiences.",
  },
  {
    icon: <CgWebsite />,
    title: "Website Development",
    description:
      "We design and develop dynamic websites and web applications that engage users and drive conversions. Our focus on user experience and modern design ensures your online presence stands out.",
  },
  {
    icon: <MdManageHistory />,
    title: "Website Maintenance & Management",
    description:
      "We offer ongoing support to keep your digital assets in top shape. Regular updates, bug fixes, and optimization ensure your website and web apps remain secure and perform efficiently.",
  },
];

class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Service" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Service"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Software Development</h2>
                  <p>
                    Our team of skilled developers creates cutting-edge mobile
                    apps and websites that engage users and deliver seamless
                    experiences. We also provide ongoing maintenance and
                    management to ensure your digital assets remain top-notch.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {SoftwareServices.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Digital Marketing & SEO</h2>
                  <p>
                    Unlock the full potential of your online presence with our
                    strategic digital marketing campaigns. From social media
                    engagement to content marketing and SEO optimization, we
                    craft targeted approaches that resonate with your audience
                    and amplify your brand visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {MarketingServices.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default Service;
