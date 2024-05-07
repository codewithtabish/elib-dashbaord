import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      {/* The outlet is used to render the child routes within the parent route
    It is normally used for  */}
      <Outlet />
    </>
  );
};

export default AuthLayout;
