import Login from "../views/Login";
import Register from "../views/Register";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../views/Dashboard";
import JobDetail from "../views/JobDetail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/job-detail",
    element: <JobDetail />,
    errorElement: <ErrorPage />,
  },
]);
