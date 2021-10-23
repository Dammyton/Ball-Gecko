import React from "react";
import { Slider, ActiveParticipantCard } from "./Slider";
import union from "../assets/Group.png";
import participant1 from "../assets/participant1.png";
import participant2 from "../assets/participant2.png";
import participant3 from "../assets/participant3.png";
import participant4 from "../assets/participant4.png";
import participant5 from "../assets/participant5.png";
import participant6 from "../assets/participant6.png";
import participant7 from "../assets/participant7.png";

const participants = [
  {
    image: participant1,
  },
  {
    image: participant2,
  },
  {
    image: participant3,
  },
  {
    image: participant4,
  },
  {
    image: participant5,
  },
  {
    image: participant6,
  },
  {
    image: participant7,
  },
];

const ActiveParticipants = () => {
  return (
    <div className="container">
      <div className=" pt-3 px-3">
        <div className="row mb-2">
          <div className="col-2">
            <img src={union} height="52px" alt="union" />
          </div>
          <div
            className="col-3"
            style={{ color: "#7F7F7F", letterSpacing: "1px" }}
          >
            Invite Someone
          </div>
        </div>

        <Slider>
          <div className="style">
            {participants.map((participant, index) => (
              <ActiveParticipantCard key={index} image={participant.image} />
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ActiveParticipants;
