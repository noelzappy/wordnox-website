import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const PortfolioCard = ({ data, index, activeIndex, changeActive }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={item}
      className={`portfolio portfolio_style--1 axil-control ${
        activeIndex === index ? "active" : ""
      }`}
      onMouseEnter={() => changeActive(index)}
    >
      <div className="inner">
        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
          <div className="thumb">
            <Link href={data.url}>
              <Image
                width={400}
                height={380}
                src={data.feature_image}
                alt={`${data.title} portfolio image`}
                className="img-fluid w-100"
              />
            </Link>
          </div>
        </Tilt>

        <div className="port-overlay-info text-center">
          <div className="hover-action">
            <h4 className="title">
              <Link href={data.url}>{data.title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
