import { Constants } from "../../helpers/constants";

const Logo = () => {
  return (
    <svg width="281px" height="60px" viewBox="0 0 281 60" version="1.1">
      <title>Wordnox Software Solutions</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(-315.000000, -40.000000)">
          <g>
            <g id="logo" transform="translate(315.000000, 40.000000)">
              <text
                id="Keystroke-Startup-la"
                fontFamily="DMSans-Bold, DM Sans"
                fontSize="20"
                fontWeight="bold"
                fill={Constants.color.black}
              >
                <tspan x="75" y="24">
                  Wordnox
                </tspan>
                <tspan
                  x="175.14"
                  y="24.5001221"
                  fontFamily="DMSans-Regular, DM Sans"
                  fontWeight="normal"
                />
                <tspan
                  x="76.16"
                  y="49.5001221"
                  fontFamily="DMSans-Regular, DM Sans"
                  fontSize="18"
                  fontWeight="normal"
                >
                  Software Solutions
                </tspan>
              </text>
              <g id="Favicon">
                <rect
                  id="Base"
                  fill={Constants.color.yellow}
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  rx="14"
                />
                <g id="Group-3" transform="translate(15.000000, 11.000000)">
                  <circle
                    id="icon-oval-lg"
                    className="icon-oval-lg"
                    stroke={Constants.color.black}
                    strokeWidth="7"
                    cx="15"
                    cy="15"
                    r="11.5"
                  />
                  <circle
                    id="icon-oval-sm"
                    className="icon-oval-sm"
                    fill={Constants.color.black}
                    cx="4"
                    cy="34"
                    r="4"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
