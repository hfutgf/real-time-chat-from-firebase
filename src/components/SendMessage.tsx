import { FC, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMessage: FC = () => {
  const [value, setValue] = useState("");

  const { currentUser } = UserAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (value === "") return;

    try {
      const { uid, displayName, photoURL } = currentUser;

      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        uid,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }

    setValue("");
  };

  return (
    <div className="fixed bottom-0 w-screen py-3 pb-[24px] shadow-lg bg-violet-300">
      <form
        onSubmit={handleSubmit}
        className="container mx-auto w-full flex gap-[16px] items-center"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type here...."
          className="input input-bordered w-[90%] focus:outline-none"
        />
        <button type="submit" className="w-[10%]">
          <img
            src="/send.png"
            alt="send-icon"
            className="w-[40px] h-[40px] rounded-[50%]  active:translate-y-[2px] duration-75"
          />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
