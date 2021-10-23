import React from 'react'
import { Slider, ActiveSpaceCard } from "./Slider";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png";

const spaces = [
  {
    name: "Mahbub’s Space",
    image: image1,
  },
  {
    name: "Brandon’s Space",
    image: image2,
  },
  {
    name: "Solape’s Space",
    image: image3,
  },
  {
    name: "Mahbub’s Space",
    image: image1,
  },
  {
    name: "Brandon’s Space",
    image: image2,
  },
  {
    name: "Solape’s Space",
    image: image3,
  },
  {
    name: "Mahbub’s Space",
    image: image1,
  },
  {
    name: "Brandon’s Space",
    image: image2,
  },
  {
    name: "Solape’s Space",
    image: image3,
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
