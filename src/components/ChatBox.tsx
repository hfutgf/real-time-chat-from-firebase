import { FC, useEffect, useRef, useState } from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

const ChatBox: FC = () => {
  const messageEndRef = useRef<any>();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: any = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <div className="container mx-auto min-h-screen mb-[96px]">
        {messages.map((message: any) => (
          <Message message={message} key={message.id} />
        ))}
      </div>
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default ChatBox;
