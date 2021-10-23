import React from "react";
import { chats } from "./common/recentchats";

function RecentChat() {
  return (
    <div className=" pb-3 px-3">
      <h2 className="active-heading">Recent</h2>

      {chats.map((chat, index) => (
        <div key={{ index }} >
        <div className="row mb-1" style={{ color: "#7F7F7F" }}>
          <div className="col-2">
            <img src={chat.icon} alt="chatImage" height="30px" />
          </div>
          <div className="col-8">
            <small className="mb-0"> {chat.name}</small>
            <small> {chat.text}</small>
          </div>
          <div className="col-2">{chat.time}</div>
        </div>
         </div>
      ))}
    </div>
  );
}

export default RecentChat;
