import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg";
import logo from "../assets/vite.svg";
import { useState } from "react";
import axios from "axios";

const SignIn = ({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://localhost:7020/api/Auth/Login", formData);
      
      //Store token in localStorage
      localStorage.setItem("token", response.data.jwtToken);
      localStorage.setItem("firstName", response.data.firstname);
      localStorage.setItem("lastName", response.data.lastname);

    
      setIsAuthenticated(true);

      //Redirect to ManageBooks after login
      navigate("/");

    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again.");
    }
  };


  return (
    <>
      <div className="grid xs:grid-cols-1 xl:grid-cols-2 h-svh">
        <div className="xs:hidden xl:flex items-center justify-center">
          <img
            src={loginImage}
            alt=""
            className="object-cover w-full h-full max-h-screen max-w-full"
          />
          <img
            src={logo}
            className="absolute w-96"
            />

        </div>
        <div className="flex items-center justify-center bg-amber-100">
          <form onSubmit={handleSubmit} className="w-full max-w-md p-8 shadow-lg rounded bg-white xs:mx-5 lg:mx-0">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>
            <p className="mb-1">
              Don’t have an account yet?{" "}
              <Link to="/register" className="text-green-500 hover:underline">
                Register
              </Link>
            </p>

            {/* Display error message if login fails */}
            {error && <p className="text-red-500 mb-3">{error}</p>}


            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="flex items-center justify-between mt-2 mb-4 pb-2 pt-2 float-right">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="btn btn-outline btn-accent w-full">LogIn</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
