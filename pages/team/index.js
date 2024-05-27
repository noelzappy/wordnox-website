import Head from "next/head";
import { useEffect, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import VideoPlayer from "../../components/common/VideoPlayer";
import CounterTwo from "../../components/counters/CounterTwo";
import Layout from "../../components/layouts/Layout";
import TeamMember from "../../components/teams/TeamMember";
import TeamData from "../../data/Team.json";
import { flatDeep } from "../../helpers/utilities";
import Image from "next/image";

const Team = () => {
  const [isWindow, setIsWindow] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState(0);

  const getDepartments = () => {
    let allDepartments = TeamData.map((item) => item.department),
      singleDepartmentArray = flatDeep(allDepartments),
      departments = "";

    departments = singleDepartmentArray.reduce((a, b) => {
      if (a.indexOf(b) < 0) {
        a.push(b);
      }
      return a;
    }, []);

    setDepartments(departments);
  };

  useEffect(() => {
    getDepartments();
    setIsWindow(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Our Team | Wordnox</title>
      </Head>

      <main className="page-wrapper">
        <div className="axil-breadcrumb-area breadcrumb-style-2 team-group-thumb pt--170 pb--70 theme-gradient">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30">
                <div className="inner">
                  <h2 className="title">Meet talent & experience</h2>
                  <p>
                    Grow your business online by awesomely designed mobile apps
                    that fits all types.
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

        <div className="axil-video-area ax-section-gapTop bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  title="Design startup movement"
                  subtitle="experts in field"
                  description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                  color="extra08-color"
                  alignment="center"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Team;
