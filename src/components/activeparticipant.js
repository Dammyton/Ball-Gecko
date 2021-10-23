import React from "react";
import { Slider, ActiveParticipantCard } from "./Slider";
import union from "../assets/Group.png";
import participant1 from "../assets/participant1.png";

const participants = [
  {
    image: participant1,
  },
];

const ActiveParticipants = () => {
  return (
    <div className="container">
      <div className=" pt-3 px-3">
        <div className="row mb-2">
          <div className="col-2">
            <img src={union} height="52px" alt="union"/>
          </div>
          <div
            className="col-3"
            style={{ color: "#7F7F7F", letterSpacing: "1px" }}
          >
            Invite Someone
          </div>
        </div>

        <Slider>
          {participants.map((participant, index) => (
            <ActiveParticipantCard key={index} image={participant.image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ActiveParticipants;
