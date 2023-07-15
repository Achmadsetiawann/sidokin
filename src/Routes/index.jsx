import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/Home/HomeLayout.jsx";
import LoginLayout from "../Pages/Login/LoginLayout.jsx";
import RegisterLayout from "../Pages/Register/RegisterLayout.jsx";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
  {
    path: "/register",
    element: <RegisterLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
