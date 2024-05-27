import { Constants } from "../../helpers/constants";

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
