import Image from "next/image";
import { Constants } from "../../helpers/constants";

// <Image
//   src="/images/logo.png"
//   alt="Wordnox Software Solutions"
//   width={40}
//   height={40}
// />
const Logo = () => {
  return (
    <div className="logo d-flex align-items-center justify-items-center">
      <h6 className="logo-text display-6 text-bold">
        <strong>
          Word
          <mark
            style={{
              backgroundColor: Constants.color.yellow,
              color: "#000248",
            }}
          >
            nox
          </mark>
        </strong>
      </h6>
    </div>
  );
};

export default Logo;
