import React, { useState } from "react";
import { chats } from "./common/recentchats";

function RecentChat() {
  const [currentPage, setCurrentPage] = useState(1);
  const [chatsPerPage] = useState(4);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  // Logic for displaying chats
  const indexOfLastChat = currentPage * chatsPerPage;
  const indexOfFirstChat = indexOfLastChat - chatsPerPage;
  const currentChats = chats.slice(indexOfFirstChat, indexOfLastChat);
  // console.log(
  //   currentChats,
  //   currentPage,
  //   indexOfFirstChat,
  //   indexOfLastChat,
  //   "currentChats"
  // );
  const renderChats = currentChats.map((chat, index) => {
    return (
      <div key={{ index }}>
        <div className="row mb-1" style={{ color: "#7F7F7F" }}>
          <div className="col-2">
            <img src={chat.icon} alt="chatImage" height="30px" />
          </div>
          <div className="col-8">
            <small className="mb-0">
              {" "}
              <b>{chat.name}</b>
            </small>
            <br />
            <small> {chat.text}</small>
          </div>
          <div className="col-2 p-0">
            <small>{chat.time}</small>
          </div>
        </div>
      </div>
    );
  });

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(chats.length / chatsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <span key={number} id={number} onClick={handleClick}>
        <i id={number} class="fa fa-circle text-pink" aria-hidden="true"></i>
      </span>
    );
  });

  return (
    <div className=" pb-3 px-3">
      <h2 className="active-heading mb-0">Recent</h2>
      <div>
        <ul id="page-numbers" className="mb-2 px-5">
          {renderPageNumbers}
        </ul>
        <div className="mb-5">{renderChats}</div>
      </div>
    </div>
  );
}

export default RecentChat;
