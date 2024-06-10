import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PortfolioData from "../../data/Portfolio.json";
import SectionTitle from "../common/SectionTitle";
import PortfolioCard from "./PortfolioCard";
import PortfolioFilter from "./PortfolioFilter";

const PortfolioOne = ({
  bgColor = "bg-color-lightest",
  showMoreLink,
  count,
  portfolioPosts,
}) => {
  const [activePortfolio, setActivePortfolio] = useState(0);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const changeActive = (index) => {
    setActivePortfolio(index);
  };

  return (
    <div className={`axil-portfolio-area ax-section-gap ${bgColor}`}>
      <div className="container axil-masonary-wrapper">
        <div className="row align-items-end">
          <SectionTitle
            title="Some of our finest work."
            subtitle="Our Projects"
            titleClass="mb-0"
            color="extra07-color"
            alignment="left"
          />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mesonry-list grid-metro3 mt--20"
            >
              {portfolioPosts?.map((portfolio, index) => (
                <PortfolioCard
                  key={`portfolio-${index}`}
                  data={portfolio}
                  index={index}
                  activeIndex={activePortfolio}
                  changeActive={changeActive}
                />
              ))}
            </motion.div>
            {showMoreLink && (
              <div className="view-all-portfolio-button mt--60 text-center">
                <Link
                  href="/portfolio"
                  className="axil-button btn-large btn-transparent btn-xxl"
                >
                  <span className="button-text">Discover More Projects</span>
                  <span className="button-icon" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOne;
