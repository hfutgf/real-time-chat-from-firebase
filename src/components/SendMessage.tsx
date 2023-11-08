import React, { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="fixed bottom-0 w-screen py-10- shadow-lg">
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
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
