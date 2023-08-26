import React from "react";
import { FiCast } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { GoDeviceMobile } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { MdManageHistory } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { PiWebhooksLogoLight } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";

const ServiceList = [
  {
    icon: <GoDeviceMobile />,
    title: "Mobile Development",
    description:
      "We create cutting-edge mobile applications that cater to the unique needs of your business.",
    slug: "mobile-development",
    body: "Our skilled developers create cutting-edge mobile applications that cater to the unique needs of your business. From intuitive user interfaces to seamless functionality, we turn ideas into impactful mobile experiences.",
  },
  {
    icon: <CgWebsite />,
    title: "Website Development",
    description:
      "We design and develop dynamic websites/web apps that engage users and drive conversions.",
    slug: "web-development",
    body: "We design and develop dynamic websites and web applications that engage users and drive conversions. Our focus on user experience and modern design ensures your online presence stands out.",
  },
  {
    icon: <MdManageHistory />,
    title: "Website Maintenance & Management",
    description:
      "We offer ongoing support to keep your digital assets in top shape.",
    slug: "web-maintenance",
    body: "We offer ongoing support to keep your digital assets in top shape. Regular updates, bug fixes, and optimization ensure your website and web apps remain secure and perform efficiently.",
  },

  {
    icon: <TbSocial />,
    title: "Social Media Marketing",
    description:
      "We leverage the power of social platforms to connect you with your audience.",
    slug: "social-marketing",
    body: "Our experts leverage the power of social platforms to connect you with your audience. We design engaging campaigns, manage your social profiles, and foster meaningful interactions that build brand loyalty and customer engagement.",
  },
  {
    icon: <FiLayers />,
    title: "Content Marketing",
    description:
      "We create relevant, valuable, and shareable content that resonates with your target audience.",
    slug: "content-marketing",
    body: "Compelling content is key to capturing your audience's attention. We create relevant, valuable, and shareable content that resonates with your target audience, establishing your brand as an authority in your industry.",
  },
  {
    icon: <PiWebhooksLogoLight />,
    title: "Display Advertising",
    description:
      "We craft visually appealing display ads that grab attention across websites and platforms.",
    slug: "display-ads",
    body: "We craft visually appealing display ads that grab attention across websites and platforms. Our targeted approach ensures your ads reach the right people, boosting brand visibility and driving conversions.",
  },
  {
    icon: <LuSearch />,
    title: "Search Engine Marketing (SEM)",
    description:
      "Our SEM strategies place your brand at the forefront of search engine results through paid advertising.",
    slug: "sem",
    body: "Our SEM strategies place your brand at the forefront of search engine results through paid advertising. With optimized keywords and strategic campaigns, we help you achieve immediate visibility and drive qualified traffic to your website.",
  },
  {
    icon: <FiCast />,
    title: "Search Engine Optimization (SEO)",
    description: "Enhancing your organic search visibility is our expertise.",
    slug: "seo",
    body: "Enhancing your organic search visibility is our expertise. We conduct thorough keyword research, optimize on-page elements, and develop authoritative backlinks to elevate your website's ranking in search engine results. Our holistic approach ensures sustainable, long-term growth.",
  },
];

export default ServiceList;
