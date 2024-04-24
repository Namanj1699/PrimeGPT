import React, { useRef, useState } from "react";
import ValidateUser from "../utils/constant/ValidateUser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import Header from "./Header";
import { movieSuggestions1, movieSuggestions2 } from "../utils/constant/Constant";


const Login = () => {
  console.log("testing",process.env.REACT_APP_OPENAI_API_KEY)
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = ValidateUser(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid , email, displayName } = auth.currentUser;
            dispatch(addUser({ uid:uid, email:email, displayName:displayName }));
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Incorrect Credentials");
        });
    }
  };

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
        className="h-screen object-cover"
          src={movieSuggestions1}
          alt="suggestion-logo"
        />
        
      </div>
      <form
        className="p-12 absolute w-full md:w-3/12 m-40 mx-auto right-0 left-0 text-white bg-black bg-opacity-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-semibold text-2xl p-4 mx-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
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
