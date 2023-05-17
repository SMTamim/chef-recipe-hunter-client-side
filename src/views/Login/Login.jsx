import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RxDividerHorizontal } from "react-icons/rx";
import { GoMarkGithub } from "react-icons/go";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";

const Login = () => {
  const { user, handleGithubSignIn, handleGoogleSignIn, loaded } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if(!loaded)
    return <Loading/>;
  if(user) {
    console.log(user);
    return <Navigate to={from} replace={true}/>
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
      <div className="w-full bg-gray-900 card text-primary-content">
        <div className="card-body">
          <h2 className="mb-5 text-4xl card-title">Login Here</h2>
          <div className="flex w-full">
            <div className="grid flex-grow p-5 bg-gray-800 card rounded-box">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span className="label-text">Email</span>
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
                    <span className="label-text">Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="flex items-center justify-center mt-5">
                  <button className="btn btn-wide">Login</button>
                </div>
              </form>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid flex-grow bg-gray-800 card rounded-box place-items-center">
              <div className="flex flex-col items-center justify-center">
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
