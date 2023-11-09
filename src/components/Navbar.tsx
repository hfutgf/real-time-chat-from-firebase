import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="navbar fixed z-50 top-0 bg-neutral text-neutral-content">
      <div className="container mx-auto flex items-center justify-between">
        <a className="btn btn-ghost normal-case text-xl">MJ Chat</a>

        {currentUser && (
          <div>
            <button
              onClick={handleLogout}
              className="border-white border-[1px] border-solid py-[6px] px-[12px] rounded-[8px] hover:text-white duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
