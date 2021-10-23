import React from "react";
import {  Container } from "react-bootstrap";
import Header from "../components/header";
import TitleBar from "../components/titlebar"
import NavBar from "../components/navbar";
import ActiveSpaces from "../components/activespaces";
import RecentChat from "../components/recentchat";

export default function Index() {
  return (
    <div>
      <Container fluid className="p-0">
        <Header />
        <TitleBar />
        <ActiveSpaces />
        <RecentChat/>
        <NavBar />
      </Container>
    </div>
  );
}
