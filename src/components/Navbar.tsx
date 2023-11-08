import React from "react";

const Navbar = () => {
  const user = true;
  return (
    <div className=" navbar bg-neutral text-neutral-content">
      <div className="container mx-auto flex items-center justify-between">
        <a className="btn btn-ghost normal-case text-xl">MJ Chat</a>

        {user && (
          <div>
            <button className="border-white border-[1px] border-solid py-[6px] px-[12px] rounded-[8px] hover:text-white duration-300">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
