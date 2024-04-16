import React from "react";
import GengerCheckbox from "./GengerCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-500">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-500">
                Username
              </span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-500">
                Password
              </span>
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-500">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          
          <GengerCheckbox />

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-blue-100">Already have an account?</a>

          <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
