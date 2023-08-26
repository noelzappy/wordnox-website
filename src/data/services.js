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

    body2:
      "We breathe life into your digital aspirations through innovative and seamless mobile app development. Our process is a harmonious blend of creativity, functionality, and cutting-edge technology, resulting in mobile experiences that captivate users and drive your business forward.",
    body3:
      "Partner with Wordnox.com to transform your mobile app vision into a reality. Let's embark on a journey to create an app that leaves an indelible mark on users worldwide.",
    process: [
      "Conceptualization and Ideation",
      " Design and User Experience (UI/UX)",
      "Development and Coding",
      "Rigorous Testing and Quality Assurance",
      "Launch and Distribution",
      "Ongoing Maintenance and Updates",
    ],

    difference: [
      "User-Centric Approach",
      "Cross-Platform Expertise",
      "Cutting-Edge Technology",
      "Data-Driven Decisions",
    ],
  },
  {
    icon: <CgWebsite />,
    title: "Website Development",
    description:
      "We design and develop dynamic websites/web apps that engage users and drive conversions.",
    slug: "web-development",
    body: "We design and develop dynamic websites and web applications that engage users and drive conversions. Our focus on user experience and modern design ensures your online presence stands out.",
    body2:
      "Our web development services are an artistic fusion of creativity and functionality, designed to captivate users and elevate your brand's online presence.",
    body3:
      "Partner with Wordnox.com to redefine your digital presence. Let's embark on a journey to create a website that leaves an indelible mark on the digital landscape.",
    difference: [
      "Strategic Approach",
      "User-Centric Design",
      "Responsive Across Devices",
      "Cutting-Edge Technology",
    ],
    process: [
      "Discovery and Strategy",
      "Planning and Architecture",
      "Design and User Experience (UI/UX)",
      "Development and Coding",
      "Testing and Quality Assurance",
      "Launch and Deployment",
      "Ongoing Maintenance and Support",
    ],
  },
  {
    icon: <MdManageHistory />,
    title: "Website Maintenance & Management",
    description:
      "We offer ongoing support to keep your digital assets in top shape.",
    slug: "web-maintenance",
    body: "We offer ongoing support to keep your digital assets in top shape. Regular updates, bug fixes, and optimization ensure your website and web apps remain secure and perform efficiently.",

    body2:
      "We recognize that the digital journey doesn't end with launch. Our website maintenance and management services are your safeguard, ensuring your digital assets remain impeccable and up-to-date, allowing you to focus on what you do best – growing your business.",
    body3:
      "Partner with Wordnox.com to keep your digital assets in top shape. Let's ensure your website remains a beacon of excellence in the online realm.",
    process: [
      "Regular Updates and Monitoring",
      "Performance Optimization",
      "Content Management",
      "Security Enhancements",
      "Technical Support",
    ],
    difference: [
      "Proactive Maintenance",
      "Personalized Attention",
      "Security-First Approach",
      "User-Centric Experience",
    ],
  },

  {
    icon: <TbSocial />,
    title: "Social Media Marketing",
    description:
      "We leverage the power of social platforms to connect you with your audience.",
    slug: "social-marketing",
    body: "Our experts leverage the power of social platforms to connect you with your audience. We design engaging campaigns, manage your social profiles, and foster meaningful interactions that build brand loyalty and customer engagement.",

    body2:
      "Our social media marketing service is a harmonious blend of creativity, strategy, and engagement, designed to cultivate a thriving online community and amplify your brand's presence.",

    process: [
      "Strategic Planning",
      "Content Creation",
      "Platform Selection",
      "Community Building",
      "Analytics and Insights",
      "Continuous Optimization",
    ],

    difference: [
      "Tailored Strategies",
      "Engagement Focused",
      "Visual Storytelling",
      "Data-Driven Decisions",
    ],
    body3:
      "Partner with Wordnox.com to breathe life into your social media presence. Let's cultivate a digital community that resonates, engages, and propels your brand forward.",
  },

  {
    icon: <PiWebhooksLogoLight />,
    title: "Display Advertising",
    description:
      "We craft visually appealing display ads that grab attention across websites and platforms.",
    slug: "display-ads",
    body: "We craft visually appealing display ads that grab attention across websites and platforms. Our targeted approach ensures your ads reach the right people, boosting brand visibility and driving conversions.",

    body2:
      "Our display ads service is a fusion of creativity and data-driven precision, designed to enhance brand visibility, engagement, and conversion rates across digital platforms.",
    process: [
      "Strategic Framework",
      "Visual Creativity",
      "Platform Selection",
      "Targeting Precision",
      "Performance Analytics",
      "Continuous Optimization",
    ],
    difference: [
      "Strategic Insight",
      "Visually Engaging",
      "Data-Informed Strategy",
      "Cross-Platform Prowess",
    ],
    body3:
      "Partner with Wordnox.com to create display ads that not only turn heads but also drive engagement and conversions. Let's tell your brand's story through captivating visuals that resonate with your audience.",
  },
  {
    icon: <LuSearch />,
    title: "Search Engine Marketing (SEM)",
    description:
      "Our SEM strategies place your brand at the forefront of search engine results through paid advertising.",
    slug: "sem",
    body: "Our SEM strategies place your brand at the forefront of search engine results through paid advertising. With optimized keywords and strategic campaigns, we help you achieve immediate visibility and drive qualified traffic to your website.",

    body2:
      "We wield the power of search engine marketing (SEM) to position your brand at the forefront of search engine results, capturing immediate attention and driving qualified traffic to your digital doorstep. Our SEM service is a strategic fusion of targeted advertising, keyword optimization, and data-driven decision-making, designed to amplify your brand's visibility and accelerate your digital growth.",

    process: [
      "Goal Identification",
      "Keyword Research",
      "Ad Creation",
      "Campaign Setup",
      "Performance Monitoring",
      "Data-Driven Refinement",
      "Continuous Optimization",
    ],
    difference: [
      "Strategic Precision",
      "Keyword Mastery",
      "Data-Backed Decisions",
      "Immediate Visibility",
    ],

    body3:
      "Partner with Wordnox.com to conquer the search engine landscape. Let's elevate your brand's visibility, engage your audience, and drive conversions through strategic search engine marketing.",
  },
  {
    icon: <FiCast />,
    title: "Search Engine Optimization (SEO)",
    description: "Enhancing your organic search visibility is our expertise.",
    slug: "seo",
    body: "Enhancing your organic search visibility is our expertise. We conduct thorough keyword research, optimize on-page elements, and develop authoritative backlinks to elevate your website's ranking in search engine results. Our holistic approach ensures sustainable, long-term growth.",

    body2:
      "Unlock unparalleled visibility and catapult your brand to the zenith of search engine results with Wordnox.com's Search Engine Marketing (SEM) service. A symphony of strategic advertising, keyword finesse, and data-driven insights, our SEM prowess propels your brand to the forefront of digital discovery.",

    process: [
      "Goal Definition",
      "Precise Keyword Selection",
      "Compelling Ad Creation",
      "Strategic Campaign Setup",
      "Continuous Monitoring",
      "Data-Driven Refinement",
      "Continuous Evolution",
    ],
    body3:
      "Partner with Wordnox.com to orchestrate your SEM journey. Elevate your brand's visibility, drive conversions, and experience the transformation of strategic search engine marketing.",

    difference: [
      "Strategic Precision",
      "Keyword Alchemy",
      "Data as Compass",
      "Immediate Impact",
    ],
  },

  {
    icon: <FiLayers />,
    title: "Content Marketing",
    description:
      "We create relevant, valuable, and shareable content that resonates with your target audience.",
    slug: "content-marketing",
    body: "Compelling content is key to capturing your audience's attention. We create relevant, valuable, and shareable content that resonates with your target audience, establishing your brand as an authority in your industry.",
  },
];

export default ServiceList;

export function getServiceBySlug(slug) {
  return ServiceList.find((i) => i.slug === slug);
}
