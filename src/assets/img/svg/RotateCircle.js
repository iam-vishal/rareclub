export const Circle = (props) => {
  const reverse = props?.reverse;
  return (
    <div
      className={`ellipse_svg${reverse === true ? " reverse" : ""}`}
      {...props}
    >
      <svg viewBox="0 0 833 833" fill="none">
        <path
          d="M 416.5,416.5 m -415.5,0 a 415.5,415.5 0 1,0 831,0 a 415.5,415.5 0 1,0 -831,0"
          strokeDasharray="5.45 6.81"
        ></path>
      </svg>
    </div>
  );
};
export const CircleGredient = (props) => {
  return (
    <div className="ellipse_svg gredient">
      <svg viewBox="0 0 833 833" fill="none">
        <path
          d="M 416.5,416.5 m -415.5,0 a 415.5,415.5 0 1,0 831,0 a 415.5,415.5 0 1,0 -831,0"
          stroke="url(#ellipse-cta)"
          strokeDasharray="5.45 6.81"
        ></path>
        <defs>
          <linearGradient
            id="ellipse-cta"
            x1="694.934"
            y1="740.503"
            x2="304.467"
            y2="691.175"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor"></stop>
            <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
