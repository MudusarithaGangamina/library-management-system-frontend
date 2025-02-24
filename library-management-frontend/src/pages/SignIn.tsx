import { Link } from "react-router-dom";
import loginImage from "../assets/login.jpg";

const SignIn = () => {
  return (
    <>
      <div className="grid xs:grid-cols-1 xl:grid-cols-2 h-svh">
        <div className="xs:hidden xl:flex items-center justify-center">
          <img
            src={loginImage}
            alt=""
            className="object-cover w-full h-full max-h-screen max-w-full"
          />
        </div>
        <div className="flex items-center justify-center bg-amber-100">
          <form className="w-full max-w-md p-8 shadow-lg rounded bg-white xs:mx-5 lg:mx-0">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>
            <p className="mb-1">
              Don’t have an account yet?{" "}
              <Link to="/register" className="text-green-500 hover:underline">
                Register
              </Link>
            </p>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
