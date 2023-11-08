import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello",
      name: "Murod",
      date: new Date().getHours() + ":" + new Date().getMinutes(),
    },
    {
      id: 2,
      text: "Hello world",
      name: "Anvar",
      date: new Date().getHours() + ":" + new Date().getMinutes(),
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
