import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../utils/redux/userSlice'
import { userIcon } from "../utils/constant/Constant";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName } = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName }));
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return()=> unsubscribe();
  },[])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {});
  };

  return auth.currentUser ? (
    <>
      <div className="p-2 mt-1 mx-20 bg-black text-white flex justify-between rounded-lg">
        <p className="text-l font-bold">PrimeGPT</p>
        <div className="flex">
          <span className="mr-1 font-semibold">
            {user ? user.displayName : "Guest"}
          </span>
          <img
            src={userIcon}
            alt="user-icon"
            className="h-7 cursor-pointer"
            onClick={handleSignOut}
          />
        </div>
      </div>
    </>
  ) : (
    <div className="absolute z-10">
      {" "}
      <h1 className="text-white text-2xl font-semibold m-4">
        PrimeGPT
      </h1>
    </div>
  );
};

export default Header;
