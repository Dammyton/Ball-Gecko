import React from "react";
import { Slider, ActiveParticipantCard } from "./Slider";
import union from "../assets/Union.png";
import participant1 from "../assets/participant1.png";

const participants = [
  {
    image: participant1,
  },
];

const ActiveParticipants = () => {
  return (
    <div className=" px-3 pt-3">
      <div className="row mb-2">
        <div className="col-2">
          <img src={union} height="52px" />
        </div>
        <div className="col-3" style={{ color: "#7F7F7F",letterSpacing: "1px" }}>
          Invite Someone
        </div>
      </div>

      <Slider>
        {participants.map((participant, index) => (
          <ActiveParticipantCard key={index} image={participant.image} />
        ))}
      </Slider>
    </div>
  );
};

export default ActiveParticipants;
