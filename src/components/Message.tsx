import React, { FC } from "react";
import { UserAuth } from "../context/AuthContext";

type MessageProps = any;

const Message: FC<MessageProps> = ({ message }) => {
  const { currentUser } = UserAuth();

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  return (
    <div className="mt-[16px]">
      <div
        className={`chat ${
          currentUser.uid === message.uid ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className={`w-10 rounded-full`}>
            <img src={message.avatar} alt="avatar-person" />
          </div>
        </div>
        <div
          className={`chat-header flex items-center gap-[8px] ${
            currentUser.uid === message.uid ? "hidden" : ""
          }`}
        >
          {message.name}
          <time className="text-xs opacity-50">
            {(String(hour).length < 2 ? "0" + hour : hour) +
              ":" +
              (String(minutes).length < 2 ? "0" + minutes : minutes)}
          </time>
        </div>
        <div
          className={`chat-bubble ${
            currentUser.uid === message.uid ? "bg-purple-700 text-white" : ""
          }`}
        >
          {message.text}
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
