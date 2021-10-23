import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import BGICON from "../assets/BG ICON.svg";
import Communities from "../assets/Communities.svg";
import Hot from "../assets/Hot.svg";
import Vector from "../assets/Vector.svg";
import notification from "../assets/notification.png";

function NavBar() {
  return (
    <>
      <Navbar
        style={{ background: "#383838 " }}
        expand="lg"
        fixed="bottom"
        className="px-3"
      >
        <Nav.Link href="#">
          <div className="text-center">
            <img src={Hot} height="26px" alt="icon" />
          </div>
        </Nav.Link>
        <Nav.Link href="#">
          <div className="text-center">
            <img src={Communities} height="26px" alt="icon" />
          </div>
        </Nav.Link>
        <Nav.Link href="#">
          <div className="text-center">
            <img src={BGICON} height="26px" alt="icon" />
          </div>
        </Nav.Link>
        <Nav.Link href="#">
          <div className="text-center">
            <img src={Vector} height="26px" alt="icon" />
          </div>
        </Nav.Link>
        <Nav.Link href="#">
          <div className="text-center">
            <img src={notification} height="26px" alt="icon" />
          </div>
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default NavBar;
