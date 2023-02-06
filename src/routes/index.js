import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboards";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Stocks from "../pages/Stocks";
import Buy from "../pages/Stocks/Buy";
import News from "../pages/Stocks/News";
import Trending from "../pages/Stocks/Trending";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile/:name/:age",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/stocks",
        element: <Stocks />,
        children: [
          {
            index: true,
            element: <News />,
          },
          {
            path: "trending",
            element: <Trending />,
          },
          {
            path: "buy",
            element: <Buy />,
          },
        ],
      },
    ],
  },
]);
