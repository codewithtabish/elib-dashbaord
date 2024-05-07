import useTokenStore from "@/store/store";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { token } = useTokenStore();

  if (!token) {
    return <Outlet />;
  }

  return <Navigate to={"/dashboard/home"} replace />;
};

export default AuthLayout;
