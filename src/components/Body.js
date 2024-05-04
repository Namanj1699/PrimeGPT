import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import BrowsingPage from "../components/BrowsingPage";
import MovieOverview from "./MovieOverview";
import { Outlet } from "react-router-dom";
import appStore from "../utils/redux/appStore";
import { Provider } from "react-redux";
import Header from "./Header";
import Search from "./GPTSearch"

export default function Body() {
  const AppLayout = () => {
    return (
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </Provider>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <BrowsingPage />,
        },
        {
          path: "/overview/:movieId",
          element: <MovieOverview />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}
