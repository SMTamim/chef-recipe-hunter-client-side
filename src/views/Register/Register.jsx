import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const Register = () => {
  const { user, loaded } = useContext(AuthContext);

  if(!loaded)
    return <Loading/>;

  if(user) {
    return <Navigate to='/'/>
  };

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
      <div className="w-full bg-gray-900 card text-primary-content">
        <div className="card-body">
          <h2 className="mb-5 text-4xl card-title">Register Here</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex w-full">
              <div className="grid flex-grow p-5 bg-gray-800 card rounded-box">
              <div className="mb-2 form-control">
                  <label className="input-group input-group-vertical">
                    <span className="label-text">Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="mb-2 form-control">
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
                <div className="mb-2 form-control">
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
                <div className="mb-2 form-control">
                  <label className="input-group input-group-vertical">
                    <span className="label-text">Photo URL</span>
                    <input
                      type="text"
                      name="photo_url"
                      placeholder="Enter your photo URL"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="flex items-center justify-center mt-5">
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