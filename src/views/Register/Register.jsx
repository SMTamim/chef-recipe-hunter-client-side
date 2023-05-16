import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo_url = event.target.photo_url.value;

    console.log(name, email, password, photo_url);
  }

  return (
    <div className="px-20 mt-5 lg:px-40">
      <div className="card w-full bg-gray-900 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-4xl mb-5">Register Here</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex w-full">
              <div className="grid p-5 flex-grow card bg-base-300 rounded-box">
              <div className="form-control mb-2">
                  <label className="input-group input-group-vertical">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="form-control mb-2">
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
                <div className="form-control mb-2">
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
                <div className="form-control mb-2">
                  <label className="input-group input-group-vertical">
                    <span>Photo URL</span>
                    <input
                      type="text"
                      name="photo_url"
                      placeholder="Enter your photo URL"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="btn btn-wide">Sign-up</button>
                </div>
              </div>
            </div>
            <p className="mt-2">
              Already have an account? login{" "}
              <Link className="link link-secondary" to="/login">
                here
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;