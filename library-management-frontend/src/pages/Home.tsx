import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login.jpg";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div
      className="bg-cover bg-center h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="w-full max-w-lg p-10 shadow-lg rounded bg-white xs:mx-5 lg:mx-0 text-center grid items-center justify-center gap-5">
        <h1>
          Hi, <span className="font-semibold">Mudusaritha Gangamina</span>
        </h1>
        <img src={logo} alt="" className="w-32 h-32 mx-auto" />
        <p className="text-xl font-medium">
          Welcome to BookNest Library Management System
        </p>
        <button
          onClick={() => navigate("/add-book")}
          className="px-10 py-2 bg-blue-500 rounded-lg text-white"
        >
          Add a New Book
        </button>
        <button
          onClick={() => navigate("/manage-books")}
          className="px-10 py-2 bg-amber-600 rounded-lg text-white"
        >
          Manage Book List
        </button>
        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-red-600 rounded-lg text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
