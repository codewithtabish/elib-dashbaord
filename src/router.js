import { jsx as _jsx } from "react/jsx-runtime";
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
        element: _jsx(Navigate, { to: "/dashboard/home" }),
    },
    {
        path: "dashboard",
        element: _jsx(DashboardLayout, {}),
        children: [
            {
                path: "home",
                element: _jsx(HomePage, {}),
            },
            {
                path: "books",
                element: _jsx(Books, {}),
            },
            {
                path: "books/editbook",
                element: _jsx(EditProduct, {}),
            },
            {
                path: "book/create",
                element: _jsx(AddProduct, {}),
            },
        ],
    },
    {
        path: "/auth",
        element: _jsx(AuthLayout, {}),
        children: [
            {
                path: "login",
                element: _jsx(LoginPage, {}),
            },
            {
                path: "signup",
                element: _jsx(SignUpPage, {}),
            },
        ],
    },
    {
        path: "*",
        element: _jsx(Navigate, { to: "/dashboard/home" }),
    },
]);
export default router;
