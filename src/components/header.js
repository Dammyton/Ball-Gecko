import React from "react";
import logo from "../assets/logo.svg";
import gems from "../assets/bg gems 1.png";
import coins from "../assets/Group 3232.svg";

function Header() {
  return (
    <div>
      <div className="bg-darksecondary">
        <div className="d-flex justify-content-between ">
          <a href="/">
            <img src={logo} alt="logo" className="logo-size pt-2 pb-2" />
          </a>
          <div className="blend-mode d-flex align-items-center ">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-white">
              {" "}
              <img src={coins} alt="coins" height="18px" />
              <small>5.11K</small>
            </span>
            &nbsp;&nbsp;
            <span className="text-white">
              {" "}
              <img src={gems} alt="gems" height="20px" />
              <small> 1.2K</small>&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
