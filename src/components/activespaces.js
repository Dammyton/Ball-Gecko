import React from 'react'
import { Slider, ActiveSpaceCard } from "./Slider";
import image1 from "../assets/image1.png"

const spaces = [
  {
    name: "Mahbub’s space",
    image: image1
  },
];

const ActiveSpaces = () => {
    return (
      <div className=" p-3">
        <h2 className="active-heading mb-0">Active Spaces</h2>

        <Slider>
          {spaces.map((space, index) => (
            <ActiveSpaceCard key={index} name={space.name} image={space.image} />
          ))}
        </Slider>
      </div>
    );
}

export default ActiveSpaces
