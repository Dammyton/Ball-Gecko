import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import TitleActiveBar from "../components/titleactivebar";
import NavBar from "../components/navbar";
import ActiveParticipants from "../components/activeparticipant";
import Chat from "../components/chat";

export default function ActiveSpace() {
  return (
    <div>
      <Container fluid className="p-0">
        <Header />
        <TitleActiveBar />
        <ActiveParticipants />
        <Chat />
        <NavBar />
      </Container>
    </div>
  );
}
