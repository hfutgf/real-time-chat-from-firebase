import React, { FC } from "react";

type MessageProps = {
  message: {
    text: string;
    id: number;
    name: string;
    date: any;
  };
};

const Message: FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header flex items-center gap-[8px]">
          {message.name}
          <time className="text-xs opacity-50">{message.date}</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
