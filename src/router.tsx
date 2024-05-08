import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import DashboardLayout from "./layouts/DashboardLayout";
import Books from "./pages/Books";
import AuthLayout from "./layouts/AuthLayout";
import EditProduct from "./pages/EditPage";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard/home"} />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/editbook",
        element: <EditProduct />,
      },
      {
        path: "book/create",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/dashboard/home"} />,
  },
]);

export default router;
