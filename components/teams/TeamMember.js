import Image from "next/image";
import Tilt from "react-parallax-tilt";

const TeamMember = ({ team }) => {
  return (
    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
      <div className="axil-team">
        <div className="inner">
          <div className="thumbnail paralax-image">
            <Image
              width={400}
              height={400}
              className="w-100"
              src={team.image}
              alt="Team Images"
            />
          </div>
          <div className="content text-center">
            <h4 className="title">
              <span>{team.name}</span>
            </h4>
            <p className="subtitle">{team.designation}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default TeamMember;
