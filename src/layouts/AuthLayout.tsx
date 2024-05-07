import useTokenStore from "@/store/store";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { token } = useTokenStore();
  if (token) {
    return <Navigate to={"/dashboard/home"} replace />;
  }

  return (
    <>
      {/* The outlet is used to render the child routes within the parent route
    It is normally used for  */}
      <Outlet />
    </>
  );
};

export default AuthLayout;
