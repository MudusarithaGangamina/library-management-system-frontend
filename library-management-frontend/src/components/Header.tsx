import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="xs:hidden lg:flex h-[82px] items-center justify-between md:px-20 border-b-2">
        <img src={logo} alt="" className="w-24 h-20 xs:hidden md:block" />
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate("/add-book")}
            className="px-10 py-2 bg-blue-500 rounded-lg text-white"
          >
            Add Book
          </button>
          <button
            onClick={() => navigate("/manage-books")}
            className="px-10 py-2 bg-amber-600 rounded-lg text-white"
          >
            Manage Books
          </button>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-600 rounded-lg text-white"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="xs:flex lg:hidden items-center h-[70px] pt-1 border-b-2 justify-between px-5 sd:px-16">
        <GiHamburgerMenu onClick={() => setIsOpen(true)} />
        <img src={logo} alt="" className="w-16 h-16 xs:block lg:hidden" />
      </div>

      <div
        className={`fixed xs:flex items-center justify-center lg:hidden left-0 top-0 w-full bg-yellow-300 h-svh pt-12 z-50 transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-7 right-5">
          <IoMdClose className="w-6 h-6" onClick={() => setIsOpen(false)} />
        </div>
        <div>
          <div className="grid items-center gap-5">
            <button
              onClick={() => navigate("/add-book")}
              className="px-10 py-2 bg-blue-500 rounded-lg text-white"
            >
              Add Book
            </button>
            <button
              onClick={() => navigate("/manage-books")}
              className="px-10 py-2 bg-amber-600 rounded-lg text-white"
            >
              Manage Books
            </button>
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-600 rounded-lg text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
