import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import Layout from "../components/layouts/Layout";
import Image from "next/image";
import TeamData from "../data/Team.json";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import TeamMember from "../components/teams/TeamMember";

const Team = () => {
  return (
    <Layout title="Our Team">
      <main className="page-wrapper">
        <div className="axil-breadcrumb-area breadcrumb-style-2 team-group-thumb pt--170 pb--70 theme-gradient">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30">
                <div className="inner">
                  <h2 className="title">Meet the Wordnox Team</h2>
                  <p>
                    We take pride in our team of talented professionals who
                    bring a wealth of expertise and passion to every project.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="thumbnail text-start text-lg-end">
                  <div className="image-group">
                    <Image
                      width={370}
                      height={466}
                      className="image-1"
                      src="/images/slider/white-shape.png"
                      alt="Slider images"
                    />
                  </div>
                  <div className="shape-group">
                    <div className="shape shape-1">
                      <Image
                        width={190}
                        height={285}
                        src="/images/slider/human-1.svg"
                        alt="Shape Images"
                      />
                    </div>
                    <div className="shape shape-2">
                      <Image
                        width={193}
                        height={319}
                        src="/images/slider/human-2.svg"
                        alt="Shape Images"
                      />
                    </div>
                    <div className="shape shape-3">
                      <Image
                        width={226}
                        height={373}
                        src="/images/slider/human-3.svg"
                        alt="Shape Images"
                      />
                    </div>
                    <div className="shape shape-4">
                      <Image
                        width={274}
                        height={383}
                        src="/images/slider/human-4.svg"
                        alt="Shape Images"
                        layout="fixed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <SectionTitle
            title="Top Team Members"
            subtitle="Our Experts"
            description="Our team of experts is dedicated to delivering exceptional results for our clients. We take pride in our team of talented professionals who bring a wealth of expertise and passion to every project."
            color="extra08-color"
            alignment="center"
          />
          <div className="row">
            {TeamData?.map((team, teamIndex) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt--60 mt_sm--30 mt_md--30"
                key={`team-${teamIndex}`}
              >
                <TeamMember team={team} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Team;
