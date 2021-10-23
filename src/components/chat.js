import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import image from "../assets/Image.png";
import cancel from "../assets/cancel.png";
import arrow from "../assets/arrow.png";

const Chat = () => {
  return (
    <div className="container">
      <div className=" pb-3 px-3">
        <p
          className="text-center mb-1"
          style={{ color: "#ED1C24", letterSpacing: "1px", fontSize: "12px" }}
        >
          TODAY 6:34 PM
        </p>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-10 position-relative">
            <div className="bg-dark text-white p-2 ls-1">
              Anybody here loving Lukaku’s form?
            </div>
            <img
              src={avatar1}
              height="24px"
              alt="avatar"
              className="position-absolute move-right"
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-3"></div>
          <div className="col-9 position-relative">
            <div className="bg-dark text-white p-2 ls-1">
              He is in terrible form, @halods hope say you bet on top this guy?
            </div>
            <img
              src={avatar2}
              height="24px"
              alt="avatar"
              className="position-absolute move-right"
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-4"></div>
          <div className="col-8 position-relative align-right ">
            <div className="mb-1">
              <img src={cancel} height="20px" alt="cancel" /> &nbsp;&nbsp;
              <img src={arrow} height="22px" alt="arrow" />
              &nbsp;&nbsp;
              <img src={image} height="70px" alt="footballer" />
            </div>
            <div className="bg-dark text-white align-right p-2 ls-1">
              Peep my GOAT’s jubilation style! Dope stuff!!!{" "}
            </div>
          </div>
        </div>
        <p className="newuser-joined mb-1">Folake joined.</p>
        <div className="row mb-1">
          <div className="col-10 position-relative">
            <div className="bg-dark text-white p-2 ls-1">
              Hello everybody! I’m Folake.
            </div>
            <img
              src={avatar3}
              height="24px"
              alt="avatar"
              className="position-absolute move-right"
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <InputGroup className="mt-3 mb-5" style={{ background: "#252836" }}>
        <InputGroup.Text
          className="border-0"
          style={{ background: "#252836", borderRadius: "20px" }}
        >
          <i className="fa fa-smile-o" style={{ color: "#596787" }}></i>
        </InputGroup.Text>
        <FormControl
          className="border-0"
          placeholder="Leave a comment"
          style={{ background: "#252836" }}
        />
        <InputGroup.Text
          className="border-0"
          style={{ background: "#252836", borderRadius: "20px" }}
        >
          <i
            className="fa fa-camera"
            style={{ color: "#596787" }}
            aria-hidden="true"
          ></i>
          &nbsp;&nbsp;
          <i
            className="fa fa-paper-plane text-white bg-danger p-1"
            style={{ borderRadius: "50%" }}
            aria-hidden="true"
          ></i>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Chat;
