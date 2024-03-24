import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase"
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
      });
  };

  return (
    <>
    <div className="border p-2 mt-1 mx-20 bg-black text-white flex justify-between rounded-lg">
        <p className="text-l font-bold">PrimeGPT</p>
        <div className="flex">
        <span className='mr-1 font-semibold'>{user ? user.displayName : "Guest"}</span>
        <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="user-icon" className="h-7 cursor-pointer" onClick={handleSignOut}/>
        </div>
      </div>
    </>
  )
}

export default Header
