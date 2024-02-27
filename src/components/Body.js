import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "../components/Login"
import BrowsingPage from "../components/BrowsingPage"

export default function Body() {

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

  return (
    <RouterProvider router={appRouter}/>
  )
}
