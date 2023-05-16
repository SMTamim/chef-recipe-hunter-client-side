import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RxDividerHorizontal } from "react-icons/rx";
import { GoMarkGithub } from "react-icons/go";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {
  const { user, handleGithubSignIn, handleGoogleSignIn } = useContext(AuthContext);

  if(user) {
    console.log(user);
    console.log("Navigating to home");
    return <Navigate to='/'/>
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="px-20 mt-5 lg:px-40">
      <div className="card w-full bg-gray-900 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-4xl mb-5">Login Here</h2>
          <div className="flex w-full">
            <div className="grid p-5 flex-grow card bg-base-300 rounded-box">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"></span>
                  </label>
                  <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="btn btn-wide">Login</button>
                </div>
              </form>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="flex flex-col justify-center items-center">
                <button onClick={handleGoogleSignIn} className="btn btn-wide">
                  <FcGoogle className="mr-2" />
                  Sign in with google
                </button>
                <RxDividerHorizontal />
                <button onClick={handleGithubSignIn} className="btn btn-wide">
                  <GoMarkGithub className="mr-2" />
                  Sign in with github
                </button>
              </div>
            </div>
          </div>
          <p className="mt-2">
            Don't have an account? register{" "}
            <Link className="link link-secondary" to="/register">
              here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
