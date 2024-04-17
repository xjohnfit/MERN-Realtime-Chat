import React, { useState } from "react";
import GengerCheckbox from "./GengerCheckbox";
import { Link } from 'react-router-dom'
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

const [inputs, setInputs] = useState({
  fullName: '',
  username: '',
  password: '',
  confirmPassword: '',
  gender: ''
});

const { loading, signup } = useSignup()

const handleCheckboxChange = (gender) => {
  setInputs({...inputs, gender})
}

const handleSubmit = async (e) => {
  e.preventDefault();
  await signup(inputs)
}

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-500">
                Full Name
              </span>
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
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
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
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
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
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
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          
          <GengerCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-blue-100">Already have an account?</Link>

          <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700"
          disabled={loading}
          >{loading ? <span className=' text-white loading loading-spinner'></span> : "Sign Up"}</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
