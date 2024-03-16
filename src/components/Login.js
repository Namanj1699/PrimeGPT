import React, { useRef, useState } from "react";
import Header from "./Header";
import ValidateUser from "../utils/constant/ValidateUser";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = ValidateUser(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
          alt="suggestion-logo"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg"
          alt="suggestion-logo"
        />
      </div>
      <form
        className="p-12 absolute w-3/12 m-40 mx-auto right-0 left-0 text-white bg-black bg-opacity-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-semibold text-2xl p-4 mx-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-600 rounded-md"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-600 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600 rounded-md"
        ></input>
        <p className="text-red-500 font-semibold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-[#0f79af] w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span>{isSignInForm ? "New to Prime ?" : "Already Registered ?"} </span>
        <span className="cursor-pointer font-bold" onClick={toggleSigninForm}>
          {isSignInForm ? "Sign Up" : "Sign In"}
        </span>{" "}
        <span>Now</span>
      </form>
    </div>
  );
};

export default Login;
