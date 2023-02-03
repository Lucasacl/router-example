import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboards";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
            path: "/dashboard",
            element: <Dashboard/>,
            }
        ]
    }
])