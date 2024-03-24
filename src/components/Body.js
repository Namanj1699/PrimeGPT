import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "../components/Login"
import BrowsingPage from "../components/BrowsingPage"
import {auth} from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/redux/userSlice'

export default function Body() {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
      path:"/browse",
      element: <BrowsingPage/>
    }
  ]);
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName } = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName }));
      } else {
        dispatch(removeUser())
      }
    });
  },[])

  return (
    <RouterProvider router={appRouter}/>
  )
}
