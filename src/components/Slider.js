import React from "react";

export const Slider = ({ children, className }) => {
  return (
    <div className={className ? `${className} px-5` : ""}>
      <div className="slide">{children}</div>
    </div>
  );
};

export const ActiveSpaceCard = ({ image, name }) => (
  <div className={`category mr-4 mt-1 mb-2 `}>
    <div
      className={`card category border-0 `}
      style={{
        backgroundImage: `url(${image}) `,
        backgroundSize: "auto",
        backgroundRepeat: " no-repeat",
        height: "140px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      <p className="text-right"></p>

      <a href="/active-space">
        <h6 className="m-2 text-white">{name}</h6>
      </a>
    </div>
  </div>
);

export const ActiveParticipantCard = ({ image }) => (
  <div className={`category mr-4 mt-1 mb-2 `}>
    <div className={`card category border-0 `}>
      <img src={image} height="34px" alt="participant" />
    </div>
  </div>
);
