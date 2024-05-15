import { Navigate, createBrowserRouter } from "react-router-dom";

import AddPage from "../pages/add-page";
import HomePage from "../pages/home-page";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Navigate to ="/admin"/>,
    },
    {
        path:'admin',
        element:<HomePage/>,
    },
    {
        path:'/admin/add',
        element:<AddPage/>,
    },
])