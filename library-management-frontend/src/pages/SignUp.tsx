import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg";
import logo from "../assets/vite.svg";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://localhost:7020/api/Auth/Register", formData);
      console.log(response);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
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
            <h1 className="text-3xl font-bold mb-4">Register</h1>
            <p className="mb-1">
              Already have an account yet?{" "}
              <Link to="/login" className="text-green-500 hover:underline">
                Login
              </Link>
            </p>

            {/* Display error message if registration fails */}
            {error && <p className="text-red-500 mb-3">{error}</p>}

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
                className="input w-full input-bordered"
                required
              />
            </div>
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
            <button className="btn btn-outline btn-accent w-full mt-5">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
